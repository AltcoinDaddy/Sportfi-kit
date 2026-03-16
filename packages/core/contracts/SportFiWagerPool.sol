// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/**
 * @title SportFiWagerPool
 * @dev A pari-mutuel P2P wagering pool for SportFi Kit v2.0.
 * Fans bet against each other; winners share the total pool proportional to their stake.
 */
contract SportFiWagerPool {
    struct Pool {
        string matchName;
        string homeTeam;
        string awayTeam;
        uint256 endTime;
        bool settled;
        uint256 winningOutcome; // 1: Home, 2: Away, 3: Draw
        uint256 totalVolume;
        mapping(uint256 => uint256) outcomePools; // outcomeId => totalAmount
    }

    address public owner;
    uint256 public nextPoolId;
    uint256 public constant PROTOCOL_FEE = 2; // 2% fee

    mapping(uint256 => Pool) public pools;
    mapping(uint256 => mapping(address => mapping(uint256 => uint256))) public stakes;

    event PoolCreated(uint256 indexed poolId, string matchName);
    // outcomeId mapping: 1 = Home, 2 = Away, 3 = Draw
    event WagerPlaced(uint256 indexed poolId, address indexed user, uint256 outcomeId, uint256 amount);
    event PoolSettled(uint256 indexed poolId, uint256 winningOutcome);
    event WinningsClaimed(uint256 indexed poolId, address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function createPool(
        string memory _matchName, 
        string memory _homeTeam, 
        string memory _awayTeam, 
        uint256 _duration
    ) external onlyOwner {
        Pool storage p = pools[nextPoolId];
        p.matchName = _matchName;
        p.homeTeam = _homeTeam;
        p.awayTeam = _awayTeam;
        p.endTime = block.timestamp + _duration;
        p.settled = false;
        
        emit PoolCreated(nextPoolId, _matchName);
        nextPoolId++;
    }

    function placeWager(uint256 _poolId, uint256 _outcomeId) external payable {
        Pool storage p = pools[_poolId];
        require(block.timestamp < p.endTime, "Wagering closed");
        require(!p.settled, "Already settled");
        require(_outcomeId >= 1 && _outcomeId <= 3, "Invalid outcome");
        require(msg.value > 0, "Amount > 0 required");

        stakes[_poolId][msg.sender][_outcomeId] += msg.value;
        p.outcomePools[_outcomeId] += msg.value;
        p.totalVolume += msg.value;

        emit WagerPlaced(_poolId, msg.sender, _outcomeId, msg.value);
    }

    function settlePool(uint256 _poolId, uint256 _winningOutcome) external onlyOwner {
        Pool storage p = pools[_poolId];
        require(block.timestamp >= p.endTime, "Match not finished");
        require(!p.settled, "Already settled");
        require(_winningOutcome >= 1 && _winningOutcome <= 3, "Invalid outcome");

        p.settled = true;
        p.winningOutcome = _winningOutcome;

        emit PoolSettled(_poolId, _winningOutcome);
    }

    function claimWinnings(uint256 _poolId) external {
        Pool storage p = pools[_poolId];
        require(p.settled, "Not settled");
        
        uint256 userStake = stakes[_poolId][msg.sender][p.winningOutcome];
        require(userStake > 0, "No winning stake");

        uint256 winningPool = p.outcomePools[p.winningOutcome];
        
        // Payout = (UserStake / WinningPool) * (TotalVolume * (100 - Fee) / 100)
        uint256 netVolume = (p.totalVolume * (100 - PROTOCOL_FEE)) / 100;
        uint256 payout = (userStake * netVolume) / winningPool;

        stakes[_poolId][msg.sender][p.winningOutcome] = 0; // Prevent re-entry
        
        payable(msg.sender).transfer(payout);
        
        emit WinningsClaimed(_poolId, msg.sender, payout);
    }

    function getOutcomeVolume(uint256 _poolId, uint256 _outcomeId) external view returns (uint256) {
        return pools[_poolId].outcomePools[_outcomeId];
    }

    function withdrawFees() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}

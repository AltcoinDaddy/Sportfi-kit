// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/**
 * @title SimplePredictionMarket
 * @dev A minimal prediction market contract for demonstration in SportFi Kit.
 */
contract SimplePredictionMarket {
    struct Market {
        string question;
        string[] options;
        uint256 endTime;
        bool resolved;
        uint256 winningOption;
        uint256 totalPool;
    }

    address public owner;
    mapping(uint256 => Market) public markets;
    mapping(uint256 => mapping(address => mapping(uint256 => uint256))) public bets;
    mapping(uint256 => mapping(address => bool)) public hasClaimed;
    mapping(uint256 => mapping(uint256 => uint256)) public optionPools; // marketId => optionId => totalAmount
    uint256 public marketCount;

    event MarketCreated(uint256 indexed marketId, string question);
    event BetPlaced(uint256 indexed marketId, address indexed user, uint256 optionId, uint256 amount);
    event MarketResolved(uint256 indexed marketId, uint256 winningOption);
    event WinningsClaimed(uint256 indexed marketId, address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function createMarket(string memory _question, string[] memory _options, uint256 _duration) public onlyOwner {
        require(_options.length >= 2, "Need at least 2 options");

        markets[marketCount] = Market({
            question: _question,
            options: _options,
            endTime: block.timestamp + _duration,
            resolved: false,
            winningOption: 0,
            totalPool: 0
        });
        emit MarketCreated(marketCount, _question);
        marketCount++;
    }

    function placeBet(uint256 _marketId, uint256 _optionId) public payable {
        Market storage market = markets[_marketId];
        require(block.timestamp < market.endTime, "Market ended");
        require(!market.resolved, "Already resolved");
        require(_optionId < market.options.length, "Invalid option");
        require(msg.value > 0, "Amount must be > 0");

        bets[_marketId][msg.sender][_optionId] += msg.value;
        optionPools[_marketId][_optionId] += msg.value;
        market.totalPool += msg.value;

        emit BetPlaced(_marketId, msg.sender, _optionId, msg.value);
    }

    /**
     * @dev Resolve a market with the winning option. Only callable by owner after market ends.
     * @param _marketId The ID of the market to resolve.
     * @param _winningOption The index of the winning option.
     */
    function resolveMarket(uint256 _marketId, uint256 _winningOption) external onlyOwner {
        Market storage market = markets[_marketId];
        require(block.timestamp >= market.endTime, "Market not ended");
        require(!market.resolved, "Already resolved");
        require(_winningOption < market.options.length, "Invalid option");

        market.resolved = true;
        market.winningOption = _winningOption;

        emit MarketResolved(_marketId, _winningOption);
    }

    /**
     * @dev Claim winnings from a resolved market.
     * Payout = (UserBet / WinningOptionPool) * TotalPool
     */
    function claimWinnings(uint256 _marketId) external {
        Market storage market = markets[_marketId];
        require(market.resolved, "Not resolved");
        require(!hasClaimed[_marketId][msg.sender], "Already claimed");

        uint256 userBet = bets[_marketId][msg.sender][market.winningOption];
        require(userBet > 0, "No winning bet");

        uint256 winningPool = optionPools[_marketId][market.winningOption];
        uint256 payout = (userBet * market.totalPool) / winningPool;

        hasClaimed[_marketId][msg.sender] = true;
        bets[_marketId][msg.sender][market.winningOption] = 0;

        (bool success, ) = payable(msg.sender).call{value: payout}("");
        require(success, "Transfer failed");

        emit WinningsClaimed(_marketId, msg.sender, payout);
    }

    function getMarketOptions(uint256 _marketId) external view returns (string[] memory) {
        return markets[_marketId].options;
    }

    function getOptionPool(uint256 _marketId, uint256 _optionId) external view returns (uint256) {
        return optionPools[_marketId][_optionId];
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/**
 * @title SimplePredictionMarket
 * @dev A minimal flat contract for demonstration in SportFi Kit.
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

    mapping(uint256 => Market) public markets;
    mapping(uint256 => mapping(address => mapping(uint256 => uint256))) public bets;
    uint256 public marketCount;

    event MarketCreated(uint256 indexed marketId, string question);
    event BetPlaced(uint256 indexed marketId, address indexed user, uint256 optionId, uint256 amount);

    function createMarket(string memory _question, string[] memory _options, uint256 _duration) public {
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
        require(_optionId < market.options.length, "Invalid option");
        require(msg.value > 0, "Amount must be > 0");

        bets[_marketId][msg.sender][_optionId] += msg.value;
        market.totalPool += msg.value;

        emit BetPlaced(_marketId, msg.sender, _optionId, msg.value);
    }
}

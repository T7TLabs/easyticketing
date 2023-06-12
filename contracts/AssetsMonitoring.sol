pragma solidity ^0.8.18;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// Currently supported networks: Polygon, Mantle.
// TODO: Support Avalanche.
contract AssetsMonitoring {
    AggregatorV3Interface internal aavePriceFeed;
    AggregatorV3Interface internal bitPriceFeed;
    AggregatorV3Interface internal maticPriceFeed;

    constructor() {
        aavePriceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        bitPriceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        maticPriceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
    }

    function getRoundPriceForToken(uint80 roundId, uint256 tokenId) public view returns (int256) {
        AggregatorV3Interface feed;

        if (tokenId == 0) {
            feed = aavePriceFeed;
        } else if (tokenId == 1) {
            feed = bitPriceFeed;
        } else if (tokenId == 2) {
            feed = maticPriceFeed;
        }

        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            uint timeStamp,
            /*uint80 answeredInRound*/
        ) = feed.getRoundData(roundId);

        require(timeStamp > 0, "PRICE_FEED__ROUND_IS_NOT_COMPLETE");

        return price;
    }
}

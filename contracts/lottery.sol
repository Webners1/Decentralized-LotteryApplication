// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.6/vendor/SafeMathChainlink.sol";

contract Lottery{
    address payable[] public players;
    uint256 public fee;
    AggregatorV3Interface internal ethUsdPriceFeed;
    constructor(address _priceFeedAddress)public {
        fee = 50*(10**18);
        ethUsdPriceFeed = AggregatorV3Interface(_priceFeedAddress);
    }
    function enter()public payable{
        require(msg.value>= fee,'Amount is less then Fee!!!1');
        players.push(msg.sender);
    }
    function getEntryFee()public view returns(uint){
        (int price,,,,) = ethUsdPriceFeed.latestRoundData();
    uint256 Adjustprice= uint256(price) * 10**10;
    uint costToEnter = (fee *10**18) / Adjustprice;
    return costToEnter;
    }
    function startLottery()public{}
    function endLottery()public{}
}
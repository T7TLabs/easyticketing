pragma solidity ^0.8.18;

import "./Event.sol";
import "./AssetsMonitoring.sol";

contract Base {
    event EventTicketBought(
        address indexed _eventAddress,
        uint256 indexed _ticketId
    );
    event EventCreated(
        address indexed _eventOwner,
        string _eventName,
        uint256 _ticketsSupplyCount
    );
    struct OnChainEvent {
        string name;
        uint256 ticketsSupplyCount;
        uint256 ticketPrice;
    }

    AssetsMonitoring monitoringAdapter = new AssetsMonitoring();
    uint256 public eventRegisterFee = 0.001 ether;

    mapping(string => OnChainEvent) public events;

    function createEvent(
        string memory name,
        string memory shortName,
        uint256 ticketPriceInit,
        uint256 maxTicketSellPriceInit,
        uint256 maxTicketsSupplyInit
    ) public payable {
        require(msg.value >= eventRegisterFee, "LOW_EVENT_REGISTER_FEE");

        Event e = new Event(name, shortName, ticketPriceInit, maxTicketSellPriceInit, maxTicketsSupplyInit);

        events[name] = OnChainEvent(name, maxTicketsSupplyInit, ticketPriceInit);

        emit EventCreated(e.getOwner(), name, maxTicketsSupplyInit);
    }

    function getBestAssetToPayWith() public pure returns(uint8) {
        // TODO: Compare prices in right way.
        // int256 maticCurrentRoundPrice = monitoringAdapter.getRoundPriceForToken(roundId, 2);

        return 2;
    }
 }

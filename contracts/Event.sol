pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Event is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public ticketPrice = 0 ether;
    uint256 public maxTicketSellPrice = 0 ether;

    string public eventName;
    uint256 public maxTicketsSupplyAvailable;
    uint256 private currentTicketsCountLeft;
    uint256 private ticketsBoughted;
    bool public isEventPaused = false;

    constructor(
        string memory name,
        string memory shortName,
        uint256 ticketPriceInit,
        uint256 maxTicketSellPriceInit,
        uint256 maxTicketsSupplyInit
    ) ERC721(name, shortName) {
        eventName = name;
        ticketPrice = ticketPriceInit;
        maxTicketSellPrice = maxTicketSellPriceInit;
        maxTicketsSupplyAvailable = maxTicketsSupplyInit;
        currentTicketsCountLeft = maxTicketsSupplyInit;

        _tokenIds.increment();
        _setTokenURI(_tokenIds.current(), "ipfs://<inprogress>");
    }

    function getOwner() public view returns (address) {
        return owner();
    }

    function setIsEventPaused(bool isMintPaused) public onlyOwner {
        isEventPaused = isMintPaused;
    }

    function buyTicket(uint8 amount) public payable {
        require(!isEventPaused, "EVENT_TICKETS_SALE_IS_CURRENTLY_PAUSED");
        require((msg.value * amount) == (ticketPrice * amount), "ETH_AMOUNT_INVALID");
        require(amount <= currentTicketsCountLeft, "TICKETS_AMOUNT_EXCEEDED");

        for (uint8 i = 1; i <= amount; i++) {
            _mint(msg.sender, i);
            
            currentTicketsCountLeft -= 1;
            ticketsBoughted += 1;

            _tokenIds.increment();
        }
    }
}

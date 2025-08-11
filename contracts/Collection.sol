// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Collection is ERC721 {
    mapping(uint256 => string) public categoryOfToken;
    uint256 private nextTokenId;

    struct CollectionData {
        string name;
        string imageUrl;
        string category;
    }

    mapping(uint256 => CollectionData) public collectionData;
    uint256[] public allTokens; // New array to store all token IDs

    event CollectionCreated(uint256 indexed tokenId, string name, string imageUrl, string category);

    constructor() ERC721("NFT Collection", "NFTC") {}

    function createCollection(string memory _name, string memory _imageUrl, string memory _category) external {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_imageUrl).length > 0, "Image URL cannot be empty");
        require(
            compareStrings(_category, "Modern") ||
            compareStrings(_category, "Impressionism") ||
            compareStrings(_category, "Surrealism") ||
            compareStrings(_category, "Photography") ||
            compareStrings(_category, "Digital Art") ||
            compareStrings(_category, "Calligraphy"),
            "Invalid category"
        );

        uint256 tokenId = nextTokenId;
        _mint(msg.sender, tokenId);
        collectionData[tokenId] = CollectionData(_name, _imageUrl, _category);
        allTokens.push(tokenId); // Add token ID to the array
        emit CollectionCreated(tokenId, _name, _imageUrl, _category);

        nextTokenId++;
    }

    // Function to compare strings
    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    // Function to get all token IDs
    function getAllTokens() external view returns (uint256[] memory) {
        return allTokens;
    }
}
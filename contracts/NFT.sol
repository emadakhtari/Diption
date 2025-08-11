// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    struct NFTData {
        string name;
        uint256 price;
        string description;
        string collection;
        string fileUrl; 
    }

    mapping(uint256 => NFTData) public nftData;
    uint256 public nextTokenId;

    mapping(string => uint256[]) private nftsByCollection;

    event NFTCreated(uint256 indexed tokenId, string collection, string fileUrl);

    constructor() ERC721("NFT", "NFT") {}

    function createNFT(
        string memory _name,
        uint256 _price,
        string memory _description,
        string memory _collection,
        string memory _fileUrl
    ) external {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(_price > 0, "Price must be greater than zero");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(bytes(_fileUrl).length > 0, "File URL cannot be empty");

        uint256 tokenId = nextTokenId++;
        _mint(msg.sender, tokenId);
        nftData[tokenId] = NFTData(_name, _price, _description, _collection, _fileUrl);
        nftsByCollection[_collection].push(tokenId);

        emit NFTCreated(tokenId, _collection, _fileUrl);
    }

    function getNFTsByCollection(string memory _collection) external view returns (uint256[] memory) {
        return nftsByCollection[_collection];
    }

    function getNFTsSortedByPrice() external view returns (uint256[] memory) {
        // Implement sorting by price
    }

}

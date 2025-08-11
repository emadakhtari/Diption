const fs = require("fs");
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Collection = await ethers.getContractFactory("Collection");
    const collection = await Collection.deploy();
    console.log("Collection contract address:", collection.address);

    // Write Collection contract's ABI to JSON file
    const collectionAbi = JSON.stringify(Collection.interface, null, 2);
    fs.writeFileSync("../src/services/Collection.json", collectionAbi);

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    console.log("NFT contract address:", nft.address);

    // Write NFT contract's ABI to JSON file
    const nftAbi = JSON.stringify(NFT.interface, null, 2);
    fs.writeFileSync("../src/services/NFT.json", nftAbi);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

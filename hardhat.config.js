/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const ALCHEMY_API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.REACT_APP_SEPOLIA_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      // url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      url: `https://eth-sepolia.g.alchemy.com/v2/9QFPdB2_anNpj7mx4c2ygT33lBwGsNsT`,
      // chainId: 11155111,
      accounts: [
        `0xdab4175ba83bb49f4d871356295258e3fc133b8aacf91cb8c2d38135ff8bedb6`,
      ],
      // accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    },
    sepolia: {
      url: "https://sepolia.com/api/v1/node/polkadot",
      chainId: 2022, // Sepolia test network chain ID
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
};

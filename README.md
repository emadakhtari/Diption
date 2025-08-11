<!-- PROJECT SHIELDS -->
<p align="center">
  <a href="https://github.com/emadakhtari/Diption">
    <img src="https://img.shields.io/github/license/emadakhtari/Diption?style=for-the-badge" alt="License">
  </a>
  <a href="https://github.com/emadakhtari/Diption/stargazers">
    <img src="https://img.shields.io/github/stars/emadakhtari/Diption?style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/emadakhtari/Diption/forks">
    <img src="https://img.shields.io/github/forks/emadakhtari/Diption?style=for-the-badge" alt="Forks">
  </a>
</p>

<!-- PROJECT LOGO -->
<p align="center">
  <img src="https://github.com/emadakhtari/Diption/blob/main/src/assets/images/logo512.png" alt="Logo" width="80">
  <h1 align="center">Diption NFT Marketplace – Example Project</h1>
  <p align="center">
    A minimal NFT marketplace for demonstration purposes – mint, buy, and manage NFTs on Ethereum with PINATA IPFS and MetaMask wallet integration.
    <br />
    <a href="#-features"><strong>Explore Features »</strong></a>
    <br />
    <a href="#-installation">Installation</a>
    ·
    <a href="#-tech-stack">Tech Stack</a>
    ·
    <a href="#-license">License</a>
  </p>
</p>

---

## 📌 About the Project

This is a **simple NFT Marketplace** example built with **ReactJS** and **Solidity**.  
It allows users to:
- **Mint NFTs** with images stored on **PINATA’s IPFS**.
- **Buy NFTs** using Ethereum via **MetaMask wallet**.
- **Manage collections** with filtering and sorting.
- **Browse by fixed categories** defined in smart contracts.

The dApp uses:
- **Ethereum blockchain** (Sepolia testnet recommended).
- **MetaMask wallet** for secure transactions.

---

## ✨ Features

- **🖼 Mint NFTs**
  - Add to Mint, then Wallet.
  - Upload files via **PINATA IPFS**.
  - Set price in Ethereum.
  - Select category & collection.

- **💰 Buy NFTs** using Ethereum via **MetaMask**.

- **📚 Collections**
  - Create collections with PINATA-hosted images.
  - Filter & sort collections.

- **🏷 Categories**
  - Predefined in smart contracts.

- **🏠 Homepage**
  - Latest NFTs
  - Most visited
  - Most traded

---

## 🛠 Tech Stack

**Frontend**
- ⚛️ [ReactJS](https://react.dev/)
- 🎨 [Material UI](https://mui.com/)

**Blockchain**
- 📝 [Solidity](https://soliditylang.org/)
- 🔨 [Hardhat](https://hardhat.org/)
- 🧪 [Ethereum Waffle](https://ethereum-waffle.readthedocs.io/)
- 🌐 [Web3.js](https://web3js.readthedocs.io/)
- 📦 [PINATA IPFS API](https://pinata.cloud/)
- 📡 [ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client)
- 🦊 [MetaMask](https://metamask.io/) for wallet connection
- ⛓ [Ethereum](https://ethereum.org/) blockchain network

---

---

## ⚙ Installation (Copy All at Once)


# 1️⃣ Prerequisites
# Make sure you have installed:
# - Node.js v18.20.8
# - npm v10+
# - MetaMask browser extension
# - PINATA account for IPFS storage
# - Ethereum testnet (Sepolia recommended)

# 2️⃣ Clone the Repository
git clone https://github.com/emadakhtari/Diption.git
cd Diption

# 3️⃣ Install Dependencies
npm install

# 4️⃣ Configure Environment Variables
# Create an account at: https://pinata.cloud/
# Create a .env file in the root directory with:
REACT_APP_PINATA_KEY=your_pinata_key
REACT_APP_PINATA_SECRET=your_pinata_project_secret
REACT_APP_PINATA_GATEWAY_URL=your_pinata_gatway_url
REACT_APP_PINATA_JWT=your_pinata_JWT
REACT_CONTRACT_ADDRESS=your_contract_address
REACT_NFT_CONTRACT=your_nft_address

# 5️⃣ Compile Smart Contracts
npx hardhat compile

# 6️⃣ Deploy Smart Contracts
npx hardhat run scripts/deploy.js --network sepolia
# (Copy the deployed contract addresses to your frontend config)

# 7️⃣ Start the Frontend
npm start
# Open http://localhost:3000 in your browser


## 📂 Project Structure

Diption/
│
├── contracts/          # Solidity smart contracts
├── scripts/            # Deployment scripts
├── src/                # ReactJS frontend source
│   ├── assets/         # Images & Files
│   ├── components/     # Reusable UI components
│   ├── services/       # Web3 helpers & API calls
│   ├── pages/          # App pages
│   └── App.js
│   └── index.js
│   └── theme.js
├── .env.example        # Environment variable example
├── hardhat.config.js   # Hardhat configuration
└── package.json

## 🧪 Running Tests
npx hardhat test


## ☎️ Contact Me
- Developer: Emad Akhtari
- 📧 Email: [akhtari.em1@gmail.com]
- 🔗 GitHub: https://github.com/emadakhtari

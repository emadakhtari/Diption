export const CONTRACT_ADDRESS = "0x56F41B840733e5159a95955301d996F49b7fB4e9";
export const NFT_CONTRACT = "0xD63bd29829f0bCC44c94E883bB39872E1B887720";
export const NFT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_collection",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fileUrl",
        type: "string",
      },
    ],
    name: "createNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_collection",
        type: "string",
      },
    ],
    name: "getNFTsByCollection",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNFTsSortedByPrice",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "collection",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fileUrl",
        type: "string",
      },
    ],
    name: "NFTCreated",
    type: "event",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];
export const COLLECTION_ABI = [
  {
    inputs: [],
    name: "createCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const contractABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_imageUrl",
        type: "string",
      },
      {
        name: "_category",
        type: "string",
      },
    ],
    name: "createCollection",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const contractDataABI = [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "collections",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUrl",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

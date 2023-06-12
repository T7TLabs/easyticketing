import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    /* mantle_testnet: {
      url: "https://rpc.testnet.mantle.xyz",
      accounts: [PRIVATE_KEY as string]
    }, */
    polygon_testnet: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY as string]
    },
  },
};

export default config;

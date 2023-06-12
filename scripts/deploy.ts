// require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
import { ethers } from "hardhat";

async function main() {
  const Base = await ethers.getContractFactory("Base");
  const baseInstance = await Base.deploy();
  const addr = await baseInstance.getAddress();

  console.log("(EasyTicketing) deployed to address: ", addr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

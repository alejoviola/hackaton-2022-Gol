const {
  frontEndContractsFile,
  frontEndAbiFile,
} = require("../helper-hardhat-config");
const { ethers, network } = require("hardhat");
const fs = require("fs");

module.exports = async () => {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Writing to front end...");
    await updateContractAddresses();
    await updateAbi();
    console.log("Front end written!");
  }
};

async function updateAbi() {
  const currentContract = await ethers.getContract("SportsChallenges");
  fs.writeFileSync(
    frontEndAbiFile,
    currentContract.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateContractAddresses() {
  const currentContract = await ethers.getContract("SportsChallenges");
  const contractAddresses = JSON.parse(
    fs.readFileSync(frontEndContractsFile, "utf8")
  );
  if (network.config.chainId.toString() in contractAddresses) {
    if (
      !contractAddresses[network.config.chainId.toString()].includes(
        currentContract.address
      )
    ) {
      contractAddresses[network.config.chainId.toString()].push(
        currentContract.address
      );
    }
  } else {
    contractAddresses[network.config.chainId.toString()] = [
      currentContract.address,
    ];
  }
  fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses));
}
module.exports.tags = ["all", "frontend"];

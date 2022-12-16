const { ethers, network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const locationProviderFee = ethers.utils.parseEther("0.0015");
  const contractOwnerFee = ethers.utils.parseEther("0.0005");
  arguments = [locationProviderFee.toString(), contractOwnerFee.toString()];

  const sportsbook = await deploy("SportsChallenges", {
    from: deployer,
    log: true,
    args: arguments,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log("-------------------------------------");

  // if (
  //   (!developmentChains.includes(network.name) &&
  //     process.env.ETHERSCAN_API_KEY) ||
  //   process.env.POLYGONSCANCAN_API_KEY
  // ) {
  log("Verifying...");
  await verify(sportsbook.address, arguments);
  // }

  log("-------------------------------------");
};

module.exports.tags = ["all", "sportsbook"];


require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;
const etherscanKey = "0YVX2Y49SGkxuEZ5sM1THocORVjLoyWI";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version : "0.8.17",
  },

  networks: {
    goerli: {
      url: endpoint,
      accounts: [`0x${privateKey}`]
    }
  },

  etherscan:{
    apiKey: etherscanKey
  }
};

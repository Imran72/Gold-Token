
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle")

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.end.URL;

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
  }
};

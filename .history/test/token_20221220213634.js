const { expect } = require("chai");
const { ethers } = require("hardhat");


beforeEach(async function () {
  TokenA = await ethers.getContractFactory("GLDToken");
  [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

  hardhatToken = await TokenA.deploy(4);
});

describe("Deployment", function () {
  it("Should assign the total supply of tokens to the owner", async function () {
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
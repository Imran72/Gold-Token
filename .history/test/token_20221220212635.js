const { expect } = require("chai");
const { ethers } = require("hardhat");


beforeEach(async function () {
  Token = await ethers.getContractFactory("GLDToken");
  [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

  let hardhatToken = await Token.deploy(totalSupply);
});

describe("Deployment", function () {
  it("Should assign the total supply of tokens to the owner", async function () {
    let ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
const { ethers } = require("hardhat");


const main = async () => {
    const initialSupply = ethers.utils.parserEther("100000");
    const [deployer] = await ethers.getSigners();

    console.log(`Address deploying the contract --> ${deployers.address}`);

    const tokenFactory = await ethers.getContractFactory('Token');

    const contract = await tokenFactory.deploy(initialSupply);

    console.log(`Token Contract address --> ${contract.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
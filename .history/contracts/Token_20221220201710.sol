 solidity
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragmа solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
}
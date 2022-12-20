
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0 || ^0.6.0 || ^0.7.0 || ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
}

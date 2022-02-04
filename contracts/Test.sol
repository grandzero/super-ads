// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "hardhat/console.sol";

interface IERC20 {
    function mint(address account, uint256 amount) external returns (bool);

    function balanceOf(address account) external view returns (uint256);
}

contract Test {
    IERC20 private testToken;

    constructor(IERC20 _tokenAddr) {
        testToken = _tokenAddr;
    }

    function mintSomeToken(address _owner) public {
        testToken.mint(_owner, 1000);
    }

    function getBalance(address _owner) public view returns (uint256) {
        uint256 balance = testToken.balanceOf(_owner);
        console.log(balance);
        return balance;
    }
}

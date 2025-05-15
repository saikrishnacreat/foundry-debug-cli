// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "forge-std/Script.sol";
import "forge-std/console.sol";

contract DebugScript is Script {
    function run() public {
        console.log("Starting debug...");
        uint256 val = 42;
        console.log("val =", val);
    }
}

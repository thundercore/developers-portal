# ThunderCore RNGLibrary

## Summary
ThunderCore blockchain supports generating cryptographically secure 256-bits random numbers through Thunder trusted randome number generator procompile contract.

## Motivation
When developing smart contract for ethereum, there's no builtin support to generate cryptographically secure random numbers. There are some solutions e.g. using Ethereum Alarm or Oraclize, while it relys on some external services and is not scalable. So ThunderCore added builtin support to generate cryptographically secure random numbers through precompiled contract.

## Specification
ThunderCore implements a precompiled contracts which resides at address 0x8cC9C2e145d3AA946502964B1B69CE3cD066A9C7.  The address is the first 20 bytes of sha256("Thunder_Random"). Each invocation of fallback function of trusted random generator precompiled contract will return a 256-bits random number. The gas cost for each invocation is 26134. The invocation is the same as calling ethereum precompiled contracts. Below is an example which can be embedded into smart contract.  ThunderCore also creates a library which can be imported from github with URL http://github.com/thundercore/RandomLibrary/RandomLibrary.sol in Remix. The random number generator will always return a bytes32 value, so you will need to cast/convert this value as it best suits your needs.

```
function rand() internal returns (uint256) {
    uint256[1] memory m;
    assembly {
        if iszero(call(not(0), 0x8cC9C2e145d3AA946502964B1B69CE3cD066A9C7, 0, 0, 0x0, m, 0x20)) {
            revert(0, 0)
        }
    }
    return m[0];
}
```

## Example
In the basic example shown below, a random number is used to determine whether the contract will pay the user. If the number is greater than the bet from the user, the contract takes the user's wager. If not, the contract pays the user their own bet plus 1.

```
pragma solidity ^0.4.25;

import "http://github.com/thundercore/RandomLibrary/RandomLibrary.sol";
contract RandomExample {
    event didWin(bool);
    uint256 public contractBalance;

    constructor() payable {
        contractBalance = uint256(msg.value);
    }

    function betNumber(uint256 bet) payable external returns (bool) {
        if (msg.value < 5) {
            contractBalance = contractBalance + msg.value;

            didWin(false);
            return false;
        }

        uint256 randomNumber = LibThunderRNG.rand();
        if (bet < randomNumber) {
            msg.sender.transfer(msg.value+1);
            didWin(true);

            contractBalance = contractBalance - (msg.value+1);
            return true;
        }

        contractBalance = contractBalance + msg.value;
        didWin(false);
        return false;
    }
}
 ```

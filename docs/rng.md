---
id: rng
title: How to Use Random Number Generator 
---
## Summary
ThunderCore blockchain supports generating cryptographically secure 256-bit
random numbers through Thunder trusted random number generator procompile
contract.

## Motivation
When developing smart contract for Ethereum, there's no built-in support to
generate cryptographically secure random numbers. While there are some possible
solutions e.g. using Ethereum Alarm or Oraclize, these solutions rely
on external services and are not scalable. To address this need,
ThunderCore has implemented built-in support to generate cryptographically secure
random numbers through precompiled contract.

## Specification
ThunderCore has implemented a precompiled contract which resides at address
0x8cC9C2e145d3AA946502964B1B69CE3cD066A9C7. The address is the first 20
bytes of sha256("Thunder_Random"). Each invocation of fallback function
of trusted random generator precompiled contract will return a 256-bit
random number. The gas cost for each invocation is 26134. The invocation
is the same as calling Ethereum precompiled contracts. Below is an example
which can be embedded into smart contract.  ThunderCore also provides a
library which can be imported from Github with URL
github.com/thundercore/RandomLibrary/RandomLibrary.sol in Remix.
The random number generator will always return a bytes32 value, so you
will need to cast or convert this value as it best suits your needs.

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
In the basic example shown below, a random number is used to determine
whether the contract will pay the user. If the number is greater than
the bet from the user, the contract takes the user's wager. If not, the
contract pays the user their own bet plus 1.

```
pragma solidity ^0.4.25;

import "github.com/thundercore/RandomLibrary/RandomLibrary.sol";
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

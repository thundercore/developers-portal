---
id: random-number-generator
title: Random Number Generator
---
## Summary
The ThunderCore blockchain supports generating cryptographically secure 256-bit random numbers through a Thunder trusted random number generating pre-compiled contract.

The random number generator is available on our [mainnet](https://scan.thundercore.com/) and [testnet](https://scan-testnet.thundercore.com/).

## Motivation
When developing smart contracts for Ethereum, developers do not have  built-in support for generating cryptographically-secure random numbers. While there are some possible solutions (e.g. using Ethereum Alarm or Oraclize), these solutions rely on external services and are not scalable. To address this need, ThunderCore has implemented built-in support to generate cryptographically secure random numbers through a pre-compiled contract.

## Specification
ThunderCore has implemented a pre-compiled contract which resides at address `0x8cC9C2e145d3AA946502964B1B69CE3cD066A9C7`. The address is the first 20 bytes of `sha256("Thunder_Random")`. Each invocation of fallback function of trusted random generator pre-compiled contract will return a 256-bit random number. The gas cost for each invocation is `26134`. The invocation is the same as calling Ethereum pre-compiled contracts. Below is an example which can be embedded into a smart contract.  ThunderCore also provides a [library](https://github.com/thundercore/RandomLibrary/blob/master/RandomLibrary.sol) which can be used in Remix with `import "github.com/thundercore/RandomLibrary/RandomLibrary.sol"` from Github with URL  in Remix. The random number generator will always return a `bytes32` value, so you will need to cast or convert this value as it best suits your needs.

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

**NOTE**: the `require(msg.sender == tx.origin)` check in `bet()` is necessary for security and explained below.

```
pragma solidity ^0.4.25;

import "github.com/thundercore/RandomLibrary/RandomLibrary.sol";
contract RandomExample {
    event UserWon(bool, uint256, uint256);

    constructor() payable public {
    }

    function bet(uint256 v) payable external returns (bool) {
        // block calls from other contracts to prevent "revert transaction unless I won" attacks
        require(msg.sender == tx.origin);

        if (msg.value < 5) {
            emit UserWon(false, 0, 0);
            return false;
        }
        uint256 randomNumber = LibThunderRNG.rand();
        if (v < randomNumber) {
            msg.sender.transfer(msg.value+1);
            emit UserWon(true, v, randomNumber);
            return true;
        }
        emit UserWon(false, v, randomNumber);
        return false;
    }
}
```

### Preventing "Revert the Transaction Unless I Won" Attacks

There's a conceptually simple approach to attack any game of chance on EVM compatible block chains. The attacker would deploy a contract and do something like:

1. play game of chance
1. check if balance in the attacker's contract decreased after the game
1. revert the transaction if the contract balance decreased

In Solidity, the attack would look like:
```
function attack(uint256 v) public  {
    uint256 pool = this.balance;
    /* play game of chance ... */
    require(pool <= this.balance);
}
```

Adding a `require(msg.sender == tx.origin)` check at the beginning of your `bet` function prevents other contracts from calling your own and thus blocks the attack.
See the
[Block and Transaction Properties](https://solidity.readthedocs.io/en/v0.4.25/units-and-global-variables.html#block-and-transaction-properties) section in [Solidity in Depth](https://solidity.readthedocs.io/en/v0.4.25/solidity-in-depth.html) for details:

 - `msg.sender` `(address)`: sender of the message (current call)
 - `tx.origin` `(address)`: sender of the transaction (full call chain)

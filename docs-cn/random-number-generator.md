---
id: random-number-generator
title: 随机数生成器
---
## 总结
ThunderCore 区块链能在链上产生加密安全的 256 位元数随机数，背后原理是 ThunderCore 透过预先整合可信赖的随机数智能合约。目前，随机数产生器只在测试链上支援。

## 动机
在为以太坊开发智能合约时，开发人员没有内置支持来生成加密安全的随机数。虽然有一些可能的解决方案 (例如，使用以太坊 alarm 或 Oraclize)，但这些解决方案依赖于外部服务并且不可扩展。为满足这一需求，ThunderCore 已经内置支持，通过预编译制智能合约生成加密安全随机数。

## 使用方法
ThunderCore 已经实现了一个预编译的智能合约，该合约位于地址 `0x8cC9C2e145d3AA946502964B1B69CE3cD066A9C7`，地址是 sha256（“Thunder_Random”）的前 20 个字节。每次调用预编译随机生成器合约的回退函数都会返回一个 256 位的随机数。 每次调用的交易成本 (Gas fee) 为 26134，与调用以太坊预编译的合约相同。 以下是可嵌入智能合约中的示例。 ThunderCore 还提供了一个库，可以从通过 github.com/thundercore/RandomLibrary/RandomLibrary.sol 导入到 Remix。随机数生成器将始终返回 bytes32 值，因此您需要根据你的需求转型或转换此值。

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

## 示例
在下面展示的基本示例中，我们使用随机数来确定合约是否将向用户付款。如果该数字大于用户的下注，则该合约将获得用户的下注。如果没有，合约向用户支付他们自己的赌注加1。

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

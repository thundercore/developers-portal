---
id: random-number-generator
title: 随机数生成器
---
## 总结
ThunderCore 区块链能产生密码学安全的 256 位元数随机数。TT链[主网](https://scan.thundercore.com/)及[测试网](https://scan-testnet.thundercore.com/)皆支援随机数产生器。

## 动机
在为以太坊开发智能合约时，开发人员没有内置支持来生成密码学安全的随机数。虽然有一些可能的解决方案 (例如，使用 Ethereum Alarm 或 Oraclize)，但这些解决方案依赖于外部服务并且不可扩展。为满足这一需求，ThunderCore 已经内置支持，通过预编译制智能合约生成加密安全随机数。

## 使用方法
ThunderCore 已经实现了一个预编译的智能合约，该合约位于地址 `0x8cC9C2e145d3AA946502964B1B69CE3cD066A9C7`，地址是 `sha256("Thunder_Random")` 的前 20 个字节。每次调用预编译随机生成器合约都会返回一个 256 位的随机数。 每次调用的油耗成本 (gas cost) 为 `26134`。调用方式与调用以太坊预编译合约相同。 以下 `rand` 函数代码可直接嵌入智能合约中使用。 ThunderCore 还提供了一个[库](https://github.com/thundercore/RandomLibrary/blob/master/RandomLibrary.sol) 可通过 `import "github.com/thundercore/RandomLibrary/RandomLibrary.sol"` 语法导入到 Remix。随机数生成器将始终返回 bytes32 值，因此您需要根据你的需求转型或转换此值。

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
在下面展示的基本示例中，我们使用随机数来决定合约是否向用户付款。若随机数大于用户猜的数字，则合约获得用户下注时的转帐金额。若否，合约向用户支付用户的转帐金额加一。

**注意**: 合约 `bet` 函式开头的 `require(msg.sender == tx.origin)` 检查为了安全性是必要的，详见下文解释。

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

### 阻止「输钱就还原交易」攻击

有一种观念上简单的攻击方法，适用于 EVM 上的任何机率游戏。攻击者布署一个合约，内容是：

1. 玩某种机率游戏
1. 检查攻击用合约馀额是否减少
1. 若馀额减少、输钱了，则还原交易 (revert transaction)

用 Solidity 语言表达成代码：
```
function attack(uint256 v) public  {
    uint256 pool = this.balance;
    /* play game of chance ... */
    require(pool <= this.balance);
}
```

在 `bet` 函式开头加上 `require(msg.sender == tx.origin)` 检查会阻止别的合约呼叫 `bet` 函式，攻击者不能用合约还原交易，就阻止了此攻击。

详见 [Solidity in Depth](https://solidity.readthedocs.io/en/v0.4.25/solidity-in-depth.html) 书中 [Block and Transaction Properties](https://solidity.readthedocs.io/en/v0.4.25/units-and-global-variables.html#block-and-transaction-properties) 一节:

 - `msg.sender` `(address)`: sender of the message (current call)
 - `tx.origin` `(address)`: sender of the transaction (full call chain)

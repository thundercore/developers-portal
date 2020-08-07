---
id: technical
title: 技术类问题
---

## ThunderCore 与以太坊兼容吗？
ThunderCore 与以太坊采用了相同的虚拟机 (EVM)，因此，在以太坊上运行的智能合约也可以在 ThunderCore 上运行， 这意味着 ThunderCore 支持以太坊支持的语言，包含 Solidity、Vyper 等。

此外，ThunderCore 公开了以太坊的 [JSON RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC)，这使得它与使用 JSON RPC 的工具兼容，如：web3.js、MetaMask、Truffle 等。

一般来说，任何在以太坊上运行的 DApp 皆可在极少或没有修改的情况下在 ThunderCore 上运行。 你也可以阅读有关如何从以太坊迁移到 ThunderCore 的相关 [教程](migrate-to-thunder.md) 。

## ThunderCore 是去中心化的网络吗？
是的，ThunderCore 奠基于去中心化的信任机制，其用户既不需要信任共识节点，也不需要信任加速器，只需要相信 ThunderCore 上的诚实多数节点即可确认安全性(一般的区块链亦如此)。若想了解其共识演算法，请参考 ThunderCore 的 [白皮书](https://docs.thundercore.com/thunder-whitepaper.pdf)。

## ThunderCore 未来会开源吗？ 
是的，我们正在释出 ThunderCore 完整节点源代码的过程中，并希望能够在公开主网之前发布。

## 我如何在 ThunderCore 编写智能合约？ 
因为 ThunderCore 与以太坊智能合约兼容，你可以用在以太坊编写的方式在 ThunderCore 上编写， 大多人使用 Truffle，但其他的工具也可使用。請查看我们的教程以 [快速部署你的游戏](deploy-your-own-game.md)。

## 我如何在 ThunderCore 上部署智能合约？ 
与你在以太坊上部署的方式完全一样，大多人使用 Truffle，但其他的工具也可使用。請查看我们的教程以了解 [快速部署你的游戏](deploy-your-own-game.md) 与 [自以太坊迁移 DApps ](migrate-to-thunder.md) 到 ThunderCore。

## 如果我已经在以太坊部署了 DApp 或智能合约怎么办？
由于 ThunderCore 与以太坊兼容，在以太坊迁移 DApp 或智能合约至 ThunderCore 是十分简单的。查看我们的教程以了解 [自以太坊迁移 DApps](migrate-to-thunder.md)。

## 使用 ThunderCore 的成本是多少？ 
在 ThunderCore 主网中，Thunder Tokens (TT) 用于支付矿工费。ThunderCore 并不依赖昂贵的工作量证明 (PoW) 算法，因此能够以较低的成本产生区块。

在 [这里](get-tokens.md) 取得你的 Thunder Tokens (TT) 与测试用 Thunder Tokens。

## 我可以开采或押注 Thunder Tokens (TT) 吗？
ThunderCore 采用持有量证明机制，因此，Thunder Tokens (TT) 是预先被开采的，而不会有新的代币可供开采，因为我们不会将新代币作为我们产生共识过程中的一部分。 ThunderCore 的节点验证者，即所谓的节点委员会成员，将透过矿工/交易的费用而获得奖励。人们可以参与 ThunderCore 的共识机制，并在公开发布时参与保护 ThunderCore 公链。 

你可以在 [这里](https://medium.com/thundercore/thundercore-launches-staking-pool-service-25316085b808) 了解更多关于我们的权益池服务！并到 [这里](https://staking.thundercore.com/) 押注你的 Thunder Tokens (TT) 获得高达 30% 的年化收益。

## ThunderCore 似乎非常快速，这是因为它没有去中心化或还没有 DApps 吗？一旦有了真正的 DApp 和用户，它会变慢吗？
在我们的测试之下，ThunderCore 可以支持高达每秒1000笔的交易，且在最坏情况下，其确认时间仍保持在2-3秒。为了充分利用 ThunderCore 的吞吐量，它将需要当前100倍的以太坊交易负载量。当达成这种目标时，其增加的交易数将不会对确认时间造成影响。

## 仍有其他问题吗？ 
请在 [Discord channel](https://discord.gg/5EbxXfw) 与我们的团队保持联系。针对紧急问题，请联系 [support@thundercore.com](mailto:support@thundercore.com)


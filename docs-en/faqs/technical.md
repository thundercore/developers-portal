---
id: technical
title: General
---

## Is ThunderCore compatible with Ethereum?
ThunderCore and Ethereum use the same virtual machine (EVM). As such, smart contracts that run on Ethereum can run on ThunderCore as well, which means ThunderCore supports languages that Ethereum supports, including Solidity, Vyper, etc.

Furthermore, ThunderCore exposes Ethereum's [JSON RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC), which makes it compatible with tools that use the JSON RPC, such as web3.js, MetaMask, Truffle, etc.

In general, any DApp that runs on Ethereum can be made to run on ThunderCore with very few or no modifications. Visit the [tutorial](migrate-to-thunder.md) on how to migrate from Ethereum to ThunderCore.

## Is ThunderCore decentralized?
Yes, ThunderCore is based on decentralized trust. Users have to trust neither the consensus nodes, nor the accelerator. Users only need to trust the honest majority for ThunderCore to be secure (which is the same for standard blockchains). To understand the consensus algorithm, see the [Whitepaper](https://docs.thundercore.com/thunder-whitepaper.pdf).

## Will ThunderCore be open source? 
Yes. We are in the process of releasing the source code of ThunderCore full node before the public launch of the Mainnet.

## How do I write smart contracts for ThunderCore? 
Since ThunderCore is compatible with Ethereum smart contracts, you can write smart contracts the same way you would for Ethereum. Most people use Truffle, but other tools should work as well. Check out our tutorial to [deploy your own game](deploy-your-own-game.md).

## How do I deploy smart contracts for ThunderCore? 
The same way you deploy to Ethereum. Most people use Truffle, but other tools should work as well. See our tutorials on [building](deploy-your-own-game.md) and [migrating Ethereum DApps](migrate-to-thunder.md) to ThunderCore.

## What if I already developed a DApp or smart contracts on Ethereum? 
Since ThunderCore is compatible with Ethereum, it’s easy to migrate DApps and smart contracts to ThunderCore in just a few steps. Check out our [migrate Ethereum DApps to ThunderCore tutorial](migrate-to-thunder.md).

## How much does it cost to use ThunderCore? 
On the ThunderCore Mainnet, Thunder Tokens (TT) are used to pay gas fees. ThunderCore doesn't rely on an expensive proof-of-work (PoW) algorithm and is therefore able to produce blocks at a lower cost.

Get free Thunder Tokens (TT) and Thunder Test Tokens [here](get-tokens.md)

## Can I mine or stake Thunder Tokens (TT)?
ThunderCore utilizes Proof of Stake. As such, Thunder Tokens are premined. No new tokens can be mined as we do not mint new tokens as part of our consensus process. ThunderCore validators, called committee node members, earn rewards through gas/txn fees. People can take part in the ThunderCore consensus mechanism and participate in securing the ThunderCore blockchain upon its public launch. 

Read more about our Staking Pool Service [here](https://medium.com/thundercore/thundercore-launches-staking-pool-service-25316085b808)! Go [here](https://staking.thundercore.com/) now to stake your Thunder Tokens (TT) and earn up to 30% APY.

## ThunderCore seems really fast. Is that because it's not decentralized or have dApps yet? Will it slow down once there are actual dApps and users?
ThunderCore, in our tests, can support north of 1000 tx/s and has worse-case confirmation time of 2-3 seconds. It would take 100x the current txn load of Ethereum for ThunderCore’s throughput to be fully utilized. And when that happens, the increased transaction count will not affect the confirmation times.

## Is your question still not answered? 
Please get in touch with our team at the [Discord channel](https://discord.gg/5EbxXfw). For urgent support, please contact: [support@thundercore.com](mailto:support@thundercore.com).

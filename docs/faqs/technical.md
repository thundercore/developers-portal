---
id: technical
title: Technical
---

## Is ThunderCore compatible with Ethereum?
ThunderCore and Ethereum use the same virtual machine (EVM). As such, smart contracts that run on Ethereum can run on ThunderCore as well, which means ThunderCore supports languages that Ethereum supports, including Solidity, Vyper, etc.

Furthermore, ThunderCore exposes Ethereum's [JSON RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC), which makes it compatible with tools that use the JSON RPC, such as web3.js, MetaMask, Truffle, etc.

In general, any DApp that runs on Ethereum can be made to run on ThunderCore with very few or no modifications. Visit the [tutorial](migrate-to-thunder.md) on how to migrate from Ethereum to ThunderCore.

## Is ThunderCore decentralized?
Yes, ThunderCore is based on decentralized trust. Users don’t have to trust the consensus nodes nor the accelerator. Users only need to trust the honest majority for ThunderCore to be secure (which is the same for standard blockchains). To understand the consensus algorithm, see [Whitepaper](https://docs.thundercore.com/thunder-whitepaper.pdf).

## Will ThunderCore be open source? 
Yes. We are in process of releasing source code of ThunderCore full node before the public launch of the Mainnet.

## How do I write smart contracts for ThunderCore? 
Since ThunderCore is compatible with Ethereum smart contracts, you can write smart contracts the same way you would for Ethereum. Most people use Truffle, but other tools should work as well. Check out our tutorial on [building DApps on ThunderCore](deploy-your-own-game.md).

## How do I deploy smart contracts for ThunderCore? 
The same way you deploy to Ethereum. Most people use Truffle, but other tools should work as well. See our tutorials on [building](deploy-your-own-game.md) and [migrating Ethereum DApps](migrate-to-thunder.md) to ThunderCore.

## Is there a way to set up a local blockchain similar to the Ganache client? 
Addressed in this [blog](https://medium.com/thundercore/introducing-thundercore-local-chain-af72cae9412f).

## What if I already developed a DApp or smart contracts on Ethereum? 
Since ThunderCore is compatible with Ethereum, it’s easy to migrate DApps and smart contracts to ThunderCore in just a few steps. Check out our [migrate Ethereum DApps to ThunderCore tutorial](migrate-to-thunder.md).

## How much does it cost to use ThunderCore? 
On the ThunderCore Mainnet, Thunder Tokens (TTs) are used to pay gas fees. These gas fees are significantly lower than the fees on Ethereum. Importantly, ThunderCore doesn’t rely on the expensive proof-of-work (PoW) algorithm and is therefore able to produce blocks at a lower cost.

Thunder Test Tokens (TST) are available for free at our testnet faucet here.

## Can I mine or stake Thunder Tokens (TT)?
ThunderCore utilizes Proof of Stake. As such, Thunder Tokens are premined. No new tokens can be mined as we do not mint new tokens as part of our consensus process. ThunderCore validators, called committee node members, earn rewards through gas/txn fees. People can take part in ThunderCore consensus mechanism and participate in securing the ThunderCore blockchain upon its public launch. 

We're working on allowing participation in the network through staking your Thunder Tokens (TT) and we'll let the community know closer to our public launch.

## ThunderCore seems really fast. Is that because it's not decentralized or have dApps yet? Will it slow down once there are actual dApps and users?
ThunderCore is screaming fast. Hands down.

ThunderCore, in our tests, can support north of 1000 tx/s and has max confirmation time of 2-3 seconds. We will need 100x current txn load of Ethereum for the throughput to be fully utilized. Also confirmation times will not change if we get more transactions. 

So, the answer is no. ThunderCore will not slow down once it has more transactions.

## Is your question still not answered? 
Please get in touch with our team at the [Discord channel](https://discord.gg/5EbxXfw). For urgent support, please contact: [support@thundercore.com](mailto:support@thundercore.com).


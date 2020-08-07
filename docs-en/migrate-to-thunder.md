---
id: migrate-to-thunder
title: Migrate from Ethereum
---

## Overview

Because ThunderCore is a fork of geth, our blockchain natively supports EVM-compatible smart contracts. This document describes the steps required to port your existing Ethereum DApp to ThunderCore. If you haven't created a DApp before, checkout [deploy your own game](deploy-your-own-game.md) tutorial.

## Connecting to our network

To connect to our network, see the RPC endpoints below. You can perform any RPC operation available in Ethereum on these URLs.

Network|RPC endpoint                       |Network ID
-------|-----------------------------------|----------
Mainnet|https://mainnet-rpc.thundercore.com|108
Testnet|https://testnet-rpc.thundercore.com|18

If you're using MetaMask, specify one of these URLs as a new, custom RPC.

If you're using **Truffle**, add the following section to your `truffle.js` file:

```
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    thunder-mainnet: {
      provider: function() {
    	return new HDWalletProvider(mnemonic, "https://mainnet-rpc.thundercore.com");
      },
      network_id: '108',
    },
    thunder-testnet: {
      provider: function() {
    	return new HDWalletProvider(mnemonic, "https://testnet-rpc.thundercore.com");
      },
      network_id: '18',
    }
  },
  compilers: {
      solc: {
        version: "0.5.9",
        settings: {
          // see the solidity docs for advice about optimization and evmversion
          optimizer: {
            enabled: true,
            runs: 200
          },
          evmVersion: "byzantium" // Current EVM on ThunderCore is fixed to "byzantium"
        }
      }
    }
}
```

## Solidity compiler

We're currently in the process of integrating the latest EVM changes (St. Petersberg) into our codebase, but until we'll have to lock the `evmVersion` of solc to `byzantium`. The relevant truffle config is shown above.

## Yup, that's it

No need to rewrite your smart contracts or change any of your infrastructure code, you should be good to go! If you are facing any problems, post it in our [Discord](https://discordapp.com/invite/5EbxXfw) for direct access to, and immediate help from, some of our developers.

---
id: migrate-to-thunder
title: Migrate from Ethereum to ThunderCore
---

## Overview

 Because ThunderCore is a fork of geth, our blockchain natively supports EVM compatible smart contracts. This document describes the steps required to port your existing Ethereum DApp to ThunderCore. If you haven't created a DApp before, checkout #some-link.

## Connecting to our network

Our core engineering team is hard at work open sourcing our full nodes, but until that's complete, the only way to connect to our network is through our RPC endpoints below. You can perform any RPC available in Ethereum on these URLs.

Network|RPC endpoint                       |Network ID
-------|-----------------------------------|----------
Mainnet|https://mainnet-rpc.thundercore.com|108
Testnet|https://testnet-rpc.thundercore.com|18

So if you're using **MetaMask**, add a new network with these URLs.

If you're using **Truffle**, add the following section to your `truffle.js` file.

```
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
```

## Solidity version

We're currently in the process of integrating the latest solidity version into our codebase, but until then we only support contracts written for compiler version 0.4.25 and below.
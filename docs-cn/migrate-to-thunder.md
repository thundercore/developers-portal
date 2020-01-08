---
id: migrate-to-thunder
title: 从以太坊中迁移
---

## 概观

因为 ThunderCore 是 geth 的一个分叉，我们的区块链原生地支援与以太坊虚拟机兼容的智能合约。 这份文件叙述了现存的以太坊 Dapp 移植到 ThunderCore 所需要的步骤。如果你先前尚未创建过 Dapp，请查看 [快速部署你的游戏](deploy-your-own-game.md) 这份教程。

## 连结至我们的网络

要连接至我们的网络，请确认下列的 RPC 端点。 你可以在这些 URL 上执行以太坊中可用的任何 RPC 维运点。

网络|RPC 端点                       |网络 ID
-------|-----------------------------------|----------
主网|https://mainnet-rpc.thundercore.com|108
测试网|https://testnet-rpc.thundercore.com|18

如果你使用 MetaMask，请将其中一个 URL 指定为新的自定义 RPC。

如果你使用 **Truffle** ，将下列段落加入你的 `truffle.js` 档案：

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

## Solidity 编译器

我们目前正在将最新的 EVM 更新项目 (St. Petersberg) 整合至我们的代码库中，但直至我们将 `evmVersion` 的 solc 锁定为 `byzantium` ，相关的 truffle 配置如上所示。

## 没错，就这么简单

不需要重写你的智能合约或改变你的基础设施代码，你可以立马开始了！若你有任何问题，请在我们的 [Discord](https://discordapp.com/invite/5EbxXfw) 上发问以便直接获得我们开发人员立即的协助。

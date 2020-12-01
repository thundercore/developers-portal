---
id: dev-faq-general
title: 基本资讯
---

## 基本资讯

* TT鏈對外兼容 Ethereum 通常使用一樣的代碼即可支援
* [JSON-RPC](https://eth.wiki/json-rpc/API) [(PUB-SUB)](https://github.com/ethereum/go-ethereum/wiki/RPC-PUB-SUB) 端口
  * [https://mainnet-rpc.thundercore.com](https://mainnet-rpc.thundercore.com)
  * wss://mainnet-ws.thundercore.com
* Thunder Token 是 TT 鏈上的原生加密貨幣，簡稱 **TT**
  * 單位: 1 TT  = 10¹⁸ Ella
  * (就像 1 ETH = 10¹⁸ Wei)

## 我如何获得 ThunderCore 地址？
ThunderCore 与以太坊/以太坊虚拟机兼容，任何在以太坊上创建的地址将可在 ThunderCore 上运作。任何人可用 MetaMask 或其他任何受欢迎的以太坊钱包去创建 ThunderCore 地址。要访问 ThunderCore，所有人必须做的就是将网络 RPC 选择 [https://mainnet-rpc.thundercore.com](https://mainnet-rpc.thundercore.com) 而不是以太坊网络。有关详细说明，请查看我们关于获取自己 [钱包](get-wallet.md) 的教程。

## 如何访问 ThunderCore？
ThunderCore 是一个公链，你可以透过 [此处](migrate-to-thunder.md) 轻松地访问预发主网。

## ThunderCore 可用于 DApp 开发吗？
是的，我们鼓励 DApps 开发人员在充分利用 EVM 兼容性的同时体验 ThunderCore 的优越性能。你的 DApps 可以在短短五分钟内迁移到 ThunderCore。

Thunder Tokens 适用于希望尝试使用 ThunderCore 主网的个人和团队。ThunderCore 测试网自2019年2月开始运行并可用于 DApp 开发，你可以从 ThunderCore [主网渠道](https://faucet.thundercore.com) 中获得免费的 ThunderTokens。请持续留意我们对于将 DApps 移植到 ThunderCore 的激励措施。

现在，你必须将大多数钱包设置为指向 ThunderCore 的自定义 RPC (https://mainnet-rpc.thundercore.com) 。

## Thunder Token 是 ERC-20 代币吗？
不是，Thunder Token 是 ThunderCore 区块链的原生代币。

ThunderCore 是符合以太坊虚拟机 (EVM) 的区块链，凡可以在 ERC-20 上创建和部署的代币也适用于 ThunderCore。

## 我可以用 Thunder Tokens 做什么？
Thunder Token 是 ThunderCore 区块链的原生代币，其可用于 ThunderCore 区块链上建立去中心化应用程序，并可从其中获利，也可用于支付矿工费、执行交易并可在 ThunderCore 区块链上承销智能合约。

## 为何 MetaMask 将我的代币以 ETH 显示并将大量美元金额作为其估值？
在 MetaMask 中添加自定义 RPC URL 时，MetaMask 默认将任何代币/硬币视为 ETH，并使用 ETH 的 USD 价格显示其估值。

欲更正此问题，请在 ThunderCore 的自定义 URL 时使用 “显示高级选项” 菜单 ([https://mainnet-rpc.thundercore.com](https://mainnet-rpc.thundercore.com)) 添加 108 (0x6c) 作为 Chain ID 和 TT 作为标示符号。

一旦你这么做了，你的 ThunderTokens 将在 MetaMask 上显示为 TT。

## 如何跑自己的節點
* 建議直接用 mainnet-rpc.thundercore.com RPC 端口
* 若一定想跑自己節點，請透過傳這份文件給你的聯絡窗口洽談


## 生成地址
* TT 鏈地址格式與 Ethereum 相同 e.g. **0x519A3B21130Eb8496F7a8E4782fa3106aE4cFF27**
* 多幣錢包 (HD Wallet) 從「記憶助詞」到 private key 的推導路徑 (BIP32 Derivation Path): m/44'/1001'/0'/0

代碼:

|Golang (go-ethereum) |Javascript (web3.js)
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|[crtypo.GenerateKey()](https://github.com/ethereum/go-ethereum/blob/v1.9.12/crypto/crypto.go#L193)| [web3.eth.accounts.create()](https://github.com/thundercore/field-support/blob/private-key-to-address/src/key.js#L9)
|                                                                                                  |[test](https://github.com/thundercore/field-support/blob/private-key-to-address/test/testPrivateKeyToAddress.js#L12)

**注意:** 安全考量，建議不要使用 geth 的 **personal RPC** 模組建立地址，而是用上面代碼中的方式，如此建立出的 private key 不會存在節點內，減少攻擊面積。


## 手续费 gas 怎么设置
TT 鏈上 transaction 的手續費，分成 gas price 與 gas limit 與 Ethereum 相同。
* gas price
  * 可用 [eth_gasPrice RPC](https://eth.wiki/json-rpc/API) 呼叫查詢最近均價
  * 若須使用固定數字，可用 10 GWei (10,000,000,000 Wei) 
* gas limit
  * 可用 [eth_estimateGas](https://eth.wiki/json-rpc/API) RPC 查詢
  * 轉入地址若確定不是智能合約，可用 21 KWei (21,000 Wei)

## 交易所支持 TT 注意事項

### 冲币
* 交易所替每個使用者生成獨特地址
* 提供「複製地址」、「顯示二維碼」等功能，讓使用者用轉帳

### 冲币注意事項
* 建議支持<ins>用**智能合約**充幣</ins>
* 某些使用者用智能合約實作的 multi-sig 錢包，不支援智能合約充幣，人工處理成本較高

### 汇集、提币
* 從交易所角度，匯集、提幣操作都是從交易所控制 private key 的地址轉帳

|链   |项目                    | 參考
|-----|-----------------------|--------------------------------------------------------
|TT  |提交一般交易              |見 **[submitTx()](https://github.com/thundercore/field-support/blob/transfer/src/transfer.js#L29)** 範例 [(test)](https://github.com/thundercore/field-support/blob/transfer/test/testTransfer.js#L11)     |
|TT20|呼叫 TT20 合約的 transfer |見 **[transferToken()](https://github.com/thundercore/field-support/blob/transfer/src/transfer.js#L54)** 範例 [(test)](https://github.com/thundercore/field-support/blob/transfer/test/testTransfer.js#L13)|

### TT20 Token
* TT 鏈上與相容於 Ethereum ERC20 標準的 token 稱為 **TT20**
* 與 Tether USDT 一比一對應的美金穩定幣是 **TT20-USDT**
* **TT20-USDT** 在 TT 鏈上的地址是 **0x4f3c8e20942461e2c3bdd8311ac57b0c222f2b82**

### TT20 USDT
项目             | 參考
-----------------|----------------------------------------------------------------------------
| 合約地址  | **[0x4f3C8E20942461e2c3Bdd8311AC57B0c222f2b82](https://viewblock.io/thundercore/address/0x4f3c8e20942461e2c3bdd8311ac57b0c222f2b82?tab=code)**
| 名稱     | **TT-USDT**
| 小數位數  | **6**
| 代碼      | [Token 名稱、小數位數等可從合約讀出來](https://github.com/thundercore/field-support/blob/tt20-usdt/src/tt20-usdt.js)
         
### 參考資料
* StackOverflow: [[thundercore] tag](https://stackoverflow.com/questions/tagged/thundercore)

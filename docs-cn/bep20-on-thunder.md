---
id: bep20-on-thunder
title: BEP-20 资产
---

## 概览
ThunderCore 目前支持 BEP-20 和 TT-20 跨链资产。目前支持的代币包含： BNB、BUSD 和 BEP20-TT。

請注意： BEP20-TT 是在币安智能链上的 TT，TT 可以從 [ThunderCore Bridge](https://bridge.thundercore.com/bsc/) 在 BEP-20 与 TT20 之间转换。
 

## 常见问题 (FAQ’s)

### **为什么 TT 可跨链到币安智能链 (BEP-20)？**

TT 被桥接到币安智能链 (BEP-20) 上，以促进跨链适用性。随着越来越多的区块链和原生代币蓬勃发展，我们相信为用户提供跨链平台桥接服务，将为其资产提供更好的生态系，使人们能够更多加地访问产品和服务，我们的目标一直是将区块链带给普罗大众。


### **如果 TT 被跨链到币安智能链(BSC)上，那流通量会改变吗？**

TT 的流通量一直且将保持在 10,000,000,000 个 TT 。代币桥只是在两个区块链之间架起一座桥梁，以允许受支持的代币在两者之间进行转移。BEP20-TT 是通过在 ThunderCore 智能合约中锁定等量的 TT（ThunderCore 上的本地 Thunder Token）而创建的：
(https://viewblock.io/thundercore/address/0x2521d6b1f5350d5198e2a7a30fd6a23ee603b7aa)

因此，锁定在 ThunderCore 智能合约中的 TT 不再流通。同时，通过 BSC上的智能合约将等量的BEP-20 TT 铸造并添加到流通中。(https://bscscan.com/token/0x990e7154bb999faa9b2fa5ed29e822703311ea85)

当用户想要将其在 BSC 上的 TT 代币转回时，他们的 BEP-20 TT 會被币安智能链上的合约烧毁，同时，等额的 TT 将被 ThunderCore 上的智能合约释放，从而恢复了初始余额。

两个智能合约的余额始终保持相等，以确保 TT 的总供应量保持恒定在 100 亿颗。


### **我要怎么把我的 BEP-20 资产跨链转帐到 TT-20 链上？**

代币桥目前支持币安智能链 (BEP-20) 的代币包含： BNB、BUSD 和 BEP20-TT。您如果想要把您的 BEP-20 资产跨链转帐到 TT-20 上，请参考 [代币桥](https://bridge.thundercore.com/bsc/) 的 [教学文章](https://docs.thundercore.com/docs/TransferringCrossChainAssets-BSC.pdf)


### **BEP-20 TT 的代币合约地址是什么?**

BEP-20 TT的代币合约地址是 **`0x990e7154bb999faa9b2fa5ed29e822703311ea85`**


### 我要怎么拿到 BEP20-TT?

请到 [代币桥](https://bridge.thundercore.com/bsc/) 连接到您的钱包到页面，再把你的 TT 交换成 BEP20-TT.

请参阅[教学文章](https://docs.thundercore.com/docs/TransferringCrossChainAssets-BSC.pdf)

BEP-20 TT 可以在 PancakeSwap [兑换](https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x990e7154bb999faa9b2fa5ed29e822703311ea85&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56) 和 [加流动性](https://exchange.pancakeswap.finance/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x990e7154bb999faa9b2fa5ed29e822703311ea85).


### **我可以直接将我的 BNB、BUSD、BEP20-TT 存入我的 TT 站钱包地址吗？**

您可以将 BNB 和 BUSD 直接入金到您的 TT 站钱包。但是 TT 站钱包尚不支持 BEP20-TT 的入金。因此，请勿将 BEP20-TT 直接存入您的 TT 站钱包。

#### 入金資料：
```
BNB:

您可以直接入金 BNB (BEP-20) 到您的 TT 站钱包。当您入金的 BNB 金额超过所需的最小存入數量时，您的 BNB (BEP-20) 会自动转换为 TT-BNB (TT-20) 并存入您的TT 站钱包中。

最小存入數量: 0.01 BNB


BUSD:

您可以直接入金 BUSD (BEP-20) 到您的 TT 站钱包。当您入金的 BUSD 金额超过所需的最小存入數量时，您的 BUSD (BEP-20) 会自动转换为 TT-BUSD (TT-20) 并存入您的 TT 站钱包中。

最小存入數量: 0 BUSD


BEP20-TT:

当前，TT 站钱包不支持 BEP20-TT。因此，请勿将 BEP20-TT 直接存入 TT 站钱包。

如果您想要把您的 BEP20-TT 桥接回到您的 TT 站钱包，请通过 MetaMask 访问代币桥，以将您的资产转移到 ThunderCore Mainnet。请参考下面的参考。

最小存入數量: 500 BEP20-TT
```
請參考: [代币桥](https://bridge.thundercore.com/bsc/) 的 [教学文章](https://docs.thundercore.com/docs/TransferringCrossChainAssets-BSC.pdf)


### **我可以从我的 TT 站钱包直接出金 BNB / BUSD 到我在币安交易所的钱包地址吗？**

由于币安交易所不支持智能合约的转帐，因此我们建议您，不要直接将资产从您的 TT 站钱包中出金到币安交易所的钱包。如果您想出金到币安交易所的钱包，请先通过[ThunderCore Bridge]（https://bridge.thundercore.com/bsc/）将您的资产提取到去中心化的钱包例如 MetaMask 或 Trust Wallet，再出金到您的币安钱包。

如果您已經直接出金到币安交易所的钱包，请您聯絡 [币安支持团队](https://www.binance.com/zh-CN/chat) 提供交易详细信息。


### TT-20 到 BEP-20 的最低出金數量 和 手续费是多少？
```
BNB:

最低出金數量: 0.02 BNB
跨连手续费: 0.002 BNB
每日限额: 2000 BNB


BUSD:

最低出金數量: 5 BUSD
跨连手续费: 0.5 BUSD
每日限额: 500000 BUSD


BEP20-TT:

最低出金數量: 500 TT
跨连手续费: 50 TT
每日限额: 50000000 TT
```

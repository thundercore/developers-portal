---
id: bep20-on-thunder
title: BEP-20 Assets on ThunderCore
---

## Overview
ThunderCore supports BEP-20 assets on the ThunderCore blockchain, supported assets include: BNB, BUSD and BEP20-TT.

Please note that BEP20-TT is Thunder Token bridged onto the Binance Smart Chain. Thunder Tokens (TT) can be bridged on to and from the Binance Smart Chain through the [ThunderCore Bridge](https://bridge.thundercore.com/bsc/).
 

## Frequently Asked Questions (FAQ's)

### Why have Thunder Tokens (TT) been bridged on the Binance Smart Chain (BSC) blockchain?**

Thunder Tokens were bridged onto the BSC blockchain in order to promote cross-chain applicability. With a growing number of blockchains and native tokens, we believe that providing users with the ability to bridge their assets across blockchain platforms provides a better ecosystem with more access to products and services. Our goal has always been to bring blockchain to the masses.


### **What happens to the supply of Thunder Tokens (TT) after bridged on to the Binance Smart Chain (BSC)?**

The supply of Thunder Tokens (TT) has always been and will remain at 10,000,000,000 tokens. The ThunderCore Bridge simply bridges the gap between the two blockchains to allow supported tokens to be transferred between the two. BEP20-TT is created by locking an equal amount of TT (native Thunder Tokens on ThunderCore) in a ThunderCore smart contract (https://viewblock.io/thundercore/address/0x2521d6b1f5350d5198e2a7a30fd6a23ee603b7aa)

The Thunder Tokens locked in the ThunderCore smart contract are hence taken out of circulation. Meanwhile, an equal amount of BEP-20 TT is minted and added into the circulation by the smart contract on BSC (https://bscscan.com/token/0x990e7154bb999faa9b2fa5ed29e822703311ea85)

When a user wants to transfer their Thunder Tokens on Binance Smart Chain back to ThunderCore, their BEP-20 TT gets burned by the Binance Smart Chain contract, and an equal amount of TT is released by the ThunderCore smart contract, hence restoring the original balance.

The balance of the two smart contracts should remain equal at all times, guaranteeing that the total supply of TT remains a constant of 10B.


### **How do I bridge my BSC assets onto the ThunderCore blockchain?**

The ThunderCore blockchain supports BSC assets including BNB, BUSD, BEP20-TT. To bridge your assets from BSC onto the ThunderCore blockchain, please refer to the [tutorial](https://docs.thundercore.com/docs/TransferringCrossChainAssets-BSC.pdf) of the [ThunderCore Bridge](https://bridge.thundercore.com/bsc/).


### What is the token contract address for BEP20-TT?
The token contract address for BEP20-TT is **`0x990e7154bb999faa9b2fa5ed29e822703311ea85`**


### **Could I deposit my BNB, BUSD, BEP20-TT directly into my ThunderCore Hub wallet?**

You may deposit BNB and BUSD directly to your ThunderCore Hub wallet. However, BEP20-TT is not supported on the ThunderCore Hub wallet. Thus, please **do not** deposit _BEP20-TT_ directly into your ThunderCore Hub wallet.

#### Deposit Information:
```
**BNB:**

You may deposit BNB directly from the Binance Smart Chain to your ThunderCore Hub wallet. When you deposit an amount of BNB that is above the minimum amount required, your BNB will automatically convert into TT-BNB and be deposited into your ThunderCore wallet.

**_Minimum Deposit:_** 0.01 BNB


**BUSD:**

You may deposit BUSD directly from the Binance Smart Chain to your ThunderCore Hub wallet. When you deposit an amount of BNB that is above the minimum amount required, your BNB will automatically convert into TT-BNB and be deposited into your ThunderCore wallet.

**_Minimum Deposit:_** 0 BUSD


**BEP20-TT:**

Currently, the ThunderCore Hub wallet does not support BEP20-TT. Thus, please do not deposit BEP20-TT directly into the ThunderCore Hub wallet. 
If you would like to bridge your BEP20-TT back to your ThunderCore Hub wallet, please visit the ThunderCore Bridge through MetaMask to transfer your assets to the ThunderCore Mainnet. You may refer to the [tutorial](https://docs.thundercore.com/docs/TransferringCrossChainAssets-BSC.pdf) of [ThunderCore Bridge](https://bridge.thundercore.com/bsc/).
```

### Can I withdraw my BNB / BUSD directly to my Binance Exchange wallet?

As Binance does not support internal transactions, thus we do not recommend to withdraw directly from your ThunderCore Hub wallet to your Binance wallet. 

If you have withdrawn directly to your Binance wallet and the assets do not show up, please provide transaction details to binance's support team [here](https://www.binance.com/en/chat).



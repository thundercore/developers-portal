---
id: dev-faq-general
title: General Information
---

## Basic Information

* The ThunderCore's external protocol is compatible with Ethereum 

Your existing code supporting Ethereum has a good chance to work as-is

Item             | References
-----------------|----------------------------------------------------------------------------
|Official Website |[https://www.thundercore.com](https://www.thundercore.com)
| Block Explorer  |[https://scan.thundercore.com/](https://www.thundercore.com)
| JSON-RPC        | [https://mainnet-rpc.thundercore.com](https://mainnet-rpc.thundercore.com)
|                 | wss://mainnet-ws.thundercore.com
|Chain ID         |thunder-mainnet: 108 (0x6c)
         

## How do I get a ThunderCore address?
ThunderCore is Ethereum/EVM compatible. Any address created for Ethereum will work on ThunderCore. One can use MetaMask and any other popular Ethereum wallet to create ThunderCore address. To access the ThunderCore blockchain all one has to do is to point network RPC to [https://mainnet-rpc.thundercore.com](https://mainnet-rpc.thundercore.com) instead of the ethereum network. For detailed instructions, please check out our tutorial on getting your own [wallet](get-wallet.md)

## How can I get access to ThunderCore?
ThunderCore is a public chain. The Pre-Release Mainnet is easily accessible via the published network addresses found [here](migrate-to-thunder.md).

## Is ThunderCore available for DApp development?
Yes. We encourage DApp developers to experience a boost in performance while leveraging full EVM compatibility. DApps can be migrated to ThunderCore in as little as five minutes.

Thunder Tokens are available to individuals and teams desiring to try the ThunderCore Mainnet. The ThunderCore Testnet has been running and available since February 2019 for DApp development.  You can get started by obtaining free ThunderTokens from the [ThunderCore Mainnet Faucet](https://faucet.thundercore.com). Please also stay on the lookout for incentives to port your DApps to ThunderCore.

Right now you will have to configure most of the wallets to point to the custom RPC url of ThunderCore (https://mainnet-rpc.thundercore.com).

## Is Thunder Token an ERC-20 token?
No. Thunder Token is the native currency of an independent public blockchain, ThunderCore.

ThunderCore is an Ethereum Virtual Machine (EVM) compliant blockchain. Tokens based on the ERC-20 standard can be minted and deployed on ThunderCore.

## What can I do with Thunder Tokens?
Thunder Token is the native currency of an independent public blockchain, ThunderCore. Thunder Token can be used to build and monetize decentralized applications on the ThunderCore blockchain. Thunder Tokens can be used to pay for gas costs, execute transactions and underwrite smart contracts on the ThunderCore blockchain.

## Why is MetaMask showing my tokens as ETH and a large USD amount as its value?
When adding a custom RPC URL in MetaMask, MetaMask by default treats any token/coin as ETH and shows the portfolio value using the USD price of ETH.

To correct this, use the "Show Advanced Options" menu when adding the custom URL for Thunder Core ([https://mainnet-rpc.thundercore.com](https://mainnet-rpc.thundercore.com)). Add 108 (0x6c) as Chain ID and TT as the Symbol.

Once you do that your Thunder Tokens will appear as TT on the MetaMask.

## Gas Fees

### Gas Price

* Use the [eth_gasPrice RPC](https://eth.wiki/json-rpc/API) call to get the moving average of recent price


### Gas Limit

* Use the [eth_estimateGas RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_estimategas) call to estimate the computation and storage cost required by the transaction.
If you know for sure the destination address is a regular account and not a smart contract, you can use specify a gas limit of 21 KWei (21,000 Wei)


## Address Generation

* ThunderCore addresses use the same format as Ethereum e.g. 0x519A3B21130Eb8496F7a8E4782fa3106aE4cFF27
* HD Wallet derivation path to obtain private keys from a 12-word mnemonic is (BIP32 Derivation Path): m/44'/1001'/0'/0

|Golang (go-ethereum) |Javascript (web3.js)
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|[crtypo.GenerateKey()](https://github.com/ethereum/go-ethereum/blob/v1.9.12/crypto/crypto.go#L193)| [web3.eth.accounts.create()](https://github.com/thundercore/field-support/blob/private-key-to-address/src/key.js#L9)
|                                                                                                  |[test](https://github.com/thundercore/field-support/blob/private-key-to-address/test/testPrivateKeyToAddress.js#L12)



## Sending Transactions


Protocol| Transfers                   | References
----|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------
TT  | Native Cryptocurrency Transfers | See [submitTx()](https://github.com/thundercore/field-support/blob/transfer/src/transfer.js#L29) example [(test)](https://github.com/thundercore/field-support/blob/transfer/test/testTransfer.js#L11)
TT20| TT20 Token Transfers            | See [transferToken()](https://github.com/thundercore/field-support/blob/transfer/src/transfer.js#L54) example [(test)](https://github.com/thundercore/field-support/blob/transfer/test/testTransfer.js#L13)




## Where to Ask Questions

* For short questions, ThunderCore [Discord](https://discordapp.com/invite/5EbxXfw)
* For longer questions, use the "thundercore" tag on [StackOverflow](https://stackoverflow.com/questions/tagged/thundercore)



## Resources

1. [ThunderCore Developer Portal](https://developers.thundercore.com/) 
    * [Get started tutorial](deploy-your-own-game.md)
    * [Migrate from Ethereum tutorial](migrate-to-thunder.md)
    * [Deploy Your Own ERC-20](erc20-smart-contract.md)
2. [Submit Your DApp](https://dapps.thundercore.com/submit)
3. [Get started with ThunderCore Hub](get-wallet.md)
4. [Thunder Token Mainnet Faucet](https://faucet.thundercore.com/)

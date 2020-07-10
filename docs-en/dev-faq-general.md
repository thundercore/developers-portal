---
id: dev-faq-general
title: General
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
|Chain ID         |thunder-mainnet: 108
         
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

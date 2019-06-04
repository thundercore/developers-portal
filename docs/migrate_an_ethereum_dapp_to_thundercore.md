---
id: migrate_an_ethereum_dapp_to_thundercore
title: Migrate an Ethereum DApp to ThunderCore
---

# Migrate an Ethereum DApp to ThunderCore
In this tutorial, we'll migrate an existing decentralized application (DApp) to ThunderCore. We assume that your project has been set up using the popular tool Truffle, though the workflow is easily adaptable to other tools. If you have trouble deploying an existing Ethereum DApp to ThunderCore, email us at [support@thundertoken.com](mailto:support@thundertoken.com).
​
Since ThunderCore is compatible with Ethereum, migrating an existing DApp to ThunderCore is as easy as installing a package and changing a couple of lines in your config.

## Installing dependencies
Run the following command in your project’s root directory (where the contracts directory is located):

```
npm install truffle-hdwallet-provider web3-provider-engine
```

## Update Truffle config
Open up `truffle.js` (or `truffle-config.js` if you are using Windows), and add the following code to the top of the file:

```
let HDWalletProvider = require('truffle-hdwallet-provider')
let mnemonic = "<the mnemonic for your private key>"
```
​
Note that the `mnemonic` variable needs to be set to a real mnemonic.

Now, in your module exports, include a `thunder` key within the networks object:


```
module.exports = {
    networks: {
        thunder: {
            provider: () => HDWalletProvider(mnemonic, “https://testnet-rpc.thundercore.com:8544“),
            network_id: “*”,
            gas: 3000000,
            gasPrice: 50000000000
        }
    }
}
```

Here's [a complete example](https://github.com/thundercore/dapp-tutorial/blob/master/truffle.js) of a valid `truffle.js` that works with ThunderCore.

## Deploy smart contracts on ThunderCore
To deploy your smart contracts on ThunderCore, simply run `truffle migrate --network thunder`:​

Note that smart contracts are only a part of the overall DApp. For instance, you still need to customize your frontend so that it uses the smart contracts deployed on ThunderCore (e.g., change the RPC url). We won’t detail the steps here since they are very much dependent on your specific project, but feel free to ask for help in our [Discord channel](https://discord.gg/5EbxXfw).
​
A few things to note:
​
If your DApp depends on the block number, it requires a simple change. Contact us for more info at [support@thundertoken.com](mailto:support@thundertoken.com).

If your DApp depends on ChainID, please email us at [support@thundertoken.com](mailto:support@thundertoken.com).

If your DApp depends on an external Ethereum contract, please confirm that those contracts have been migrated to ThunderCore first and then update with the Thunder contract address.

If the DApp specifies the Network ID, it needs to be updated to ThunderCore's Testnet Chain ID/ Network ID is 19. Refer to the explanation of Chain ID here
[https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md).

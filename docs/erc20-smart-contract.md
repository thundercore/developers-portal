---
id: erc20-smart-contract
title: Deploy Your Own ERC-20
---
[ERC20](https://theethereum.wiki/w/index.php/ERC20_Token_Standard) tokens are one of the most popular DApps in the blockchain community. This tutorial will guide you through deploying an ERC-20 Smart Contract on ThunderCore in 5 simple steps. It's super easy and fast!

The final repo is here https://github.com/LucienLee/thundercore-erc20.

## Requirements
This tutorial expects you to have some basic knowledge of Truffle, Ethereum, Metamask and Solidity. 

###  Install development tools
Please install the following:

- [Node.js v8+ LTS and npm](https://nodejs.org/) (comes with Node)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/) (optional)

Once we have those installed, we only need one command to install Truffle:

```bash
npm install -g truffle
# or 
yarn global add truffle
```
To verify that Truffle is installed properly, type `truffle version` on a terminal. 


### Install MetaMask
MetaMask is a browser extension that serves as a “wallet” that safely stores your cryptocurrencies such as Ether (ETH) and Thunder Tokens. It also serves as a “bridge” that connects the web application with the blockchain. You can download and learn more about Metamask at [https://metamask.io/](https://metamask.io/).

### Get Thunder Tokens or Thunder Test Token
You need to get Thunder Tokens (Mainnet) or Thunder Test Tokens (Testnet) to deploy your smart contracts on ThunderCore. Please follow this [instruction](get-tokens.md) to get your tokens.


# Steps
In this tutorial we will be covering:

- Unboxing the ThunderCore Boilerplate Box 
- Creating the "MyToken" smart contract
- Compiling and deploying the smart contract on ThunderCore
- Interacting with the new token

## 1. Unboxing the ThunderCore Boilerplate Box 
To make it easier to get started with ThunderCore, we’ve created a template, [Thunder Box](https://github.com/thundercore/thunder-box), for ThunderCore DApps that can be downloaded via Truffle.
​
On a terminal, create a new project directory and navigate to it:

```bash
truffle unbox thundercore/thunder-box
```

Next, we'll install OpenZeppelin. The most recent version of OpenZeppelin can be found as an npm package.

```bash
npm install openzeppelin-solidity 
# or 
yarn add openzeppelin-solidity 
```

## 2. Creating the "MyToken" smart contract
Let's build our token contracts first. We build our token by extending `StandardToken` contract. 

1. In the contracts/ directory of your Truffle Box, create the file `MyToken.sol` and add the following contents:

```solidity
pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

}
```

2. To set our own parameters for the token, we'll be declaring our own name, symbol, and other details. Add the following content block to the contract (between the curly braces):

```solidity
string public name = "MyToken";
string public symbol = "MT";
uint8 public decimals = 0;
uint public INITIAL_SUPPLY = 1000000;
```

Things to notice:

- The `name` and `symbol` variables give our token a unique identity.
- The `decimals` variable determines the degree to which this token can be subdivided. 
- The `INITIAL_SUPPLY` variable determines the number of tokens created when this contract is deployed. In this case, the number is arbitrary.

3. To finish up our contract, we'll create a constructor function to mint with the `totalSupply` equal to our declared `INITIAL_SUPPLY` and give the entire supply to the deploying account's address. Add this block below the content added in the previous step:

```solidity
constructor() public {
  _mint(msg.sender, INITIAL_SUPPLY);
}
```

Now, we have our own tokens!

## 3. Compiling and deploying the smart contract

1. In the migrations/ directory, create the file `2_deploy_contracts.js` and add the following content:

```js
var MyToken = artifacts.require("MyToken");

module.exports = function(deployer) {
  deployer.deploy(MyToken);
};
```

2. Launching a local chain to test our contract. By using a local blockchain, we can test our contract without consuming real tokens. We recommend using [Ganache](https://www.trufflesuite.com/ganache). Download the Ganache GUI or install the CLI tool with the following command.

```bash
npm install -g ganache-cli
# or 
yarn global add ganache-cli
```

Then, double click the icon to launch the application or run the command `ganache-cli` to launch a local chain.

3. With our blockchain launched, run the following command to compile and deploy the contract.

```
truffle compile
truffle migrate
```

You will see output that looks similar to this:

```bash
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 0x6691b7


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x90c43c39c9d345211f084b651f3f09146b5fe060003e1e4e4e8b17d0cfcbb712
   > Blocks: 0            Seconds: 0
   > contract address:    0x9FDD2E351c874368852e97A0E7e5Ad93f76070B3
   > block number:        1
   > block timestamp:     1561018014
   > account:             0xdFaDd603Ceb6a3250A0dDA3535ba5c33268d4118
   > balance:             99.99552962
   > gas used:            223519
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00447038 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00447038 ETH


2_deploy_contracts.js
=====================

   Deploying 'MyToken'
   -------------------
   > transaction hash:    0xbc7d07470a485de1b6da13f99823d2a4d0e1957f2e5ed572a2f153fda96de8be
   > Blocks: 0            Seconds: 0
   > contract address:    0x9188f53DAF897E8f2A63aB30fC711950B7D92A30
   > block number:        3
   > block timestamp:     1561018015
   > account:             0xdFaDd603Ceb6a3250A0dDA3535ba5c33268d4118
   > balance:             99.97891304
   > gas used:            788900
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.015778 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.015778 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.02024838 ETH
```

## 4. Deploy to the ThunderCore testnet and mainnet
Now, you can prepare to deploy your token to ThunderCore testnet or mainnet. Please make sure you have ThunderCore testnet Token(TST) or ThunderToken (TT).

1. First you set up the control of your account to truffle. You can set either by:
    - Write your 12-word mnemonic (seed phrase) to a file named .mnemonic
    - Export your account private keys, one per line, to a file named .private-keys

    ```bash
    # If you use private keys
    mv .private-keys.template .private-keys

    # in .private-keys file, put your private keys
    e59cb5e369b65eee650f90f3280cbe8039db81335943ac7a88df5f4df...
    d92a96fa691a7c31b2e2891de05cacc85d562b128afa6bb8f7108aac7...

    # If you prefer mnemonic
    mv .mnemonic.template .mnemonic

    # In .mnemonic file, put your mnemonic
    dog cat apple bird ...
    ```

2. Compile and migrate your contract for testnet and mainnet

    ```bash
    # Deploy to testnet
    truffle compile --network thunder-testnet
    truffle migrate --network thunder-testnet

    # Deploy to mainnet
    truffle compile --network thunder-mainnet
    truffle migrate --network thunder-mainnet
    ```

## 5. Interacting with the new token

Now, we are preparing to set up our frontend web page for user interacting with our tokens. In this tutorial, we focus on smart contract creation but not on frontend and web3 communitcating with contracts. Hence, we just give an example at https://github.com/LucienLee/thundercore-erc20/tree/master/client. If you're interested in the detail, you can look up the reference in the end.

1. Copy all files in [https://github.com/LucienLee/thundercore-erc20/tree/master/client](https://github.com/LucienLee/thundercore-erc20/tree/master/client) to your local client folder. We recommend you pull the whole project and copy and past client folder to yours.

2. Install frontend deps
```bash
cd client

npm install 
# or 
yarn install
```
3. Run up the frontend page with `npm start` or `yarn start`. The UI would be accessible at http://localhost:1234.

4. If you want to host on the internet, run `npm run build` or `yarn build`. Then, you will get the bundle UI at `client/dist` page and can host by any static server on the internet. 

### Note
- If you try on you local ganache, make sure you set the custom network to your localchain. For exmaple, set rpc url to `http://localhost:9545` and chain id `5777`
- If you rename the contract `class name`, make sure the import code at `client/src/app.js` line 7 is set to your artifacts.

```js
// If you change the name of contract, make sure you set the right reference here
import TutorialTokenArtifact from "../contracts/<your token contract name>.json";
```


![screenshot](/img/erc20-screenshot.png)


## Learning more about DApps
It’s beyond the scope of this tutorial to go over the code, but if you’d like to learn more about smart contract programming and building DApps in general, we recommend the official [Solidity](https://solidity.readthedocs.io/en/develop) documentation and [truffle tutorial](https://www.trufflesuite.com/tutorials).

For questions, please go to our [Discord](https://discord.gg/5EbxXfw) channel.

Happy Coding! 😆

### Reference
- [building robust smart contracts with openzeppelin](https://www.trufflesuite.com/tutorials/robust-smart-contracts-with-openzeppelin)
- [solidity](https://solidity.readthedocs.io/en/develop/)
- [web3](https://github.com/ethereum/web3.js/)

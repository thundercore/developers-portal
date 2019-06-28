---
id: develop-with-truffle
title: Develop with Truffle
---

## Overview

[Truffle](https://www.trufflesuite.com/) is one of the most popular development tools in the Ethereum community. ThunderCore is fast and EVM-compatible, so developers can use Ethereum development tools, including Solidity and Truffle, to develop dapps on ThunderCore. We prepared a Truffle box, [thunder-box](https://www.trufflesuite.com/boxes/thunder-box), for developers. This tutorial will help you use our thunder box to quickly set up your dev environment.

## Get Started

First, ensure you are in a new and empty directory and that you have `nodejs` in your environment.

1. Run the unbox command via npx and skip to step 3.

```bash
npx truffle unbox thundercore/thunder-box
```

2. Alternatively, you can install Truffle globally and run the unbox command.

```bash
npm install -g truffle
truffle unbox thundercore/thunder-box
```

3. Run the development console.

```bash
truffle develop
```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.

```bash
compile
migrate
```

5. Alternatively, you can run the following to compile and migrate the smart contracts.

```bash
npm run compile
npm run migrate
```

6. To clean up previously built contracts:

```bash
npm clean
```

## Develop on Thunder Testnet and Mainnet

1. Get thunder tokens. Please follow this [instruction](get-tokens.md) to get your tokens.
  
2. To set up the control of accounts for deployment do **one** of the following:

   1. Write your 12-word mnemonic (seed phrase) to a file named .mnemonic
   2. Export your account private keys, one per line, to a file named .private-keys


```bash
# If you use private keys
mv .private-keys.template .private-keys

# in .private-keys file, copy your private keys
e59cb5e369b65eee650f90f3280cbe8039db81335943ac7a88df5f4df...
d92a96fa691a7c31b2e2891de05cacc85d562b128afa6bb8f7108aac7...

# If you prefer mnemonic
mv .mnemonic.template .mnemonic

# In .mnemonic file, copy your mnemonic, seperated by spaces
dog cat apple bird ...
```
    

3. Compile and migrate your contract for testnet and mainnet

```bash
# Compile to testnet
npm run compile:testnet
# is equal to 
truffle compile --network thunder-testnet

# ---

# Compile to mainnet
npm run compile:mainnet
# is equal to 
truffle compile --network thunder-mainnet

# ---

# Migrate to testnet
npm run migrate:testnet
# is equal to 
truffle migrate --network thunder-testnet

# ---

# Migrate to mainnet
npm run migrate:mainnet
# is equal to 
truffle migrate --network thunder-mainnet
```

## Reference
- [Thunder Box Repo](https://github.com/thundercore/thunder-box)

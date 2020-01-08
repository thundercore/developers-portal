---
id: develop-with-truffle
title: 以 Truffle 开发
---

## 概观

[Truffle](https://www.trufflesuite.com/) 是以太坊社区中最受欢迎的开发工具之一。因为 ThunderCore 快速且与以太坊虚拟机兼容，所以开发人员可以使用以太坊的开发工具，包含使用 Solidity 和 Truffle 在 ThunderCore 上开发 DApps。 我们准备了一个套件，叫作 [thunder-box](https://www.trufflesuite.com/boxes/thunder-box) 给开发人员们。这个教程将会帮助你使用 thunder-box 快速地设置你的开发环境。

## 快速入门

首先，确保你位于一个新的空目录中，并且确认你的环境中有 `nodejs` 。

1. 通过 npx 运行 unbox 指令并跳到步骤3。

```bash
npx truffle unbox thundercore/thunder-box
```

2. 或者，你可以安装 Truffle 并运行 unbox 指令。

```bash
npm install -g truffle
truffle unbox thundercore/thunder-box
```

3. 运行开发 console。

```bash
truffle develop
```

4. 编译并迁移智能合约，须注意的是，在开发控制台中，我们不会使用 `truffle` 作为指令。

```bash
compile
migrate
```

5. 或者，你可以运行以下指令来编译和迁移智能合约。

```bash
npm run compile
npm run migrate
```

6. 以清除先前建立的合约：

```bash
npm clean
```

## 在 ThunderCore 测试网与主网中开发

1. 请遵照这个 [指示](get-tokens.md) 以获取你的 Thunder Token。
  
2. 欲设置开发帐户的控制权限，请执行以下操作之**一**：

   1. 将12个字的助记词 (seed phrase) 写入名为 .mnemonic 的文件中。
   2. 将你的帐户私钥 (每行一个) 导出到名为 .private-keys 的文件。


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
    

3. 编译并迁移测试网和主网的合约

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

## 参考资料
- [Thunder Box Repo](https://github.com/thundercore/thunder-box)

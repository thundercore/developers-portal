---
id: build_a_dapp_on_thundercore_testnet 
title: Build a DApp on ThunderCore Testnet
---
## Launch your DApp
Now that we’ve launched a local blockchain, deployed a smart contract, and connected MetaMask with the local blockchain, we can finally launch our DApp!

In a new terminal window, run:

```
cd client
npm run start
```

Navigate to [http://localhost:3000](http://localhost:3000). You'll see a page with the title `MyToken`.
​
Congrats, you’ve created your first DApp!

So what’s this DApp about? It essentially launches your own ICO, or initial coin offering, where people get tradable tokens that live on the blockchain. In this case, we are calling our token `MyToken`.

Let’s try sending your tokens to someone else (remember they're just local tokens for development!). Since this is a local blockchain, there are no rela other people to send to. Fortunately it’s easy enough to create a new address on a blockchain:
- Click the MetaMask icon in your browser.
- Click the accounts button, which is the first button in the upper right corner.
- Click "Create Account".

You’ve created a new account! Click the three dots next to the header "Account 2", and click "Copy Address to clipboard". Then click the accounts button (the first button in the upper right corner) again to switch back to "Account 1".

Now go back to the DApp. In the `To` field, paste in the address you just copied. In the `Amount` field, put in the amount of tokens you’d like to send. Finally, click `Send` and confirm the transaction by clicking "Submit" in the pop-up window.

Now, you should see that the balance shown in the web page has been reduced by the correct amount. Now try switching the account to "Account 2" and refresh the page. You should see that the balance reflects the amount you just sent.

## Updating the DApp
W’ve just launched our first token, which is very cool. It’d be cooler if we could give the token a real name as opposed to a generic name like `MyToken`.

Open the file `contracts/Token.sol` in your text editor. Even if you are not already familiar with Solidity (the smart contract programming language), you can probably make sense of the code--it's similar to JavaScript. Take note of this section:

```
 string public name = 'MyToken';
 string public symbol = 'MT';
 uint constant public INITIAL_SUPPLY = 1000000;
```

Go ahead and change all the values to whatever you'd like!  Give your token a better name, a cooler symbol, and a different initial supply.​

Run the following commands again (in the root directory, not the client directory):

```
truffle compile
truffle deploy --reset
```

Go back to the DApp and make sure to use Account 1 in MetaMask. You should see your new token with the amount you specified as the initial supply.

## Connecting to the ThunderCore testnet
It’s no fun if you can only send your own tokens it to yourself. Let’s go live by deploying the DApp to the ThunderCore testnet so other people can use your tokens.

First we must connect MetaMask with the ThunderCore testnet. Here are the steps:
- Click the MetaMask fox icon in your browser.
- Log out of your current account (which is provided by the local blockchain) by clicking the menu button, and then click "Log Out".
- Click "Restore from seed phrase" and input your original seed phrase (from when you installed MetaMask).
- Click the dropdown that says "Private Network".
- Select "Custom RPC".
- In the field that says "New RPC URL", enter `https://testnet-rpc.thundercore.com:8544`.

You should see that your account has been refreshed with a balance of 0. This is because you don’t own any Thunder Test Tokens yet. You can request them [here](https://faucet.thundercore.com).

## Deploying the DApp on ThunderCore testnet
We’ve made it very easy to deploy on the ThunderCore testnet. Go back to the code directory and open `truffle.js` in your favourite editor. Edit the first line to use your actual mnemonic, such as:

```
// This is just an example!!  You want to use your actual mnemonic.
let mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
```

Run this command to deploy! `truffle deploy --network thunder`

When the command has finished running, go back to your DApp running on [http://localhost:3000](http://localhost:3000).

You should see you already have `1 TST`. These tokens are live on the ThunderCore testnet, and you can send tokens to anyone with a ThunderCore testnet address!
​
But wait, you might say, how do people use my tokens if the DApp is running on `localhost`? That’s an excellent question. To make sure others can actually access your DApp, we will be using the free hosting service [GitHub pages](https://pages.github.com/).

## Deploying the frontend on Github pages
Head to GitHub and create a new repository. You should name the repo after your token, since your DApp will eventually be available at

`https://<username>.github.io/<repo-name>`.

Once you've created the repo, push your code from the `client` directory into the repo:

```
git init
git add .
git commit -m "Init"
git remote add origin <your-repo-url>
git push -u origin master
```

Open up `package.json` in your favorite editor and edit the `homepage` field:

```
{
 "homepage": "https://<username>.github.io/<repo-name>",
}
```

You want to replace `<username>` with your actual github username and `<repo-name>` with your actual repo name.

Finally, go to the client/ subdirectory and run:

```
npm run deploy
```

Once the command finishes running, you can head to your `homepage` URL and you should see your DApp! This time, the DApp is running on the public Internet and available for everyone to use.

## Learning more about DApps
It’s beyond the scope of this tutorial to go over the code, but if you’d like to learn more about smart contract programming and building DApps in general, we recommend [the official Solidity documentation](http://solidity.readthedocs.io/en/latest/).​

For questions, please go to our [Discord channel](https://discord.gg/5EbxXfw).

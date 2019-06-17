---
id: deploy_your_own_game
title: Deploy Your Own Game on ThunderCore in Minutes
---
Let's take 5-10 minutes and deploy a complete game powered by Thunder and accessible by your friends
and family - anyone with internet access. We will be launching a simple coin flip game
where the player gets double their bet if the coin lands on the ThunderToken. It will even support
the player doubling up their bet in the case that they should guess incorrectly.


## Getting Started
First we have to setup [Metamask](https://metamask.io/). It will be our wallet and our
access point to the Thunder network. For mobile, you can just download [ThunderHub]()
and navigate to [the game](http://jiang-yifan.github.io) to see the end result of this tutorial.


Once we have this setup, all that is needed is to check out the [repo](https://github.com/jiang-yifan/jiang-yifan.github.io)
and follow the instructions in the readme.

Congratulations! At the end of those instructions, you should be able to access the game with either
your mobile device through ThunderHub or your desktop browser with metamask.


## Deploying Your Own Contract
Now, let's get your game running on your own copy of the contract and get you started on your
path to millions.

First we will install of the dependencies.

`cd ./smart-contracts`

`yarn install` or `npm install`

Next grab your mnemonic from Metamask or Trust Wallet and add it to the HDWallet in `truffle-config.js`

`yarn migrate --network thunder` or `npm run migrate --network thunder`

In the console, you will see the price you've paid for its deployment, the contract address,
and additional stats. Well done! Your contract is now up and running ready to be used by anyone.

We must now update our UI to use this contract address.

`cd ./frontend`

`yarn install` or `npm install`

Find the `.env` file and change the `REACT_APP_CONTRACT_ADDRESS` to your new address.

`yarn build`

`git add -u` *Remember to not check in your mnemonic!!!!

`git commit -m 'add my own contract address'`

`git push`

Voila! In 5-10 seconds, your webpage will be using your contract!


....\
....

# Decentragram

## Getting Started

- If you don't have a MetaMask wallet, install the MetaMask Chrome extension here: https://metamask.io/
- If you don't have Ganache, download Ganache here: https://www.trufflesuite.com/ganache

- Install dependencies: `npm install`
- Open Ganache and click 'QUICKSTART' to initialize a test blockchain
- Start the server: `npm start`
- Deploy the Decentragram smart contract: `truffle migrate --reset`

#### OPTIONAL:

- To test if your smart contract deployed:

1. `truffle console`
2. `decentragram = await Decentragram.deployed()`
3. `decentragram`

- You will not see the complete smart contract object that you can interact with in the terminal

## Setting up MetaMask

1. Open up Chrome and Click the MetaMask fox icon
2. Create a Custom RPC named _Ganache_ with a URL of _HTTP://127.0.0.1:7545_
3. Click on the colored circle and click _Import Account_
4. In Ganache, click the key on the right side of the app and copy the private key'
5. In MetaMask, paste the private key and press _Import_
6. If you want to import multiple dummy accounts, repeat steps 4-5.

### New Tech && Concepts

#### Blockchain

- A globally distributed, public, transaction database.
- Allows multiple parties to collaborate without having to trust each other
- Transparency, authentication, auditing

#### Ethereum

- A blockchain featuring smart contract functionality.
- Ethereum gives us the ability to run apps on the blockchain.

#### Solidity

- Object-oriented language for writing smart contracts

#### Smart Contract

- Gets deployed on the blockchain
- Code enforces the contract

#### Ganache

- Personal private blockchain for testing our app without using real crypto currency

#### Web3.js

- JavaScript library allowing us to interact with the blockchain

#### IPFS

- Peer-to-peer hypermedia protocol
- Enables persistent availability to content (ie. a Google crash)
- Immutable persistent links to data

#### React.js

- Beloved front-end framework

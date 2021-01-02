const Decentragram = artifacts.require('Decentragram');

// This module puts smart contracts on the blockchain

module.exports = function(deployer) {
  deployer.deploy(Decentragram);
};

// To deploy, in the terminal write truffle migrate --reset
// To check deployment in terminal, write truffle console (this allows us to write JS commands on the blockchain and interact with it)

// **fetch Decentragram from the blockchain asynchronously
// decentragram = await Decentragram.deploy()

// decentragram (will return the JS version of contract)
// decentragram.address -> returns address

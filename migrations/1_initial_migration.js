// artifacts.require is similar to Node's require, but it returns a SPECIFIC contract
const Migrations = artifacts.require("Migrations");

// Default migration file
// Determines how all of the other smart contracts can be deployed

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

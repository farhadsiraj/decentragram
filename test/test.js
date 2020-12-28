const Decentragram = artifacts.require('./Decentragram.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Decentragram', ([deployer, author, tipper]) => {
  let decentragram;

  before(async () => {
    decentragram = await Decentragram.deployed();
  });

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await decentragram.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it('has a name', async () => {
      const name = await decentragram.name();
      assert.equal(name, 'Decentragram');
    });
  });

  // Smart contract testing is particularly important because the blockchain is IMMUTABLE so we need to test to make sure that the contract works very well. It cannot be changed once it is deployed.

  
});

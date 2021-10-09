const SimpleStorage = artifacts.require("SimpleStorage");
const { assert } = require('chai');
const { default: Web3 } = require("web3");
require('chai')
       .use(require('chai-as-promised'))
       .should()

contract('SimpleStorage', ([deployer, investor]) => {
       let name, age, simpleStorage,account
 before(async()=>{
              simpleStorage = await SimpleStorage.new()        
       })
       describe("Initializtion", async () => {
              it('contract has a name', async () => {
                     name = await simpleStorage.name();
                     assert.equal(name, 'Muzammil')
              })
              it('contract has a name', async () => {
                     age = await simpleStorage.Age();
                     assert.equal(age, 20)
              })
       })
})
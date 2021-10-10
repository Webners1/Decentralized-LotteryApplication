const Lottery = artifacts.require("Lottery");
const { assert } = require('chai');
require('dotenv').config()

let { networkConfig } = require('../truffle-config')

const { default: Web3 } = require("web3");
require('chai')
       .use(require('chai-as-promised'))
       .should()

contract('Lottery', ([deployer, investor,network]) => {
       let lottery,account,Usdfee,chainId
 before(async()=>{
       // chainId= await web3.eth.net.getId()
//accounts = chainId == 5777 ? (await web4.eth.getAccounts())[0] :'0x216309F3B914D30DA84e2a22d554665cf820199f'
        lottery = await Lottery.new("0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46", 
        process.env.VRFCOORDINATOR,
               process.env.LINK,
               process.env.FEE,
               process.env.KEYHASH)
        Usdfee = await lottery.getEntryFee()
      
       })
       describe("Initializtion", async () => {
              it('contract has right fee', async () => {
                     assert.equal(Usdfee> web3.utils.toWei('0.018', "ether"))
                     assert.equal(Usdfee < web3.utils.toWei('0.022',"ether"))
              })
       })
})






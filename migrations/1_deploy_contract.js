var Lottery = artifacts.require("lottery");
module.exports = async function ( deployer) {
 await deployer.deploy(FundMe);
  const lottery = Lottery.deployed()
  console.log(lottery.address)
};
module.exports.tags =['deploy','lottery','muzammil']
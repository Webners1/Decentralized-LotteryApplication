var Lottery = artifacts.require("Lottery");
module.exports = async function ( deployer,network) {
  await deployer.deploy(Lottery);
  const lottery = Lottery.deployed()
  console.log(lottery.address)
};
module.exports.tags =['deploy','lottery','muzammil']
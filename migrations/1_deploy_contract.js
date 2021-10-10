var Lottery = artifacts.require("Lottery");
module.exports = async function ( deployer,network) {
  await deployer.deploy(Lottery,'0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46');
};
module.exports.tags =['deploy','lottery','muzammil']
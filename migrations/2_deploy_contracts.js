// var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
// var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
// var Authentication = artifacts.require("./Authentication.sol");
//
// module.exports = function(deployer) {
//   deployer.deploy(Ownable);
//   deployer.link(Ownable, Killable);
//   deployer.deploy(Killable);
//   deployer.link(Killable, Authentication);
//   deployer.deploy(Authentication);
// };

var NonsenseTokenCrowdsale = artifacts.require('../contracts/NonsenseTokenCrowdsale.sol')

module.exports = function(deployer, network, accounts) {
  const startBlock = web3.eth.blockNumber + 2 // blockchain block number where the crowdsale will commence
  const endBlock = startBlock + 300
  const rate = new web3.BigNumber(1000) // rate of ether to LukeCoin in wei
  const wallet = web3.eth.accounts[0] // the address that will hold the fund. Recommended to use a multisig one for security.

  deployer.deploy(NonsenseTokenCrowdsale, startBlock, endBlock, rate, wallet)
}

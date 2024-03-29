// migrating the appropriate contracts
let FarmerRole = artifacts.require("./FarmerRole.sol");
let DistributorRole = artifacts.require("./DistributorRole.sol");
let RetailerRole = artifacts.require("./RetailerRole.sol");
let ConsumerRole = artifacts.require("./ConsumerRole.sol");
let SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function (deployer) {
  deployer.deploy(SupplyChain, FarmerRole.address, DistributorRole.address, RetailerRole.address, ConsumerRole.address);
};

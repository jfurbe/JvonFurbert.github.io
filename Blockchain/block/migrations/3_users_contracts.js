var UsersList = artifacts.require("./Users.sol");

module.exports = function(deployer) {
  deployer.deploy(UsersList);
}
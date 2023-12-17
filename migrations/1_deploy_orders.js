const OrdersContract = artifacts.require("OrdersContract");

module.exports = function(deployer) {
    deployer.deploy(OrdersContract);
};
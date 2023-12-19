const OrdersContract = artifacts.require("OrdersContract")

contract("OrdersContract", () =>  {

    before( async() => {
        this.ordersContract = await OrdersContract.deployed()
    })

    it('migrate deployed successfully', async () => {
        const address = this.ordersContract.address

        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
        assert.notEqual(address, 0x0);
        assert.notEqual(address, "");

    })

    it('get Orders List', async() => {
        const ordersCounters = await this.ordersContract.orderCounters()
        const order = await this.ordersContract.orders(ordersCounters)

        assert.equal(order.id.toNumber(), ordersCounters);
    
    })

    it("Order created successfully", async() => {
        const result = await this.ordersContract.createOrder("BTC", "Stop Loss", 7, 35, 15);
        const ordersEvent = result.logs[0].args;
        assert.equal(ordersEvent.id.toNumber(), 2);
        assert.equal(ordersEvent.stock, 'BTC');
    });



})
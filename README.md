```bash
truffle migrate


OrdersContract.address


ordersContract = await OrdersContract.deployed()

//se crea una orden y se guardan los datos en la variable orders
orders = await ordersContract.createOrder("BTC", "Stop Loss", 2, 25, 10)

//de los datos que estan en orders quiero el objeto con indice 0 y quiero lo que esta dentro
orders.logs[0].args

//COMANDOS EN TRUFFLE

counter = await ordersContract.orderCounter()

o1 = await ordersContract.orders(0)


App = {

    contracts: {},

    init: () => {
        
        App.loadEthereum()
        App.loadContracts()
    },

    loadEthereum: async () => {
        //verifica si esta descargado metamask en el browser
        if(window.ethereum){
            App.web3Provider = window.ethereum
            await window.ethereum.request({method: 'eth_requestAccounts'})

        }else if(web3){
            web3 = new Web3(window.web3.currentProvider)
        }else{
            console.log('instala metamask')
        }
    },

    loadContracts: async () => {
        //fetch al archivo
        const res = await fetch('OrdersContract.json')
        //lo convierto a json
        const ordersContractJson = res.json();
        //utilizo truffle ya instalado utilizando ese json
        App.contracts.ordersContract = TruffleContract(ordersContractJson)
        //se conecta el contrato a metamask
        App.contracts.ordersContract.setProvider(App.web3Provider)
        //utilizamos ese contrato desplegado y se guarda en la propiedad
        App.ordersContract = await App.contracts.ordersContract.deployed()

    },

    createOrder:async (stock, state, percentage, margin, pnlUsdt) => {
       const result = await App.ordersContract.createOrder(stock, state, percentage, margin, pnlUsdt)
       console.log(result.logs[0].args)
    }   

}

App.init();
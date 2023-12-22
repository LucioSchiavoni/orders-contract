const orderForm = document.querySelector("#orderForm")

orderForm.addEventListener("submit", e => {
    e.preventDefault()

    App.createOrder( orderForm["stock"].value,
        orderForm["state"].value,
        orderForm["percentage"].value,
        orderForm["margin"].value,
        orderForm["pnlUsdt"].value,)
})
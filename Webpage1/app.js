(() => {
    const orderDetails = document.querySelectorAll("#order-details .form-control")
    const calculate = document.querySelector("#calculate")
    const change = document.querySelector("#change")
    const newOrder = document.querySelector("#new-order")
    const fooditems = document.querySelectorAll("#menu .form-check-input")
    const orderImage = document.querySelector("#order-image")
    const orderSummary = document.querySelector("#order-summary")
    const menu = [
        {
            name: "Cappucinno",
            price: 99
        },
        {
            name: "Black Coffee",
            price: 99
        },
        {
            name: "Cafe Latte",
            price: 99
        },
        {
            name: "Iced Latte",
            price: 99
        },
        {
            name: "Hot Chocolate",
            price: 89
        },
        {
            name: "Biscotti (BF-1)",
            price: 59
        },
        {
            name: "Biscotti (BF-2)",
            price: 59
        },
        {
            name: "Biscotti (BF-3)",
            price: 59
        },
        {
            name: "Muffins (MF-1)",
            price: 69
        },
        {
            name: "Muffins (MF-2)",
            price: 69
        },
        {
            name: "Muffins (MF-3)",
            price: 69
        },
        {
            name: "Croissants (CF-1)",
            price: 79
        },
        {
            name: "Croissants (CF-2)",
            price: 79
        },
        {
            name: "Croissants (CF-3)",
            price: 79
        },
        {
            name: "Croissants (CF-4)",
            price: 79
        }]
    // Image
    fooditems.forEach((food, foodIdx) => {
        food.addEventListener("click", (e) => {
            orderDetails.forEach((orderDetail) => {
                orderDetail.value = ""
            }) 
            orderDetails[0].value = menu[foodIdx].price 
            orderImage.src= `${foodIdx+1}.jpg`
            orderSummary.innerHTML =`${menu[foodIdx].name} - ₱${menu[foodIdx].price}`
        })
    })
     // Calculate bills
    calculate.addEventListener("click", (event) => {
        orderDetails[2].value = .10 * (parseFloat(orderDetails[0].value)* parseFloat(orderDetails[1].value) )
        orderDetails[3].value = (orderDetails[0].value * parseFloat(orderDetails[1].value)) - orderDetails[2].value
        orderDetails[4].value =orderDetails[3].value
        orderDetails[5].value = parseFloat(orderDetails[1].value)
        orderDetails[6].value = ""
        orderDetails[7].value = ""
        
    }) 
    // Change
    change.addEventListener("click", (event) => {
        orderDetails[7].value = orderDetails[6].value - parseFloat(orderDetails[3].value)
        if(orderDetails[7].value<1){
            alert('Insufficient Amount');
            //reset
            comboA.checked = false
            comboB.checked = false
            bundleA.forEach((bundle) => {
                bundle.checked = false
            })
            bundleB.forEach((bundle) => {
                bundle.checked = false
            })
            orderDetails.forEach((orderDetail) => {
                orderDetail.value = ""
            })
            fooditems.forEach((fooditem) => {
                fooditem.checked = false
            })
            orderSummary.innerHTML = "Order summary . . ."
            orderImage.src= "threej-logo-cir-blue.png"
        }
    })

    // New Order
    newOrder.addEventListener("click", (event) => {
        comboA.checked = false
        comboB.checked = false
        bundleA.forEach((bundle) => {
            bundle.checked = false
        })
        bundleB.forEach((bundle) => {
            bundle.checked = false
        })
        orderDetails.forEach((orderDetail) => {
            orderDetail.value = ""
        })
        fooditems.forEach((fooditem) => {
            fooditem.checked = false
        })
        orderSummary.innerHTML = "Order summary . . ."
        orderImage.src= "threej-logo-cir-blue.png"
    })
    // Checkbox
    const checkboxes = document.querySelectorAll('#menu .form-check-input')

    document.body.addEventListener('click', (e) => {
    for (const c of checkboxes) {
        c.checked = false
    }

    const clickedCheckbox = [...checkboxes].find(c => c === e.target)
    clickedCheckbox.checked = true
    })

    // Combo A & B
    const comboA = document.querySelector("#comboa")
    const comboB = document.querySelector("#combob")
    const bundleA = document.querySelectorAll("#bundlea .form-check-input")
    const bundleB = document.querySelectorAll("#bundleb .form-check-input")
    
    fooditems.forEach((fooditem) => {
        comboA.addEventListener("click", (event) => {
            bundleA.forEach((bundle) => {
                bundle.checked = true
                fooditem.checked = false
            })
            bundleB.forEach((bundle) => {
                bundle.checked = false
                fooditem.checked = false
            })
            orderDetails.forEach((orderDetail) => {
                orderDetail.value = ""
            })
            orderDetails[0].value = 379
            orderImage.src= `comboA.png`
            orderSummary.innerHTML =`P & C Combo B - ₱379`
        })
    })
    fooditems.forEach((fooditem) => {
        comboB.addEventListener("click", (event) => {
            
            bundleA.forEach((bundle) => {
                bundle.checked = false
                fooditem.checked = false
            })
            bundleB.forEach((bundle) => {
                bundle.checked = true
                fooditem.checked =false
            })
            orderDetails.forEach((orderDetail) => {
                orderDetail.value = ""
            })
            
            orderDetails[0].value = 599
            orderImage.src= `comboB.png`
            orderSummary.innerHTML =`P & C Combo B - ₱599`
        })
    })
    fooditems.forEach((fooditem) => {
        fooditem.addEventListener("click", (event) => {
            comboA.checked = false
            comboB.checked = false

            bundleA.forEach((bundle) => {
                bundle.checked = false
            })
            bundleB.forEach((bundle) => {
                bundle.checked = false
            })
        })
    })
    
})()
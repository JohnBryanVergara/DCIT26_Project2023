(() => {
    const basicPays = document.querySelectorAll("#basic-pay .form-control")
    const regularDeductions = document.querySelectorAll("#regular-deduction .form-control")
    const honorariums = document.querySelectorAll("#honorarium .form-control")
    const otherIncomes = document.querySelectorAll("#other-income .form-control")
    const otherDeductions = document.querySelectorAll("#other-deduction .form-control")
    const calcGrossIncome = document.querySelector("#calc-gross-income")
    const calcNetIncome = document.querySelector("#calc-net-income")
    const totalDeduction = document.querySelector("#total-deduction")
    const grossIncome = document.querySelector("#gross-income")
    const netIncome = document.querySelector("#net-income")
    const newPay = document.querySelector("#new-pay")

    
    calcGrossIncome.addEventListener("click", (e) => {
        //Basic Pay
        basicPays[2].value = basicPays[1].value * basicPays[0].value
        //Honorarium
        honorariums[2].value = honorariums[1].value * honorariums[0].value
        //Other Income
        otherIncomes[2].value = otherIncomes[1].value * otherIncomes[0].value
        //Gross Income
        grossIncome.value = parseFloat(otherIncomes[2].value) + parseFloat(honorariums[2].value) + parseFloat(basicPays[2].value)
        //Tax
        regularDeductions[0].value = grossIncome.value * .10
        regularDeductions[3].value = grossIncome.value * .10
        //Regular Deduction  
        const totalRegularDeduction = parseFloat(regularDeductions[0].value) + parseFloat(regularDeductions[1].value) + 
                                    parseFloat(regularDeductions[2].value)+ parseFloat(regularDeductions[3].value)
        //Other Deduction
        let totalOtherDeduction = 0
        otherDeductions.forEach((otherDeduction) => {
            totalOtherDeduction += parseFloat(otherDeduction.value) || 0
        })                           
       totalDeduction.value= totalOtherDeduction + totalRegularDeduction
    })
    calcNetIncome.addEventListener("click", (e) => {
       netIncome.value = grossIncome.value - totalDeduction.value
    })
    newPay.addEventListener("click", (e) => {
        basicPays.forEach((basicPay) =>{
            basicPay.value=""
        })
        honorariums.forEach((Honorarium) =>{
            Honorarium.value=""
        })
        otherIncomes.forEach((otherDeduction) =>{
            otherDeduction.value=""
        })
        otherDeductions.forEach((otherDeduction) =>{
            otherDeduction.value=""
        })
        regularDeductions[3].value=""
        grossIncome.value=""
        netIncome.value=""
        totalDeduction.value=""
    })

})()
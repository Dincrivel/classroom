// JSON - JavaScript Object Notation
// key and value whit objective of data transfer
let invoice = { // Declaring JSON its much like a variable but instead of <x = y> you must put { } to input their scoup of data
    nameCostumer: "Diego",
    age: 26,
    products: {
        P1: ["AMD RYZEN 5 7600X", 1300],
        P2: ["B650 AORUS", 1100],
        P3: ["2x16GB DDR5 5200MHZ", 780],
        P4: ["850W +80 GOLD", 560],
        P5: ["5060 TI 12GB", 99999],

    }

}

function generateInvoice(invoice){
    console.log(`Costumer: ${invoice.nameCostumer}` + ` - Age: ${invoice.age}`)
    console.log("----------------------------------------------------------")

    for(const index in invoice.products){ // for( in) used to read a object/list
        let [productName, productPrice] = invoice.products[index] // declaring that in this list (invoice.products),  [0(is productName), 0(is productPrice)]
        console.log(`Product: ${productName} R$ ${productPrice}`) // outputing each column of this list

    }

}

generateInvoice(invoice)
// <- WITH JSON
//concatenating variables and constants strings and changing in middle code
let coffeePot = "Brazilian Coffee"
let sugarPot = "Refined sugar"
let cookiesPot = "Chocolate chips cookies"
const grannysKitchen = "In grandma's kitchen has: "

console.log(grannysKitchen +
        coffeePot + ", " +
        sugarPot + ", " +
        cookiesPot
)

coffeePot = "Arabic Coffee"

console.log(grannysKitchen +
    coffeePot + ", " +
    sugarPot + ", " +
    cookiesPot
)
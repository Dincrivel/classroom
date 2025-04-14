//for -- a loop structure that executes commands repeatedly until the specified conditions are satisfied.
//while -- a loop structure that executes commands repeatedly until the specified conditions are satisfied.
//do while -- a loop strcture that excecutes commands at least one time because it checks the conditions after the first try.
let healthPoints = 1
let manaPoints = 5
let staminaPoints = 20

console.log("Initial HP: " + healthPoints)
console.log("Initial MP: " + manaPoints)

while(manaPoints < 15){
    manaPoints++
    console.log("|drank a potion| MP: " + manaPoints)
}
console.log("MAX MANA")
for(let i = 0; i <= 10 ; i++){
    healthPoints += 1
    console.log("|drank a potion| HP:" + i)
}
console.log("MAX HEALTH")

do {console.log("recoverring stamina")
    console.log("STAMINA: " + staminaPoints)
    staminaPoints += 5
} while (staminaPoints <= 150)
console.log("MAX STAMINA")




//for (let counter = 0; counter <= 4; counter++){
//    console.log(counter)
//    console.log("Rising the counter")
//}
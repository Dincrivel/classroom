//Basic study about operators in variables and using it concatenating
let age = 30
console.log("my variable value: " + age)

age = 30 + 6
console.log("adiction operation: " + age)

age = 30 - 7
console.log("subtraction operation: " + age)

let productCode = 1580
let exactCode = productCode - 1000
console.log("the product code is " + exactCode)

let price = 100.99
let priceWTaxes = price * 2
console.log("final price is U$" + priceWTaxes)

let multiplier = 4
let multiplying = 12
let product = multiplier * multiplying
console.log("final result is " + product)

let marketNote = 50
console.log("division operation " + marketNote / 2)

let calculus = 10 % 3
console.log("the change is: " + calculus)

let timer = 1
console.log(timer)
// '++' incremention
timer++ //timer = timer + 1
timer++

//'--' decremention
timer-- //timer = timer - 1
timer--
timer--
console.log(timer)

price = 10
price += 5 //price = price + 5
price -= 10 //price = price - 10
price *= 10 //price = price * 10
console.log("U$" + price)

let shopping = 2 * ((5 + 3) - 10) //setting priorites into the operation
console.log(shopping)

let number = "1"
let label = "AMD"
let result = label !== "Intel" // stock the result (true?false) in a variable and show it after this
console.log(number == 1) //is number = 1? <true>
console.log(label !== "AMD")
console.log(label === "AMD")
console.log(result)

let cpfBlocked = "123.445.222-45"
let cpfUser = "222.111.222=09"
let isCPFBlocked = cpfUser === cpfBlocked //it is equal?
console.log("Can the user blocked? " + isCPFBlocked)
// = is atribuition
// == is to compare values
// === is to compare value AND format of content
// !== is this diferent?


let cpfPermit = "321.332.555-10"
cpfUser = "321.332.555-11"
let cpfVerify = cpfPermit !== cpfUser //is not equal
console.log("The user is invalid? " + cpfVerify)

//Comparing now with aritmethic values
let ageMin = 18
let userAge = 18
let ageVerify = userAge >= ageMin // >= (user equal or greater than min)
console.log("User has the minumun age? " + ageVerify)

number = 5
string = "5"
let verifyNumber = number === string
console.log("is it a REAL number? " + verifyNumber) // === is to compare value AND format of content

// AND (&&), OR (||) and NOT (!) logical operations

age = 22
let passportVisa = true
console.log( (age >= 18) && (passportVisa === true) )//both conditions need to match to return a (true) result

let weather = "clean"
let item = "umbrella"
let canLeave = (weather !== "rain") || (item === "umbrella")//one of conditions must be (true) to return (true)
console.log("nosso personagem pode sair? " + canLeave)

weather = "rain"
let hour = 8
result = (weather !== "rain") && (hour > 6)//the condition must be (false) to return a (true) result. you can change the boolean result by putting (!) in front of it
console.log(!result)//!xxxxx the result changes to (ture) or (false)
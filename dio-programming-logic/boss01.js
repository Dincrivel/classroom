// HERO LEVEL CLASSIFIER
// Create a variable to store the hero's name and experience points (XP), then use a decision structure to display one of the messages below:

//  
// If XP is less than 1,000 = Iron  
// If XP is between 1,001 and 2,000 = Bronze  
// If XP is between 2,001 and 5,000 = Silver Gold  
// If XP is between 5,001 and 8,000 = Platinum Diamond  
// If XP is between 8,001 and 9,000 = Ascendant  
// If XP is between 9,001 and 10,000 = Immortal  
// If XP is greater than or equal to 10,001 = Radiant 
let nameHero = "Diego"
let xpHero = 2500
let rankHero = ""

if (xpHero <= 1000){
    rankHero = "Iron"
}
else if (xpHero <= 2000){
    rankHero = "Bronze"
}
else if (xpHero <= 5000){
    rankHero = "Silver Gold"
}
else if (xpHero <= 8000){
    rankHero = "Platinum Diamond"
}
else if (xpHero <= 9000){
    rankHero = "Ascendant"
}
else if (xpHero <= 10000){
    rankHero = "Immortal"
}
else if (xpHero > 10000){
    rankHero = "Radiant"
}
else {
    console.log("unranked")
}

console.log("The hero of name, " + nameHero + " end his adventure by level " + xpHero + " - " + rankHero)
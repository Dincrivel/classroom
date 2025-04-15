// RANKED MATCHES CALCULATOR
// calculate the rank of a hero based on the number of wins and losses in ranked matches.
function calculateRank(wins, losses, rank = "unranked"){
    let mmr = wins - losses

    if(mmr <= 0){
        rank = "unranked"
        return ("You are: " + rank)
    } else if (mmr <= 10){
        rank = "iron"
        return ("your rank is: " + rank)
    } else if (mmr <= 20) {
        rank = "bronze"
        return ("your rank is: " + rank)
    } else if (mmr <= 50) {
        rank = "silver"
        return( "your rank is: " + rank)
    } else if (mmr <= 80) {
        rank = "gold"
        return ("your rank is: " + rank)
    } else if (mmr <= 90) {
        rank = "diamond"
        return ("your rank is: " + rank)
    } else if(mmr <= 100){
        rank = "legendary"
        return ("your rank is: " + rank)
    } else if(mmr > 100){
        rank = "radiant"
        return ("your rank is: " + rank)
    }
}

let player1 = calculateRank(123, 39)
let player2 = calculateRank(1, 39)
let player3 = calculateRank(500, 39)
console.log("Gustavo rank is: " + player1)
console.log("Matheus rank is: " + player2)
console.log("Hugo rank is: " + player3)
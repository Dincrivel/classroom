//arrays ["0", 1, true, "4"]
let pokemonNames = ["Pikachu", "Ceruledge", "Charmander"]
let pokemonTeam = [
    ["Pikachu", "M", 5],
    ["Ceruledge", "F", 15]
]
//matrices are 2 dimensional arrays (X , Y) standing like |[0,0] - [0,1] - [0,2] - [0,3]|
//                                                        |[1,0] - [1,1] - [1,2] - [1,3]|  and so on...
console.log("Pokemon " + 
    pokemonTeam[1][0] + 
    " is level " + 
    pokemonTeam[1][2] +
    " and is " +
    pokemonTeam[1][1] +
    " sex"
)
console.log(pokemonTeam.length)
let fruit = "orange"
let alcoholLevel = 0

switch (fruit) { //switch is a more complex struture of if/if else/else switch(<variable>) will search the value and compare to the list of cases ahead of the code.
    
    case "orange"://diferent cases can be interpolated to return the same result like in this estruture
    case "lemon":
        console.log("Caipirinha with cachaça")
        console.log("alcohol level: " + (alcoholLevel + 3))
    break//break will stop the search if the value expected are founded

    case "apple":
        console.log("Apple is red")
    break

    case "banana":
        console.log("Banana is yellow")
    break

    default://default will be used if the value expected isnt on the list of cases
    console.log("not in fruit market")
}
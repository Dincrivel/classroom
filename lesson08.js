let hungry = 10 //this is really starving

if(hungry === 1){//outputed if the result ( if(hasEggs) is (true)
    let food = "snack"
    console.log(food + " has been consumed")
    hungry = hungry - 1
}else if(hungry === 2){
    let food = "pizza"
    console.log(food + " has been consumed")
    hungry = hungry - 2
}else{
    let food = "dinner"
    console.log(food + " has been consumed")
    hungry = hungry - 3
    console.log("hungry level: " + hungry)
}

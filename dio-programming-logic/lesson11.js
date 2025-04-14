let bread = "white";

insertBread();

function insertBread(){
    console.log("Inserting bread into toaster...");
    console.log("Bread inserted into toaster.");
    bread = "brown";
}
function toaster(){
    console.log("Toasting bread...");
}

function removeBread(){
    console.log("Removing bread from toaster...");
    console.log("Bread removed from toaster.");
    bread = "toasted";
}

if (bread === "white"){
    insertBread();
    toaster();
}
else if (bread === "brown"){
    removeBread();
    console.log("bread is toasted now.");
}

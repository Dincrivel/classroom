// Lesson 11 - Functions
// Functions are reusable blocks of code that perform a specific task.
// They can take inputs (parameters) and return outputs (results).

mainSaveData()

function mainSaveData(){
    getData()
    checkValues()
    sendToDatabase()
    dataSaved()
}

function getData(){
    console.log("Getting data from the user.")
}

function checkValues(){
    console.log("Validating data...")
}

function sendToDatabase(){
    console.log("Sending data to the database...")
}

function dataSaved(){
    console.log("Data saved successfully!")
}

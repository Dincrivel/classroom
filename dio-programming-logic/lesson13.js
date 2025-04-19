// Objects - Has the same data structure from the class and implements his properties
// Methods - 
// has intelligence methods (self functions)
class Processor{// Classes - Padronazing the format but still self properties.
    constructor(brand, cores, threads){ // This function must be called constructor
        this.brand = brand// Into Classes you dont have to declare using <let><const>, use <this.> instead
        this.cores = cores
        this.threads = threads

    }

    toString(){// So do functions just name them and there they are
        console.log(`One powerful ${this.brand} computer, processor with ${this.cores} CORES and ${this.threads} THREADS all set to your new adventure!`)

    }

    checkout(){
        console.log(`buying this pc ${this.brand} ${this.cores} cores ${this.threads} threads`)
    }

}

let pcIntel = new Processor("Intel", 10, 20)// Objects - Has the same data structure from the class and implements his properties
let pcAMD = new Processor("AMD", 8, 16)// Instance an object - Creating an object using a class

pcIntel.toString()
pcAMD.toString()
pcAMD.checkout()// calling functions inside the class
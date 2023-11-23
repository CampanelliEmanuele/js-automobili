/** Constants declaration */
const carKeys = {
    brandKey: "brand",
    modelKey: "model",
    fuelKey: "fuel"
}

const numOfBrands = 5, numOfModels = 10, numOfFuels = 5

/** 1 - Array of cars creation */
cars = getArr(10, createCar, "brand", "model", "fuel", true)

/** 2 - Array filtering */
let petrolCars = sortArr(cars, carKeys.fuelKey, "fuel 1")
let diselCars = sortArr(cars, carKeys.fuelKey, "fuel 2")
let otherCars = sortArr(cars, carKeys.fuelKey, "fuel 3", "fuel 4", "fuel 5")

// printCarsOnConsole()

/** Bonus */
printCars()

/**
 * 1 - Functions
 */

/**
 * Given three
 * @param {*} brand 
 * @param {*} model 
 * @param {*} fuel 
 * @returns 
 */
function createCar(brand, model, fuel, random) {
    const car = {
        [carKeys.brandKey]: brand,
        [carKeys.modelKey]: model,
        [carKeys.fuelKey]: fuel
    }
    if (random) {
        car[carKeys.brandKey] += ' ' + Math.floor(Math.random() * numOfBrands + 1)
        car[carKeys.modelKey] += ' ' + Math.floor(Math.random() * numOfModels + 1)
        car[carKeys.fuelKey] += ' ' + Math.floor(Math.random() * numOfFuels + 1)
    }
    return car;
}

/**
 * 
 * @param {*} length lenght of the array of object.
 * @param {*} func function which, providing the arguments, creates an object.
 * @param  {...any} args parameter values to pass to the function.
 * @returns 
 */
function getArr(length, func, ...args) {
    let arr = []
    for (let i = 0; i < length; i++) {
        let newEl = func.apply(null, args)
        arr.push(newEl)
    }
    return arr
}

/**
 * 2 - Functions
 */
function sortArr(arr, property, ...args) {
    let res = []
    arr.forEach((element) => {
        let condition = Object.values(args).includes(element[property])
        if (condition) {
            res.push(element)
        }
    })
    return res
}

/**
 * Bonus - Functions
 */
function printCarsOnHtml() {
    document.getElementById("mainContainer").innerHTML = ''
    cars.forEach((car, index) => {
        let htmlCarInfo = ''
        arrOfValues = Object.values(carKeys)

        arrOfValues.forEach(carKey => {
            htmlCarInfo += car[carKey] + '&emsp;'
        })

        document.getElementById("mainContainer").innerHTML += `
        <!-- CAR ${index + 1} -->
        <div class="col col-sm-6 col-md-6 col-lg-4">
            <div class="card text-center">
                <div class="card-body">
                    <h6 class="card-title">CAR ${index + 1}</h6>
                    <p class="card-text">${htmlCarInfo}</p>
                </div>
            </div>
        </div>
        `
    })
}

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let brand = document.getElementById("inputBrand").value;
    let model = document.getElementById("inputModel").value;
    let fuel = document.getElementById("inputFuel").value;

    let newCar = createCar(brand, model, fuel, false)
    cars.push(newCar)

    printCarsOnHtml()
})

/**
 * Other functions
 */

function printCarsOnConsole() {
    console.log("Array with 10 cars: ")
    console.log(cars)

    console.log("Array with petrol cars: ")
    console.log(petrolCars)
    console.log("Array with disel cars: ")
    console.log(diselCars)
    console.log("Array with other cars: ")
    console.log(otherCars)
}

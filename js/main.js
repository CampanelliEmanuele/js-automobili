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

////////////////////////////////////////////// Part 1 - Functions //////////////////////////////////////////////

/**
 * Can generate a custom or random car.
 * @param {string} brand the fuel brand of the car
 * @param {string} model the fuel model of the car
 * @param {string} fuel the fuel value of the car
 * @param {boolean} random if true a random car will be generated, otherwise not.
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
 * @param {*} func function which, providing the arguments (args), creates an object.
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

////////////////////////////////////////////// Part 2 - Functions //////////////////////////////////////////////

/**
 * Given an array, a property to check during the array scrolling, and the values which will be searched across the properties of the array's (iterated) object 
 * @param {*} arr array to sort.
 * @param {string} propertyToCheck property (of the iterated object of the array) to check.
 * @param  {...any} args is the list of the values to search that will make the filter.
 * @returns 
 */
function sortArr(arr, propertyToCheck, ...args) {
    let res = []
    arr.forEach((element) => {
        let arrOfValues = Object.values(args)
        let canPush = arrOfValues.includes(element[propertyToCheck]) /* Check if the array contains the element: element[property] */
        if (canPush) {
            res.push(element)
        }
    })
    return res
}

////////////////////////////////////////////// Part Bonus - Functions //////////////////////////////////////////////

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

////////////////////////////////////////////// Other Functions //////////////////////////////////////////////

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

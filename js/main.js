/* Constants declaration */
const brandKey = "brand", modelKey = "model", fuelKey = "fuel"
const numOfBrands = 5, numOfModels = 10, numOfFuels = 5

/* 1 - Array of cars creation */

cars = getArr(10, createCar, "brand", "model", "fuel")
console.log("Array with 10 cars: ")
console.log(cars)

/* 1 - Functions */

function createCar(brand, model, fuel) {
    const car = {
        [brandKey]: brand + ' ' + Math.floor(Math.random() * numOfBrands + 1),
        [modelKey]: model + ' ' + Math.floor(Math.random() * numOfModels + 1),
        [fuelKey]: fuel + ' ' + Math.floor(Math.random() * numOfFuels + 1)
    }
    return car;
}

function getArr(length, func, ...args) {
    let arr = []
    for (let i = 0; i < length; i++) {
        let newEl = func.apply(null, args)
        arr.push(newEl)
    }
    return arr
}

/* 2 - Array filtering */

let petrolCars = sortArr(cars, fuelKey, "fuel 1")
let diselCars = sortArr(cars, fuelKey, "fuel 2")
let otherCars = sortArr(cars, fuelKey, "fuel 3", "fuel 4", "fuel 5")

/* 2 - Functions */

function sortArr(arr, property, ...args) {
    let res = []
    arr.forEach((element) => {
        let condition = Object.values(args).includes(element[fuelKey])
        if (condition) {
            res.push(element)
        }
    })
    return res
}

console.log("Array with petrol cars: ")
console.log(petrolCars)
console.log("Array with disel cars: ")
console.log(diselCars)
console.log("Array with other cars: ")
console.log(otherCars)





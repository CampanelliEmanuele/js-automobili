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





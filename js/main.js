

function createCar(brand, model, fuel) {
    let car = {
        brand: brand,
        model: model,
        fuel: fuel
    }
    return car;
}

/**
 * Data una funzione 
 * 
 * @param {*} length 
 * @param {*} func 
 */
function getArr(length, func, ...args) {
    let arr = []
    for (let i = 0; i < length; i++) {
        let newEl = func(args)
        arr.push()
    }
    return arr
}

let args = ["brand", "model", "fuel"]
arr = getArr(5, createCar, args)

console.log(arr)
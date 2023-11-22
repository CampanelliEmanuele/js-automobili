

function createCar(brand, model, fuel) {
    let car = {
        brand: brand,
        model: model,
        fuel: fuel
    }
    return car;
}

function getArr(length, func, ...args) {
    let arr = []
    for (let i = 0; i < length; i++) {
        let newEl = func.apply(null, args)
        console.log(newEl)
        arr.push(newEl)
    }
    return arr
}

arr = getArr(5, createCar, "brand", "model", "fuel")
console.log(arr)




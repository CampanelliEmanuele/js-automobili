

function createCar(brand, model, fuel) {
    const car = {
        brand: brand + ' ' + Math.floor(Math.random() * 6),
        model: model + ' ' + Math.floor(Math.random() * 11),
        fuel: fuel + ' ' + Math.floor(Math.random() * 6)
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

arr = getArr(5, createCar, "brand", "model", "fuel")
console.log(arr)




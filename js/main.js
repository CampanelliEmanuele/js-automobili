

function createCar(brand, model, fuel) {
    // console.log(`${brand}\t${model}\t${fuel}`)
    let car = {
        brand: brand,
        model: model,
        fuel: fuel
    }
    return car;
}

function getArgs(args) {
    let output = ''
    // args.forEach(function(element) {
    //     output += "\"" + element + "\""
    //     console.log(output)
    // })

    return output
}

function getArr(length, func, ...args) {
    args = getArgs(args)
    let arr = []
    for (let i = 0; i < length; i++) {
        let newEl = func(args)
        arr.push(newEl)
    }

    return arr
}

let args = ["brand", "model", "fuel"]
arr = getArr(5, createCar, args)





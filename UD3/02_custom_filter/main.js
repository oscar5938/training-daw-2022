const assert = require('assert').strict;

function select(array, condition) {
    // `${condition}(${array})`
    return condition(array)
}

function pairs(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 !=0){
            array.splice(i,1)
        }
    }
    console.log(array)
    return array
   }

function gt15(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i]<15){
            array.splice(i)
        }
    }
    console.log(array)
    return array
}

function lt10(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i]>10){
            array.splice(i)
        }
    }
    console.log(array)
    return array
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])
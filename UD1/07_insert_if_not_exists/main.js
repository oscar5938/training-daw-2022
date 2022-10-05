const assert = require('assert').strict

function insertIfNotExists(array, item, position) {
    let cons=0;
   for (let i = 0; i < array.length; i++) {
       if(item!=array[i]){
           cons++;
           if (cons===array.length) {
               if (position === true) {
                   array.unshift(item)
               }else{
                   array.push(item)
               }
           }
       }
   }
   console.log(array)
    return array
}


let array = ['pera', 'manzana']

let result = insertIfNotExists(array, 'pera', false)
assert.deepStrictEqual(result, ['pera', 'manzana'])

 result = insertIfNotExists(array, 'melón', false)
 assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

 result = insertIfNotExists(array, 'melocotón', true)
 assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])


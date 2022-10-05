const { arrayBuffer } = require("stream/consumers");

let miArray=['uno',2,[3,4]];
for(let i = 0; i<miArray.length; i++){
    console.log(miArray[i]);
}

//by item
for(let item of miArray){
    console.log(item);
}

//by index
for(let item in miArray){
    console.log(miArray[item]);
}

miArray.push('tres')//añade al final
miArray.unshift('zero')//añade al principio
miArray.shift()//quita el primero
miArray.pop()//quita el ultimo
miArray.slice()//no toca el array
miArray.splice()//modifica el array

for(let i = 0; i<miArray.length; i++){
    console.log(miArray[i]);
}
array,includes('objeto')// ver si array tiene el objeto
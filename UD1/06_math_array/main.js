// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    let suma=0;
    let mayo=array[0];
    let meno=array[0];
for(let i=0;i<array.length;i++){
    suma=suma+array[i];
if (mayo<array[i]) {
     mayo=array[i];
    }
    if (meno>array[i]) {
        meno=array[i];
    }
}
let media = suma/array.length
console.log(`La suma es ${suma}, el mayor numero ${mayo}, el menor numero ${meno} y la media es ${media}`)
}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])
function evenNumbers() {
    let pares = []
for (let i = 1; i < 100; i++) {
if (i % 2 === 0) {
    pares.push(i)
}
}
return pares
}

evenNumbers();
// expected output 2,4,6,8,10......98
const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
   // value/=3600
   // let horas = parseInt(value)
   // let minutos= (value-horas)*60
   // value=minutos
   // minutos=parseInt(value)
   // let segundos=parseInt((value-minutos)*60)
   // console.log(`${horas}:${minutos}:${segundos}`)
   let horas = parseInt(value/3600)
   let minutos = parseInt((value%3600)/60)
   let segundos = parseInt((value % 3600) % 60)
    return `${horas}:${minutos}:${segundos}`
}
toHoursMinutesSeconds(3601)
assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
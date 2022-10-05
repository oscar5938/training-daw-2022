const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    value/=3600
    let horas = Math.trunc(value)
    let minutos= (value-horas)*60
    value=minutos
    minutos=Math.trunc(value)
    let segundos=Math.trunc((value-minutos)*60)
    console.log(`${horas}:${minutos}:${segundos}`)
}
toHoursMinutesSeconds(3601)
assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:20:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:20:5")
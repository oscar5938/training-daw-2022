window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue
    document.getElementById("submit").disabled = true;

}

document.addEventListener("click", function(e){
    let condicion= document.getElementById("condiciones")
    let privacidad= document.getElementById("privacidad")

    if(e.target !== condicion && e.target !== privacidad) return;
    KLKMANIN(condicion.checked, privacidad.checked)
})

function changeValue(e) {
     console.log('changed ' + e.target.value)
}

function KLKMANIN(a,b){
    console.log(a, b)
    if(a && b){
        document.getElementById("submit").disabled =false
    }else{
        document.getElementById("submit").disabled =true
    }
}
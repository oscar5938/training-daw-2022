window.onload = function(e) {
    console.log('documento cargado')
    // Cambiar el título del segundo h2
    document.getElementsByTagName('h2')[1].innerText = "Titulo 2"

    // Seleccionar el elemento con id == username
    let username = document.getElementById('username')
     console.log(username)

     // Cambiar el color de todos los .first que estén dentro de un artículo
    let primer = document.getElementsByClassName('first')
    for (let i = 0; i < primer.length; i++) {
        primer[i].style.color = 'red'
    }

    // Seleccionar todos lo elementos li con class == item
    let li = document.getElementsByTagName('li')
    for (let r = 0; r < li.length; r++) {
        if (li[r].className === 'item') {
            console.log(li[r])
        }
    }

    // Seleccionar todos lo buttons dentro de class == buttons
    let but = document.querySelectorAll('.buttons button')
    for (let s = 0; s < but.length; s++) {
        console.log(but[s])
    }

    // Cambiar el código de fondo del primer párrafo
    let primerP = document.getElementsByTagName('p')
    primerP[0].style.backgroundColor= 'yellow'

    // Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    for (let takata = 0; takata < but.length; takata++) {
        but[takata].style.color = 'green'
    }
}






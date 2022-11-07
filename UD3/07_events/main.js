window.onload = function(e) {
    console.log('documento cargado')
    let enlace = document.getElementsByTagName('a')
    let parrafo = document.getElementsByTagName('p')
    for (let i = 0; i < enlace.length; i++) {
        enlace[i].onclick= () => Change(i)
    }

    function Change(num){
        if(parrafo[num].style.display===""){
            parrafo[num].style.display="none"
            enlace[num].innerHTML="Mostrar contenidos"
        }else{
            parrafo[num].style.display=""
            enlace[num].innerHTML="Ocultar contenidos"
        }
    }
}


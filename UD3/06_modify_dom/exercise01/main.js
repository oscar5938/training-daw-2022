window.onload = function(e) {
    console.log('documento cargado')
    document.getElementsByTagName('h2')[1].innerText = "Titulo 2"
    let username = document.getElementById('username')
    console.log(username)
    
    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}
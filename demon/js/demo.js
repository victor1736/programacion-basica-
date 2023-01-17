let AtaqueJugador  
let AtaqueEnemigo
function iniciarJuego(){
let botonSeleccionarMascota = document.getElementById('boton-seleccionar-mascota')
botonSeleccionarMascota.addEventListener('click', SeleccionarMascotaJugador)

let BotonFuego = document.getElementById('boton-Fuego')
BotonFuego.addEventListener('click',ataqueFuego)
let BotonAgua = document.getElementById('boton-Agua')
BotonAgua.addEventListener('click',ataqueAgua)
let BotonTierra = document.getElementById('boton-Tierra')
BotonTierra.addEventListener('click',ataqueTierra)

}

function SeleccionarMascotaJugador(){
    let inputAlligator = document.getElementById('Alligator')
    let inputCow = document.getElementById('Cow')
    let inputPiton = document.getElementById('Piton')
    let inputGatosauros = document.getElementById('Gatosauros')
    let inputColibri = document.getElementById('Colibri')
    let inputPorcus = document.getElementById('Porcus')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputAlligator.checked ){
        spanMascotaJugador.innerHTML = 'Alligator'
    }
    else if (inputCow.checked ){
        spanMascotaJugador.innerHTML = 'Cow'
    }
   else if (inputPiton.checked ){
        spanMascotaJugador.innerHTML = 'Piton'
    }
    else if (inputGatosauros.checked ){
        spanMascotaJugador.innerHTML = 'Gatosauros'
    }
    else if (inputColibri.checked ){
        spanMascotaJugador.innerHTML = 'Colibri'
    }
    else if(inputPorcus.checked ){
        spanMascotaJugador.innerHTML = 'Porcus'
    }
    else {
        alert('Selecciona una mascota')
    }
    SeleccionarMascotaEnemigo()
}
function SeleccionarMascotaEnemigo(){
    let MascotaAleatorio = aleatorio(1,6)
    let spanMascotaJugadorEnemigo = document.getElementById('mascota-enemigo')
    if (MascotaAleatorio ==1 ){
        spanMascotaJugadorEnemigo.innerHTML = 'Alligator'
    }
     else if (MascotaAleatorio ==2 ){
        spanMascotaJugadorEnemigo.innerHTML = 'Cow'
    }
    else if (MascotaAleatorio ==3 ){
        spanMascotaJugadorEnemigo.innerHTML = 'Piton'
    }
    else if (MascotaAleatorio ==4 ){
        spanMascotaJugadorEnemigo.innerHTML = 'Gatosauros'
    }
    else if (MascotaAleatorio ==5 ){
        spanMascotaJugadorEnemigo.innerHTML = 'Colibri'
    }
    else if (MascotaAleatorio ==6 ){
        spanMascotaJugadorEnemigo.innerHTML = 'Porcus'
    }
}
function ataqueFuego(){
    AtaqueJugador = 'Fuego'
    AtaqueAleatorioEnemigo()
}
function ataqueAgua(){
    AtaqueJugador = 'Agua'
    AtaqueAleatorioEnemigo()
}
function ataqueTierra(){
    AtaqueJugador = 'Tierra'
    AtaqueAleatorioEnemigo()
}
function AtaqueAleatorioEnemigo(){
    let ataqueAletorio
    ataqueAletorio = aleatorio(1,3)
    if (ataqueAletorio == 1){
        AtaqueEnemigo = 'Fuego'
    }
    else if (ataqueAletorio == 2){
        AtaqueEnemigo = 'Agua'
    }
    else {
        AtaqueEnemigo = 'Tierra'
    }
    crearMensaje()
}
function crearMensaje (){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+AtaqueJugador + ' , las mascotas del enemigo ataco con ' + AtaqueEnemigo +  '- Pendiente 🥳'
    sectionMensajes.appendChild(parrafo)
}
function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load',iniciarJuego)
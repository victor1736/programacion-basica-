const sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
const sectionBotonReiniciar = document.getElementById('reiniciar')
const botonSeleccionarMascota = document.getElementById('boton-seleccionar-mascota')
const BotonFuego = document.getElementById('boton-Fuego')
const BotonAgua = document.getElementById('boton-Agua')
const BotonTierra = document.getElementById('boton-Tierra')
const botonReiniciar = document.getElementById('boton-Reiniciar')


const sectionElegirMascota =document.getElementById('Seleccionar-mascota')
const inputAlligator = document.getElementById('Alligator')
const inputCow = document.getElementById('Cow')
const inputPiton = document.getElementById('Piton')
const inputGatosauros = document.getElementById('Gatosauros')
const inputColibri = document.getElementById('Colibri')
const inputPorcus = document.getElementById('Porcus')
const spanMascotaJugador = document.getElementById('mascota-jugador')
   

const spanMascotaJugadorEnemigo = document.getElementById('mascota-enemigo')


const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const sectionReiniciar = document.getElementById('reiniciar')

let AtaqueJugador  
let AtaqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3



function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionBotonReiniciar.style.display = 'none'
    botonSeleccionarMascota.addEventListener('click', SeleccionarMascotaJugador)
    
    BotonFuego.addEventListener('click',ataqueFuego)
    BotonAgua.addEventListener('click',ataqueAgua)
    BotonTierra.addEventListener('click',ataqueTierra)

    botonReiniciar.addEventListener('click',reiniciarJuego)

}

function SeleccionarMascotaJugador(){

    sectionSeleccionarAtaque.style.display = 'flex'


    sectionElegirMascota.style.display = 'none'



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
    let ataqueAletorio = aleatorio(1,3)
     
    if (ataqueAletorio == 1){
        AtaqueEnemigo = 'Fuego'
    }
    else if (ataqueAletorio == 2){
        AtaqueEnemigo = 'Agua'
    }
    else {
        AtaqueEnemigo = 'Tierra'
    }
    combate()
}

function combate(){


    if (AtaqueEnemigo == AtaqueJugador){
        crearMensaje("Empate")
    }
    else if ((AtaqueJugador == 'Fuego' && AtaqueEnemigo =='Tierra') || (AtaqueJugador == 'Agua' && AtaqueEnemigo == 'Fuego') || (AtaqueJugador == 'Tierra' && AtaqueEnemigo == 'Agua') ){
        crearMensaje("Ganaste")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }
    else{
        crearMensaje("Perdiste")
        VidasJugador--
        spanVidasJugador.innerHTML = VidasJugador
    }
    revisarvidas()

}

function revisarvidas (){
    if (VidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones! Ganaste  (●'◡'●)")
        let sectionBotonReiniciar = document.getElementById('reiniciar')
        sectionBotonReiniciar.style.display = 'block'
    }
    else if (VidasJugador == 0){
       crearMensajeFinal("Lo siento Perdiste  (┬┬﹏┬┬)")
       let sectionBotonReiniciar = document.getElementById('reiniciar')
       sectionBotonReiniciar.style.display = 'block'
    }
}

function crearMensaje (resultado){


    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = AtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = AtaqueEnemigo

    /* let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ AtaqueJugador + ' , las mascotas del enemigo ataco con ' + AtaqueEnemigo + ' / ' + resultado */
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal){

    sectionMensajes.innerHTML = resultadoFinal

    BotonFuego.disabled = true
    BotonAgua.disabled = true
    BotonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load',iniciarJuego)
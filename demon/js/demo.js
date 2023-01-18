let AtaqueJugador  
let AtaqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3

function iniciarJuego(){
    let sectionSelecionarAtaque = document.getElementById('Selecionar-ataque')
    sectionSelecionarAtaque.style.display = 'none'
    
    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = 'none'

    let botonSeleccionarMascota = document.getElementById('boton-seleccionar-mascota')
    botonSeleccionarMascota.addEventListener('click', SeleccionarMascotaJugador)

    let BotonFuego = document.getElementById('boton-Fuego')
    BotonFuego.addEventListener('click',ataqueFuego)
    let BotonAgua = document.getElementById('boton-Agua')
    BotonAgua.addEventListener('click',ataqueAgua)
    let BotonTierra = document.getElementById('boton-Tierra')
    BotonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-Reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)

}

function SeleccionarMascotaJugador(){
    let sectionSelecionarAtaque = document.getElementById('Selecionar-ataque')
    sectionSelecionarAtaque.style.display = 'block'

    let sectionElegirMascota =document.getElementById('Selecionar - mascota')
    sectionElegirMascota.style.display = 'none'

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
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ AtaqueJugador + ' , las mascotas del enemigo ataco con ' + AtaqueEnemigo + ' / ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal (resultadoFianl){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFianl
    sectionMensajes.appendChild(parrafo)
    let BotonFuego = document.getElementById('boton-Fuego')
    BotonFuego.disabled = true
    let BotonAgua = document.getElementById('boton-Agua')
    BotonAgua.disabled = true
    let BotonTierra = document.getElementById('boton-Tierra')
    BotonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load',iniciarJuego)
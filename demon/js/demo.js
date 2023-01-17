function iniciarJuego(){
let botonSeleccionarMascota = document.getElementById('boton-seleccionar-mascota')
botonSeleccionarMascota.addEventListener('click', SeleccionarMascotaJugador)
}
function SeleccionarMascotaJugador(){
    let inputAlligator = document.getElementById('Alligator')
    let inputCow = document.getElementById('Cow')
    let inputPiton = document.getElementById('Piton')
    let inputGatosauros = document.getElementById('Gatosauros')
    let inputColibri = document.getElementById('Colibri')
    let inputPorcus = document.getElementById('Porcus')

    if (inputAlligator.checked ){
        alert('Usted elijio a  Alligator')
    }
    else if (inputCow.checked ){
        alert('Usted elijio a  Cow')
    }
   else if (inputPiton.checked ){
        alert('Usted elijio a  Piton')
    }
    else if (inputGatosauros.checked ){
        alert('Usted elijio a  Gatosauros')
    }
    else if (inputColibri.checked ){
        alert('Usted elijio a  Colibri')
    }
    else if(inputPorcus.checked ){
        alert('Usted elijio a  Porcus')
    }
    else {
        alert('Selecciona una mascota')
    }
}

window.addEventListener('load',iniciarJuego)
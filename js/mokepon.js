
let ataqueJugador 
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3


function IniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'


    let botonMascotaJugador= document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

 
    let botonAgua = document.getElementById('boton-agua');
        botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra= document.getElementById('boton-tierra');
        botonTierra.addEventListener('click', ataqueTierra)
    let botonFuego= document.getElementById('boton-fuego');
        botonFuego.addEventListener('click',ataqueFuego)

    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
  
}

function seleccionarMascotaJugador(){

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');

    let spanMascotaJugador = document.getElementById('mascota-jugador');
    if(inputHipodoge.checked ){
        //alert('SELECCIONASTE A TU MASCOTA HIPODOGE 💧')
        spanMascotaJugador.innerHTML='HIPODOGE 💧';
    }else if(inputCapipepo.checked){
        //alert('SELECCIONASTE A TU MASCOTA CAPIPEPO 🌱')
        spanMascotaJugador.innerHTML='CAPIPEPO 🌱';

    }else if(inputRatigueya.checked){
        //alert('SELECCIONASTE A TU MASCOTA RATIGUEYA 🔥')
        spanMascotaJugador.innerHTML='RATIGUEYA 🔥';

    }else{
        alert('NO HAZ SELECCIONADO A TU MASCOTA 😥')
        sectionSeleccionarMascota.style.display = 'flex'
        sectionSeleccionarAtaque.style.display = 'none'

    }
    seleccionarMascotaEnemigo();
}

function ataqueAleatorio(min, max){
    
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    let mascotaEnemigo = ataqueAleatorio(1,3);

    if(mascotaEnemigo == 1){
        spanMascotaEnemigo.innerHTML='HIPODOGE 💧';
    }else if(mascotaEnemigo == 2){
        spanMascotaEnemigo.innerHTML='CAPIPEPO 🌱';

    }else if(mascotaEnemigo==3){
        spanMascotaEnemigo.innerHTML='RATIGUEYA 🔥';
    }else{
        alert("Hay un error en el code")
    }
}

function crearMensaje(){
    let sectionMensaje = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

    
    //let notificacion = document.createElement('p') para no se creen nuevos()
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo

   // let parrafo = document.createElement('p')
    //parrafo.innerHTML = "Tu mascota atacó con "+ataqueJugador+" la mascota del enemigo atacó con "+ataqueEnemigo+" -->"+resultado;

    //sectionMensaje.appendChild(notificacion) ()
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function ataqueAgua(){
    ataqueJugador = 'AGUA';
    //alert(ataqueJugador)
    seleccionarAtaqueEnemigo();

}
function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    //alert(ataqueJugador)
    seleccionarAtaqueEnemigo();

}
function ataqueFuego(){
    ataqueJugador = 'FUEGO';
    //alert(ataqueJugador)
    seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo(){
    let ataqueAleatorioEnemigo = ataqueAleatorio(1,3);

    if(ataqueAleatorioEnemigo == 1){
        ataqueEnemigo ='AGUA';
    }else if(ataqueAleatorioEnemigo == 2){
        ataqueEnemigo ='TIERRA';

    }else if(ataqueAleatorioEnemigo==3){
        ataqueEnemigo ='FUEGO';
    }else{
        alert("Hay un error en el code")
    }

    combate();


}

function combate(){

        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")

        if( ataqueJugador== ataqueEnemigo){
            resultado = "¡EMPATE! 🤼";
        }else if(ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO"){
            resultado= "¡GANASTE! 🥳";
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        }else if(ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA"){
            resultado= "¡GANASTE! 🥳";
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        }else if(ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA"){
            resultado= "¡GANASTE! 🥳";
            vidasEnemigo--
            spanVidasEnemigo.innerHTML= vidasEnemigo;
        }else{
            resultado= "¡PERDISTE!😥";
            vidasJugador--

            spanVidasJugador.innerHTML= vidasJugador;
        }
        

        crearMensaje();

        revisarVidas();
}

function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
        
    }else if(vidasJugador==0)
    {crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById('resultado')
    //let contenido = document.createTextNode(resultadoFinal)
    //parrafo.innerHTML=resultadoFinal
    sectionMensajes.innerHTML = resultadoFinal
    //sectionMensajes.appendChild(contenido)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}
function reiniciarJuego(){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
    location.reload()
}

window.addEventListener('load', IniciarJuego)
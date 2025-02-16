const listaSecuencia = ["1","2","3","0"];
let nivel = 1;
let puntaje = 0;
let nombreUsuario = ''
var a1 = new Audio("a1.mp3");
var a2 = new Audio("a2.mp3");
var a3 = new Audio("a3.mp3");
var a4 = new Audio("a4.mp3");


function empezarJuego(){
    //document.getElementById("puntuacion").innerHTML = `Puntuaje: ${puntaje}`;
    nivel = 1;
    //listaSecuencia.length = 0; 
    puntaje = 0;
    rondas();

}

function rondas(){
    seguirSecuencia();
    demostracionSecuencia();
}

function seguirSecuencia(){
    listaSecuencia.push(Math.floor(Math.random() * 4));
}

function demostracionSecuencia(){
    let indice = 0
    const idIntervalo = setInterval(() => {
       sonidoYDestacar(listaSecuencia[indice]);
       indice++ ;
       if (i >= listaSecuencia.length){
        clearInterval(idIntervalo);
       }
    }, 1000);
}




async function sonidoYDestacar(color){
    const boton = document.querySelector(`[boton="${color}"]`);
    switch (color) {
        case "0":
            boton.style.backgroundColor = 'Crimson'
            a1.play();
            break;
        case "1":
            boton.style.backgroundColor = 'gold'
            a2.play();
            break;
        case "2":
            a3.play();
            boton.style.backgroundColor = 'blue'
            break;
        case "3":
            a4.play();
            boton.style.backgroundColor = 'DarkGreen'
            break;
    }
    await esperar(0.4);
    boton.attributes.removeNamedItem('style')


}

async function esperar(segundos) {
    return new Promise((resolve) => setTimeout(resolve, segundos * 1000));   
}

function alertaVacio(){
    var nombredeUsuario = document.getElementById("fname").value;
    if (nombredeUsuario == "") {
        alert("Por favor ponga un nombre");
    } else {
        nombreUsuario = nombredeUsuario;
        window.location = "game.html";
        empezarJuego();
       
    }
}

function presionar(boton){
    const numeroColor = boton.getAttribute("boton");
    sonidoYDestacar(numeroColor);
}

function verificacion(contador, color){
    if (listaSecuencia[contador] == color) {
        return true
    }else{
        return false
    }
}
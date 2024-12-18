
//Reproductor de musica

function playtrack(track) {
    var audio = document.getElementById('audioPlayer')
    audio.src = track;
    audio.play();
}

function audioPlay() {
    var audio = document.getElementById('audioPlayer')
    audio.play();
}

function audioPause() {
    var audio = document.getElementById('audioPlayer')
    audio.pause();
}

function audioStop() {
    var audio = document.getElementById('audioPlayer')
    audio.src = audio.src;
}

//Cuenta atrás ofertas

let fechaFinal = new Date("Dec 18, 2024 12:55:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();
    let distancia = fechaFinal - now;

    //calcular dias, horas, min y seg
    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    //insertamos el reloj
    document.getElementById("cuentaatras").innerHTML = dias + "d "+ horas + "h "+ minutos + "m "+ segundos + "s ";
    if (distancia<0){
        fechaFinal += 604800000;
    }
    

},1000);


function playtrack(track) {
    var audio = document.getElementById('audioPlayer')
    audio.src = track;
    audio.play();
}

function audioPlay() {
    var audio = document.getElementById('audioPlayer')
    audio.play();
}

function audioPause(){
    var audio = document.getElementById('audioPlayer')
    audio.pause();
}

function audioStop(){
    var audio = document.getElementById('audioPlayer')
    audio.src = audio.src;
    audio.play();
    audio.pause();
}
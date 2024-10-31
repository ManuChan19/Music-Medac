

function playtrack(track) {
    var audio = document.getElementById('audioPlayer')
    audio.src = track;
    audio.play();
}
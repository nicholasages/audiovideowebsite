const video = document.getElementById('video1');
const audio = document.getElementById('audio1');
document.getElementById('start').addEventListener('click', () => {
    playPause();
});

let playing = false;

function playPause() {
    if (playing) {
        video.pause();
        audio.pause();
    } else {
        video.play();
        audio.play();
    }
    playing = !playing;
}


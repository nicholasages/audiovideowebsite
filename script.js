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

const video2 = document.getElementById('video2');
const audio2 = document.getElementById('audio2');
document.getElementById('start2').addEventListener('click', () => {
    playPause2();
});

let playing2 = false;

function playPause2() {
    if (playing) {
        video2.pause();
        audio2.pause();
    } else {
        video2.play();
        audio2.play();
    }
    playing2 = !playing2;
}

const video3 = document.getElementById('video3');
const audio3 = document.getElementById('audio3');
document.getElementById('start3').addEventListener('click', () => {
    playPause3();
});

let playing3 = false;

function playPause3() {
    if (playing) {
        video3.pause();
        audio3.pause();
    } else {
        video3.play();
        audio3.play();
    }
    playing3 = !playing3;
}


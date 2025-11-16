/* Danh sách nền */
let backgrounds = [
    "images/background1.jpg",
    "images/background2.jpg",
    "images/background3.jpg"
];
let bgIndex = 0;

/* Đổi nền */
function changeBackground() {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    document.getElementById("content").style.backgroundImage =
        `url('${backgrounds[bgIndex]}')`;
}

/* Bật / Tắt nhạc */
function toggleMusic() {
    let music = document.getElementById("bgMusic");
    if (music.paused) music.play();
    else music.pause();
}
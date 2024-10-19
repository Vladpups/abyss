// scripts/script.js

const videos = document.querySelectorAll('.bg-video');
const backgroundAudio = document.getElementById('background-audio');
let currentIndex = 0;
let soundEnabled = false; // По умолчанию звук выключен

function changeBackground() {
    videos.forEach((video, index) => {
        if (index === currentIndex) {
            video.classList.add('active');
            video.play();  // Воспроизведение текущего видео
        } else {
            video.classList.remove('active');
            video.pause();  // Остановка предыдущего видео
            video.currentTime = 0;  // Возвращение к началу
        }
    });
    currentIndex = (currentIndex + 1) % videos.length;
}

// Начальное воспроизведение видео
changeBackground(); // Вызываем сразу, чтобы первое видео воспроизводилось сразу

setInterval(changeBackground, 5000);  // Каждые 10 секунд меняем фон

// Логика для кнопки звука
const soundButton = document.getElementById('es-staticnoise-btn');
soundButton.addEventListener('click', function() {
    soundEnabled = !soundEnabled; // Переключаем состояние звука

    videos.forEach(video => {
        video.muted = !soundEnabled; // Включаем или выключаем звук для всех видео
    });

    // Включаем или выключаем фоновую музыку
    if (soundEnabled) {
        backgroundAudio.play();
        soundButton.textContent = 'Mute Sound';
    } else {
        backgroundAudio.pause();
        soundButton.textContent = 'Allow Sound';
    }
});

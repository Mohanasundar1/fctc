// script.js
document.addEventListener('DOMContentLoaded', () => {
    const darkModeBtn = document.querySelector('.dark-mode');
    const lightModeBtn = document.querySelector('.light-mode');
    const body = document.body;

    darkModeBtn.addEventListener('click', () => {
        body.style.backgroundColor = '#2b2b2b';
        body.style.color = '#fff';
        darkModeBtn.classList.add('active');
        lightModeBtn.classList.remove('active');
    });

    lightModeBtn.addEventListener('click', () => {
        body.style.backgroundColor = '#f5f5f5';
        body.style.color = '#000';
        lightModeBtn.classList.add('active');
        darkModeBtn.classList.remove('active');
    });

    const colorButtons = document.querySelectorAll('.theme-color .color');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Apply the selected color to the theme
            window.location.href="web.html";
        });
    });

    const coverButtons = document.querySelectorAll('.theme-cover .cover');
    coverButtons.forEach(button => {
        button.addEventListener('click', () => {
            coverButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Apply the selected cover
        });
    });
});

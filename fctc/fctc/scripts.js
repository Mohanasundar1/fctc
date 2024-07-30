document.addEventListener('DOMContentLoaded', function() {
    // Apply fade-in effect to the main content
    document.querySelector('main').classList.add('fade-in');

    // Apply slide-in effect to the header and footer
    document.querySelector('header').classList.add('slide-in-left');
    document.querySelector('footer').classList.add('slide-in-left');

    // Apply scale-up effect to login and register forms on page load
    document.querySelector('.login-form').classList.add('scale-up');
    document.querySelector('.register-form').classList.add('scale-up');

    // Button animation when clicked
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            button.classList.add('bounce');
            setTimeout(() => button.classList.remove('bounce'), 1000); // Remove animation class after 1 second
        });
    });

    // Mobile and Email Verification Code Button Timer
    let mobileTimer = 60;
    let emailTimer = 60;

    function startTimer(timerId, buttonId) {
        let interval = setInterval(function() {
            if (timerId > 0) {
                timerId--;
                document.getElementById(buttonId).textContent = `${timerId}s`;
            } else {
                clearInterval(interval);
                document.getElementById(buttonId).textContent = '60s';
                timerId = 60; // Reset timer
            }
        }, 1000);
    }

    document.getElementById('send-mobile-code').addEventListener('click', function() {
        startTimer(mobileTimer, 'mobile-timer');
    });

    document.getElementById('send-email-code').addEventListener('click', function() {
        startTimer(emailTimer, 'email-timer');
    });
});

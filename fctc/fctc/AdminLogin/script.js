// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Example form data logging
        console.log('Username:', username);
        console.log('Password:', password);

        // Simulate successful login
        alert('Login successful!');
        
        // Here you can send form data to the server
        // For example, using fetch:
        /*
        fetch('/login-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => {
            if (response.ok) {
                alert('Login successful!');
                // Redirect to admin dashboard
                window.location.href = '/admin-dashboard';
            } else {
                alert('Login failed!');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Login failed!');
        });
        */
    });
});

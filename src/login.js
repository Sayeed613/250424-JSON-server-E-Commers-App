const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form submission

    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    if (!userEmail || !userPassword) {
        alert('Please enter your email and password.');
        return;
    }

    const userData = {
        email: userEmail,
        password: userPassword
    };

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        window.location.href = './products.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed. Please check your credentials and try again.');
    }
});

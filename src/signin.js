const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    if (!userName || !userEmail || !userPassword) {
        alert('Please fill in all fields');
        return;
    }

    const newUser = {
        name: userName,
        email: userEmail,
        password: userPassword
    };

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            const data = await response.json();
            window.location.href = '../login.html';
        } else {
            const errorData = await response.json();
            alert(`Sign Up failed: ${errorData.message}`);
        }
    } catch (error) {
        alert('Sign Up failed. Please try again.');
        console.error('Error:', error);
    }
});

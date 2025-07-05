document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', (event) => {
        // Prevent the form from actually submitting
        event.preventDefault();

        // Hide previous messages
        messageContainer.style.display = 'none';
        messageContainer.textContent = '';
        messageContainer.className = '';

        const email = emailInput.value;
        const password = passwordInput.value;

        // Simple Acceptance Criteria
        // 1. Email must contain '@'
        // 2. Password must be at least 8 characters long
        if (email.includes('@') && password.length >= 8) {
            // Success
            messageContainer.textContent = 'Login successful!';
            messageContainer.className = 'success';
            messageContainer.style.display = 'block';
        } else {
            // Failure
            messageContainer.textContent = 'Invalid email or password. Password must be 8+ characters.';
            messageContainer.className = 'error';
            messageContainer.style.display = 'block';
        }
    });
});

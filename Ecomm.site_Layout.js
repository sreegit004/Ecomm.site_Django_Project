// Auth Modal Functions
function openAuthModal(type) {
    const modal = document.getElementById('authModal');
    modal.style.display = 'block';
    
    if (type === 'login') {
        switchToLogin();
    } else if (type === 'register') {
        switchToRegister();
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.style.display = 'none';
}

function switchToLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function switchToRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeAuthModal();
    }
}

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    // Contact form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (name && name.value.trim() === '') {
                alert('Please enter your name');
                e.preventDefault();
                return false;
            }
            
            if (email && email.value.trim() === '') {
                alert('Please enter your email');
                e.preventDefault();
                return false;
            }
            
            if (message && message.value.trim() === '') {
                alert('Please enter a message');
                e.preventDefault();
                return false;
            }
        });
    }
});

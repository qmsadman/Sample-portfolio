// Simple Beginner JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Open/Close Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle menu button label
            if (navLinks.classList.contains('active')) {
                navToggle.textContent = 'Close';
            } else {
                navToggle.textContent = 'Menu';
            }
        });
    }

    // 2. Simple Form Submission Response
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent default form loading
            event.preventDefault();

            // Get user inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');

            // Show confirmation message
            formFeedback.textContent = "Thank you, " + nameInput.value + "! Your message has been sent successfully.";
            formFeedback.style.display = "block";

            // Reset form input boxes
            contactForm.reset();
        });
    }
});

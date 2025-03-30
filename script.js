document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 300); // Staggered fade-in
    });

    // Contact form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Simulate form submission
            const responseDiv = document.getElementById('form-response');
            responseDiv.classList.remove('hidden');
            responseDiv.textContent = 'Thank you for your message!';
            
            // Clear form fields
            form.reset();
        });
    }
});

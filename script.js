// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Hamburger Menu Toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Smooth Scroll Effect
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Smooth scrolling
function scrollToSection() {
    document.getElementById("scroll").scrollIntoView({
        behavior: "smooth"
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add animation on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.benefit-card, .info-card, .stakeholder-image, .stakeholder-text');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = element.classList.contains('benefit-card') || element.classList.contains('info-card') 
                ? 'translateY(0)' 
                : 'translateX(0)';
        }
    });
};

// Set initial state for animation elements
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.benefit-card, .info-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelectorAll('.stakeholder-image').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelectorAll('.stakeholder-text').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = '#fff';
        }
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-level');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const level = skillLevel.getAttribute('data-level');
                skillLevel.style.width = level + '%';
            }
        });
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name.length < 2) {
            alert('Please enter a valid name');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (message.length < 10) {
            alert('Please enter a message with at least 10 characters');
            return;
        }
        
        // Show success modal
        modal.style.display = 'block';
        
        // Reset form
        contactForm.reset();
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Contact button in hero section
    const contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Simple typing effect for hero section
    const heroText = document.querySelector('.hero-content p');
    const originalText = heroText.textContent;
    let index = 0;
    
    function typeText() {
        if (index < originalText.length) {
            heroText.textContent = originalText.slice(0, index + 1);
            index++;
            setTimeout(typeText, 100);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(function() {
        heroText.textContent = '';
        index = 0;
        typeText();
    }, 1000);
    
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add some hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
});
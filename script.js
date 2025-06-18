document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click handler for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-light');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default only for buttons that don't have href
            if (this.tagName === 'A') return;
            
            e.preventDefault();
            console.log('Button clicked:', this.textContent.trim());
            // Add your custom button click logic here
        });
    });

    // Add animation to logos on hover
    const logos = document.querySelectorAll('.logos img');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add animation to card on scroll
    const card = document.querySelector('.card');
    if (card) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    }
});

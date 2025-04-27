document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // Add animation to club cards on scroll
    const clubCards = document.querySelectorAll('.club-card');
    
    const animateOnScroll = () => {
        clubCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.05}s`;
            }
        });
    };
    
    // Check on initial load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .club-card {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});
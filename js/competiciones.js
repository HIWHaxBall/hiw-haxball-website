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
    
    // Add animation to competition section on scroll
    const competitionSection = document.querySelector('.competition-section');
    
    const animateOnScroll = () => {
        const sectionPosition = competitionSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            competitionSection.style.animation = 'fadeInUp 0.8s ease forwards';
        }
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
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .competition-section {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});
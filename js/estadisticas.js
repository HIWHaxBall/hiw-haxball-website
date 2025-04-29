// Stats tab functionality
function openStatsTab(tabName) {
    // Hide all stats tab contents
    document.querySelectorAll('.stats-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all stats tab buttons
    document.querySelectorAll('.stats-tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show the selected stats tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}

// Initialize first tab as active
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.stats-tab-button').click();
});
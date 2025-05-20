// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Kikaboo Ventures website loaded');
    
    // Add smooth fade-in animation to the content
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s ease-in';
    
    // Trigger the fade-in animation
    requestAnimationFrame(() => {
        container.style.opacity = '1';
    });
});

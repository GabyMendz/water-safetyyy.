
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const buttons = document.querySelectorAll('.dropdown-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            // Toggle the display of the dropdown content
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Fade-in effect for images
    const images = document.querySelectorAll('.fade-in-js');
    images.forEach((img) => {
        img.style.opacity = 0; // Start hidden
        img.style.transition = "opacity 1s"; // Set transition for opacity
        img.style.opacity = 1; // Fade in to fully visible
    });
});

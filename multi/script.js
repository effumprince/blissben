document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });
    
    // Close menu when clicking on links (mobile)
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navigation.classList.remove('active');
            }
        });
    });
});
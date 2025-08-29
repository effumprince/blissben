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




const Iconsimage = document.querySelectorAll('.main-box');

Iconsimage.forEach (i => {
i.addEventListener('mouseover', () => {
i.querySelector('i').style.transform = 'scale(1.1)';
});


i.addEventListener('mouseout', () => {
    i.querySelector('i').style.transform = 'scale(1)';
});

});


const Iconsimages = document.querySelectorAll('.main-box');

Iconsimages.forEach (svg => {
svg.addEventListener('mouseover', () => {
svg.querySelector('svg').style.transform = 'scale(1.1)';
});


svg.addEventListener('mouseout', () => {
    svg.querySelector('svg').style.transform = 'scaleY(1)';
});

});


  AOS.init();



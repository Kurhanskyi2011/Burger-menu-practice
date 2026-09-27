const burgerBtn = document.querySelector('.nav-actions .nav-actions-item:nth-child(4)'); 
const burgerMenu = document.querySelector('.burger-menu'); 
const lightboxClose = document.querySelector('.lightbox-close'); 

    burgerBtn.addEventListener('click', function() { 
        burgerMenu.style.display = 'block'; 
    }); 


    lightboxClose.addEventListener('click', function() { 
        burgerMenu.style.display = 'none'; 
    });


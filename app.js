document.addEventListener('DOMContentLoaded', function () {

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop, 
            behavior: 'smooth' 
        });
    });
});

document.querySelectorAll('.lightbox').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('href');
        const lightboxDiv = document.createElement('div');
        lightboxDiv.classList.add('lightbox-overlay');
        lightboxDiv.innerHTML = `<img src="${imgSrc}" alt="Full-size photo">`;
        document.body.appendChild(lightboxDiv);

        lightboxDiv.addEventListener('click', function() {
            lightboxDiv.remove();
        });
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    currentSlide = (currentSlide + 1) % totalSlides;
}

setInterval(showSlide, 5000);

});
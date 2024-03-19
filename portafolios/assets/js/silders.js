const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');
let currentSlide = 0;


function showSlide(n, animationName) {
    slides[currentSlide].classList.remove("activo");
    slides[currentSlide].style.animationName = "abajoarriba";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("activo");
    slides[currentSlide].style.animationName = animationName;
}

function nextSlide() {
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    showSlide(currentSlide + 1 - 1 + 1, randomAnimation);
}

function prevSlide() {
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    showSlide(currentSlide - 1, randomAnimation);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

showSlide(currentSlide, "");
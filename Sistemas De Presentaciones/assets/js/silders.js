const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');
let currentSlide = 0;

const animations = [
    "adentroparaafuera",
    "arribaabajo",
    "abajoarriba",
    "afueraparaadentro",
    "delado",
    "deladoinvertido",
    "rotacion90",
    "rotacion90inver",
    "rotacionescalada",
    "rotacionescaladainvertida"
];

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


// var intervalo = setInterval(nextSlide, 5000);

function prevSlide() {
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    showSlide(currentSlide - 1, randomAnimation);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

showSlide(currentSlide, "");
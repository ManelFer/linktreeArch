function flipCard() {
    document.getElementById('flip-card').classList.toggle('flip');
}

// Carousel behavior
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const slides = document.querySelectorAll('.carousel-track img');
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
function flipCard(){
    document.getElementById('flip-card').classList.toggle('flip');
}

window.addEventListener('resize', updateCarousel);
// Carrossel automático
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 3000);



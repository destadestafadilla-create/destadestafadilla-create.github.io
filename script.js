let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const navItems = document.querySelectorAll('.nav-item');

// Fungsi untuk berpindah slide berdasarkan index
function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    if(navItems[currentSlide]) navItems[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    if(navItems[currentSlide]) navItems[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Navigasi menggunakan keyboard (Panah Kiri & Kanan)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});
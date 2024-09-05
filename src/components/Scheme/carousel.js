// Store the currentIndex and interval globally for easy access
let currentIndex = 0;
let interval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel__slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    // slides[currentIndex].scrollIntoView({ behavior: 'smooth' });
}

export function nextSlide() {
    showSlide(currentIndex + 1);
}

export function prevSlide() {
    showSlide(currentIndex - 1);
}

export function initializeCarousel() {
    const slideInterval = 3000; // Change slide every 3 seconds
    showSlide(currentIndex);
    interval = setInterval(nextSlide, slideInterval);
}

export function clearCarousel() {
    if (interval) {
        clearInterval(interval);
    }
}

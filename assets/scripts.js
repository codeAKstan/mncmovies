const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const closeBtn = document.querySelector('.close-btn');

// Show navigation menu
menuToggle.addEventListener('click', () => {
    navigation.style.top = '0%';
});

// Hide navigation menu
closeBtn.addEventListener('click', () => {
    navigation.style.top = '-100%';
});


const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideCount = slides.length;

let currentIndex = 0;
let slideInterval;

// Function to update the slider position
function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Function to move to the next slide
function showNextSlide() {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSlider();
}

// Function to move to the previous slide
function showPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideCount - 1; // Loop to the last slide
    }
    updateSlider();
}

// Function to start auto-slide
function startAutoSlide() {
    slideInterval = setInterval(showNextSlide, 5000); // Slide every 5 seconds
}

// Function to stop auto-slide
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    showNextSlide();
    stopAutoSlide(); // Stop and restart auto-slide
    startAutoSlide();
});

prevButton.addEventListener('click', () => {
    showPrevSlide();
    stopAutoSlide(); // Stop and restart auto-slide
    startAutoSlide();
});

// Adjust the slider when the window is resized
window.addEventListener('resize', updateSlider);

// Initialize the slider
updateSlider();
startAutoSlide();


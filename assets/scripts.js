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
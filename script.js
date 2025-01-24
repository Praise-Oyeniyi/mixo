const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;


document.querySelector('.menu').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-open');
});

function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

let autoSlideInterval = setInterval(nextSlide, 3000);

nextBtn.addEventListener('click', () => {
    nextSlide();
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
});





const faqItems = document.querySelectorAll('.faq-item');
    
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const toggleContent = item.querySelector('.faq-toggle');
        
        toggleContent.style.display = 
            toggleContent.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelector('.mixo-video-inner').addEventListener('click', function() {
    const videoContainer = this;
    const videoId = 'Lvz8Uuvlrw0'; 
    
    videoContainer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
        ></iframe>
    `;
});


const colorButton = document.querySelector('.f-icon-pallete');
const root = document.documentElement;

const colors = [
    '--body-bg-primary', // Added initial background
    '--primary',          // Added initial primary color
    '--secondary', 
    '--tetiary', 
    '--black', 
    '--pink'
];

let currentColorIndex = 0;

colorButton.addEventListener('click', () => {
    // Get next color in sequence
    const currentColor = colors[currentColorIndex];
    const newPrimaryColor = getComputedStyle(root).getPropertyValue(currentColor).trim();
    
    // Set the new primary color
    root.style.setProperty('--primary', newPrimaryColor);
    localStorage.setItem('customPrimaryColor', newPrimaryColor);
    
    // Update page background with a gradient using the new primary color
    const newBackground = `linear-gradient(45deg, ${newPrimaryColor}, ${newPrimaryColor})`;
    root.style.setProperty('--body-bg-primary', newBackground);
    localStorage.setItem('customBackgroundColor', newBackground);
    
    // Move to next color index, wrapping around to start if needed
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    localStorage.setItem('currentColorIndex', currentColorIndex);
});

// Restore state on page load
window.addEventListener('load', () => {
    const savedPrimaryColor = localStorage.getItem('customPrimaryColor');
    const savedBackgroundColor = localStorage.getItem('customBackgroundColor');
    const savedColorIndex = localStorage.getItem('currentColorIndex');
    
    if (savedPrimaryColor) {
        root.style.setProperty('--primary', savedPrimaryColor);
    }
    
    if (savedBackgroundColor) {
        root.style.setProperty('--body-bg-primary', savedBackgroundColor);
    }
    
    if (savedColorIndex !== null) {
        currentColorIndex = parseInt(savedColorIndex);
    }
});
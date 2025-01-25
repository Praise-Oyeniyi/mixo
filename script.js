const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;

const colorCycleBtn = document.querySelector('.f-icon-pallete');
        
const backgroundColors = [
    '#20e4b4',   
    '#ffffff',   
    '#000000',   
    '#e04270',  
    'linear-gradient(45deg, hsl(210, 25%, 20%), hsl(209, 25%, 30%))' 
];

const primaryColors = [
    '#20e4b4',   
    '#ffffff',   
    '#000000',   
    '#e04270',   
    '#263340'    
];

let currentColorIndex = 0;

function applyColorStyles(index) {
    const logoImg = document.querySelector('.logo-img');
    const sliderItems = document.querySelectorAll('.items-img');

    document.documentElement.style.setProperty('--tetiary', '#ffffff');
    sliderItems.forEach((e)=>{
        e.style.filter = 'invert(0)';
    }) 
    logoImg.style.filter = 'invert(0)';
    
    switch(backgroundColors[index]) {
        case '#ffffff':
            document.documentElement.style.setProperty('--tetiary', '#000000');
            document.documentElement.style.setProperty('--hero-img', '#ffffff');
            logoImg.style.filter = 'invert(1)';
            sliderItems.forEach((e)=>{
                e.style.filter = 'invert(1) brightness(0)';
            }) 
            break;
        case '#20e4b4':
            logoImg.style.filter = 'invert(1)';
            document.documentElement.style.setProperty('--secondary', '#ffffff');
            document.documentElement.style.setProperty('--tetiary', '#263340');
            document.documentElement.style.setProperty('--hero-img', '#fff');
            break;
        case '#000000':
            document.documentElement.style.setProperty('--secondary', '#e04270');
            document.documentElement.style.setProperty('--hero-img', 'hsl(343 72% 57%)');
            sliderItems.forEach((e)=>{
                e.style.filter = 'invert(1) brightness(200%)';
            }) 
            break;
        case '#e04270':
            logoImg.style.filter = 'invert(1)';
            document.documentElement.style.setProperty('--tetiary', '#263340');
            document.documentElement.style.setProperty('--hero-img', '#fff');
            break;
        case 'linear-gradient(45deg, hsl(210, 25%, 20%), hsl(209, 25%, 30%))':
            sliderItems.forEach((e)=>{
                e.style.filter = 'invert(1) brightness(200%)';
            }) 
            break;
        default:
            logoImg.style.filter = 'invert(100%) brightness(200%)'; 
    }
}

colorCycleBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    
    document.documentElement.style.setProperty('--body', backgroundColors[currentColorIndex]);
    document.documentElement.style.setProperty('--primary', primaryColors[currentColorIndex]);
    
    applyColorStyles(currentColorIndex);
    
    localStorage.setItem('currentBackgroundColor', currentColorIndex);
    localStorage.setItem('currentPrimaryColor', primaryColors[currentColorIndex]);
});

// Initialization on page load
window.addEventListener('load', () => {
    const savedColorIndex = localStorage.getItem('currentBackgroundColor');
    const savedPrimaryColor = localStorage.getItem('currentPrimaryColor');

    if (savedColorIndex !== null) {
        currentColorIndex = parseInt(savedColorIndex);
        document.body.style.background = backgroundColors[currentColorIndex];
        
        if (savedPrimaryColor) {
            document.documentElement.style.setProperty('--body', backgroundColors[currentColorIndex]);
            document.documentElement.style.setProperty('--primary', savedPrimaryColor);
            applyColorStyles(currentColorIndex);
        }
    }
});




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



document.addEventListener('DOMContentLoaded', () => {
    const updateSliderActive = () => {
        document.querySelectorAll('.info-slider-inner .items-box').forEach(item => {
            item.classList.remove('slider-active');
        });

        const fromSelect = document.getElementById('from-select');
        const toSelect = document.getElementById('to-select');
        
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;

        document.querySelectorAll('.info-slider-inner .items-box').forEach(item => {
            const itemText = item.querySelector('h4').textContent.trim();
            if (itemText === fromValue || itemText === toValue) {
                item.classList.add('slider-active');
            }
        });
    };

    const fromSelect = document.getElementById('from-select');
    const toSelect = document.getElementById('to-select');
    
    fromSelect.addEventListener('change', updateSliderActive);
    toSelect.addEventListener('change', updateSliderActive);

    updateSliderActive();
});
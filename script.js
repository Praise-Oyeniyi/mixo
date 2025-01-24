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
        
        // If it's currently visible, hide it; if hidden, show it
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
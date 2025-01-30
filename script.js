

document.addEventListener('DOMContentLoaded', () => {
// hero section slider function
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalSlides = slides.length;




// sidebar script
    document.querySelector('.ham-outer').addEventListener('click', function() {
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
    
    
    
    
    // faq items toggling script
    const faqItems = document.querySelectorAll('.faq-item');
        
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const toggleContent = item.querySelector('.faq-toggle');
            
            toggleContent.style.display = 
                toggleContent.style.display === 'block' ? 'none' : 'block';
        });
    });
    

    // youtube video preview and display
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
    



    // convert section-- the two select script to change the color of selected icons
    const updateSliderActive = () => {
        // Reset all active states and colors
        document.querySelectorAll('.info-slider-inner .items-box').forEach(item => {
            item.classList.remove('slider-active');
        });
        document.querySelectorAll('select option').forEach((e) => {
            e.style.color = 'var(--tetiary)';
        });
    
        const fromSelect = document.getElementById('from-select');
        const toSelect = document.getElementById('to-select');
        
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;
    
        // Update active states and colors based on selections
        document.querySelectorAll('.info-slider-inner .items-box').forEach(item => {
            const itemText = item.querySelector('h4').textContent.trim();
            if (itemText === fromValue || itemText === toValue) {
                item.classList.add('slider-active');
                document.querySelectorAll('select option').forEach((e) => {
                    if (e.value === fromValue || e.value === toValue) {
                        e.style.color = 'rgb(168, 168, 168)';
                    }
                });
            }
        });
    };
    
    // Initialize select elements
    const fromSelect = document.getElementById('from-select');
    const toSelect = document.getElementById('to-select');
    
    // Add change event listeners to selects
    fromSelect.addEventListener('change', updateSliderActive);
    toSelect.addEventListener('change', updateSliderActive);
    
    // Create ripple effect and handle selection logic
    document.querySelectorAll('.items-box svg').forEach(svg => {
        svg.addEventListener('click', function(e) {
            // Handle ripple effect
            const ripple = this.cloneNode(true);
            ripple.classList.add('ripple');
            
            const parentBox = this.closest('.items-box');
            const rect = this.getBoundingClientRect();
            const parentRect = parentBox.getBoundingClientRect();
            
            ripple.style.position = 'absolute';
            ripple.style.left = (rect.left - parentRect.left) + 'px';
            ripple.style.top = (rect.top - parentRect.top) + 'px';
            ripple.style.width = rect.width + 'px';
            ripple.style.height = rect.height + 'px';
            
            parentBox.appendChild(ripple);
            
            ripple.addEventListener('animationend', function() {
                ripple.remove();
            });
    
            // Handle selection logic
            const selectedText = parentBox.querySelector('h4').textContent.trim();
            const currentFromValue = fromSelect.value;
    
            if (currentFromValue === '') {
                // If 'from' is empty, set it
                fromSelect.value = selectedText;
            } else if (selectedText !== currentFromValue) {
                // If clicking a different item, move current 'from' to 'to' and set new 'from'
                toSelect.value = currentFromValue;
                fromSelect.value = selectedText;
            }
    
            // Update active states
            updateSliderActive();
        });
    });
    
    // Initial update
    updateSliderActive();
});



// script to update the website pallete
const backgroundColors = [
    'linear-gradient(45deg, hsl(168, 78%, 51%), hsl(168, 78%, 51%)',   
    'linear-gradient(45deg, #fff, #fff)',   
    'linear-gradient(45deg, hsl(0, 0%, 0%), hsl(0, 0%, 5%))',   
    'linear-gradient(45deg, hsl(343, 72%, 57%), hsl(343, 72%, 57%))',  
    'linear-gradient(45deg, hsl(210, 25%, 20%), hsl(209, 25%, 30%))' 
];

const primaryColors = [
    '#20e4b4',   
    '#ffffff',   
    '#000000',   
    '#e04270',   
    '#263340'    
];


const colorCycleBtn = document.querySelector('.f-icon-pallete');

let currentColorIndex = 0;

function applyColorStyles(index) {

    document.documentElement.style.setProperty('--tetiary', '#ffffff');
    document.documentElement.style.setProperty('--secondary', '#20e4b4');
    // document.documentElement.style.setProperty('--pink', '#e04270');
    // document.documentElement.style.setProperty('--primary', '#263340');
    
    switch(backgroundColors[index]) {
        case 'linear-gradient(45deg, #fff, #fff)':
            document.documentElement.style.setProperty('--tetiary', '#000000');
            document.documentElement.style.setProperty('--hero-img', '#ffffff');
            break;
        case 'linear-gradient(45deg, hsl(168, 78%, 51%), hsl(168, 78%, 51%)':
            document.documentElement.style.setProperty('--secondary', '#ffffff');
            document.documentElement.style.setProperty('--tetiary', '#263340');
            document.documentElement.style.setProperty('--hero-img', '#fff');
            break;
        case 'linear-gradient(45deg, hsl(0, 0%, 0%), hsl(0, 0%, 5%))':
            document.documentElement.style.setProperty('--secondary', '#e04270');
            document.documentElement.style.setProperty('--hero-img', 'hsl(343 72% 57%)');
            break;
        case 'linear-gradient(45deg, hsl(343, 72%, 57%), hsl(343, 72%, 57%))':
            document.documentElement.style.setProperty('--tetiary', '#263340');
            document.documentElement.style.setProperty('--hero-img', '#fff');
            break;
        case 'linear-gradient(45deg, hsl(210, 25%, 20%), hsl(209, 25%, 30%))':
            document.documentElement.style.setProperty('--tetiary', '#ffffff');
            document.documentElement.style.setProperty('--secondary', '#20e4b4');
            break;
        default:
            document.documentElement.style.setProperty('--tetiary', '#ffffff');
            document.documentElement.style.setProperty('--secondary', '#20e4b4');
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


window.addEventListener('load', () => {
    const savedColorIndex = localStorage.getItem('currentBackgroundColor');
    const savedPrimaryColor = localStorage.getItem('currentPrimaryColor');

    if (savedColorIndex !== null) {
        currentColorIndex = parseInt(savedColorIndex);
        // document.body.style.background = backgroundColors[currentColorIndex];
        
        if (savedPrimaryColor) {
            document.documentElement.style.setProperty('--body', backgroundColors[currentColorIndex]);
            document.documentElement.style.setProperty('--primary', savedPrimaryColor);
            applyColorStyles(currentColorIndex);
        }
    }
});

// script for toggling live chat
const liveChat = document.querySelector('.live-chat');
    const chatIcon = document.querySelector('.f-icon-chat');
    const closeChatIcon = document.querySelector('.lc-top-inner svg');

    // Toggle chat visibility when chat icon is clicked
    chatIcon.addEventListener('click', () => {
        liveChat.classList.add('show');
    });

    // Hide chat when close icon is clicked
    closeChatIcon.addEventListener('click', () => {
        liveChat.classList.remove('show');
    });


// search modal script 
const modal = document.querySelector('.s-modal');
const searchTrigger = document.querySelector('.search');
const closeBtn = document.querySelector('.search-close');

function toggleModal() {
    if (modal.style.display !== 'block') {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    } else {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

// Open modal on search trigger click
searchTrigger.addEventListener('click', toggleModal);

// Close modal when clicking outside or on close button
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeBtn) {
        toggleModal();
    }
});

// Keyboard shortcut (Ctrl + K)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        toggleModal();
    }
});
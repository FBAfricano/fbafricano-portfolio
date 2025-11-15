// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.link a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = 'var(--accent)';
        link.style.backgroundColor = 'rgba(0, 173, 181, 0.2)';
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and containers
document.querySelectorAll('.about-container, .skills-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Console greeting
console.log('%c Welcome to Franz Benjamin Africano\'s Portfolio! ', 'background: #00ADB5; color: #222831; font-size: 16px; padding: 10px;');
console.log('%c CS0037 TN42 Midterm Project ', 'background: #393E46; color: #EEEEEE; font-size: 12px; padding: 5px;');

// Image hover effects
document.querySelectorAll('.home-left img, .profile-pic img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Skills icon animation
document.querySelectorAll('#cpp, #java, #py, #php').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.2) rotate(5deg)';
        }
    });
    
    skill.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Card hover effects
document.querySelectorAll('.education, .work-experience').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 20px rgba(0, 173, 181, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Back to top functionality (optional)
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 173, 181, 0.4);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
    
    document.body.appendChild(button);
};

// Initialize back to top button
createBackToTopButton();

// Print page information
console.log('%c Page loaded successfully! ', 'background: #00ADB5; color: white; padding: 5px; border-radius: 3px;');
console.log('Current page:', window.location.pathname);
console.log('Viewport:', window.innerWidth + 'x' + window.innerHeight);

// Certification Effects
// Certifications Cards Animations and Interactions

// Initialize certifications page
document.addEventListener('DOMContentLoaded', function() {
    initCertificationCards();
    setupCardInteractions();
    setupFilterAnimation();
});

// Initialize certification cards with enhanced features
function initCertificationCards() {
    const cards = document.querySelectorAll('.cert-card');
    
    // Add index to each card for staggered animations
    cards.forEach((card, index) => {
        card.setAttribute('data-index', index);
        
        // Add random gradient variations to cover images
        const coverImage = card.querySelector('.cert-cover-image');
        const gradients = [
            'linear-gradient(135deg, var(--accent), #0088a3, #006b7a)',
            'linear-gradient(135deg, #00ADB5, #00d4dd, #00a3b5)',
            'linear-gradient(135deg, #006b7a, var(--accent), #0088a3)',
            'linear-gradient(135deg, #0088a3, #00ADB5, #00d4dd)'
        ];
        if (coverImage) {
            coverImage.style.background = gradients[index % gradients.length];
        }
    });
    
    console.log(`Initialized ${cards.length} certification cards`);
}

// Setup interactive card behaviors
function setupCardInteractions() {
    const cards = document.querySelectorAll('.cert-card');
    
    cards.forEach(card => {
        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', handleCardTilt);
        card.addEventListener('mouseleave', resetCardTilt);
        
        // Click to expand (optional feature)
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
}

// Handle card tilt effect on mouse move
function handleCardTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
}

// Reset card tilt when mouse leaves
function resetCardTilt(e) {
    const card = e.currentTarget;
    card.style.transform = '';
}

// Setup filter animation for tags
function setupFilterAnimation() {
    const tags = document.querySelectorAll('.cert-tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            
            // Add ripple effect
            createRipple(e, this);
        });
    });
}

// Create ripple effect on tag click
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation to styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Observe all certification cards
document.querySelectorAll('.cert-card').forEach(card => {
    observer.observe(card);
});

// Badge pulse animation on hover
document.querySelectorAll('.cert-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease';
    });
    
    badge.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.15);
        }
    }
`;
document.head.appendChild(pulseStyle);

// Log initialization
console.log('%c Certifications Cards Loaded! ', 'background: #00ADB5; color: white; padding: 5px; border-radius: 3px;');
console.log('Features: Card tilt, hover effects, tag filtering ready');

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const cards = Array.from(document.querySelectorAll('.cert-card'));
    const focusedCard = document.activeElement;
    const currentIndex = cards.indexOf(focusedCard);
    
    if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
        cards[currentIndex + 1].focus();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        cards[currentIndex - 1].focus();
    }
});

// Make cards focusable for accessibility
document.querySelectorAll('.cert-card').forEach(card => {
    card.setAttribute('tabindex', '0');
});


// Skills Effects
// Carousel functionality for skills page
const carousels = {}; // This object will be populated dynamically with each carousel's state.

// Initialize all carousels by dynamically finding them and counting their slides
function initCarousels() {
    // Select all carousel containers to identify each category
    const skillCategories = document.querySelectorAll('.skill-category');

    skillCategories.forEach(categoryElement => {
        const slides = categoryElement.querySelector('.carousel-slides');
        
        // Ensure the element was found before proceeding
        if (slides && slides.id) {
            const category = slides.id.replace('-slides', '');
            const totalSlides = slides.children.length;

            // Only initialize if there are slides to show
            if (totalSlides > 0) {
                carousels[category] = {
                    currentSlide: 0,
                    totalSlides: totalSlides // Use the actual number of slides found in the HTML
                };
                
                // Now create the correct number of indicators and update the view
                createIndicators(category);
                updateCarousel(category);
            }
        }
    });
}


// Create indicator dots for each carousel
function createIndicators(category) {
    const indicatorContainer = document.getElementById(`${category}-indicators`);
    // Clear any existing indicators before creating new ones
    if (indicatorContainer) {
        indicatorContainer.innerHTML = ''; 
        const total = carousels[category].totalSlides;
        
        for (let i = 0; i < total; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.onclick = () => goToSlide(category, i);
            indicatorContainer.appendChild(indicator);
        }
    }
}

// Move to next or previous slide
function moveSlide(category, direction) {
    const carousel = carousels[category];
    if (!carousel) return; // Guard against errors if carousel isn't initialized

    carousel.currentSlide += direction;
    
    // Loop back to start/end
    if (carousel.currentSlide < 0) {
        carousel.currentSlide = carousel.totalSlides - 1;
    } else if (carousel.currentSlide >= carousel.totalSlides) {
        carousel.currentSlide = 0;
    }
    
    updateCarousel(category);
}

// Jump to specific slide
function goToSlide(category, index) {
    const carousel = carousels[category];
    if (!carousel) return;

    carousel.currentSlide = index;
    updateCarousel(category);
}

// Update carousel position and indicators
function updateCarousel(category) {
    const carousel = carousels[category];
    if (!carousel) return;

    const slides = document.getElementById(`${category}-slides`);
    const indicators = document.querySelectorAll(`#${category}-indicators .indicator`);
    const currentSlide = carousel.currentSlide;
    
    if (slides) {
        // Move slides
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Initialize carousels when the DOM is ready
document.addEventListener('DOMContentLoaded', initCarousels);


// Auto-advance carousels every 5 seconds (optional)
let autoAdvanceInterval = setInterval(() => {
    Object.keys(carousels).forEach(category => {
        moveSlide(category, 1);
    });
}, 5000);

// Pause auto-advance when user hovers over carousel
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        clearInterval(autoAdvanceInterval);
    });
    
    category.addEventListener('mouseleave', () => {
        autoAdvanceInterval = setInterval(() => {
            Object.keys(carousels).forEach(cat => {
                moveSlide(cat, 1);
            });
        }, 5000);
    });
});

// Keyboard navigation (left/right arrows)
document.addEventListener('keydown', (e) => {
    // Check if the skills section is visible to avoid hijacking keys on other pages
    if (document.querySelector('.skills-carousel')) {
        if (e.key === 'ArrowLeft') {
            Object.keys(carousels).forEach(category => {
                moveSlide(category, -1);
            });
        } else if (e.key === 'ArrowRight') {
            Object.keys(carousels).forEach(category => {
                moveSlide(category, 1);
            });
        }
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(wrapper);
    }, { passive: true });
});

function handleSwipe(wrapper) {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    // Find which carousel this wrapper belongs to
    const slidesDiv = wrapper.querySelector('.carousel-slides');
    if (!slidesDiv) return;

    const categoryId = slidesDiv.id.replace('-slides', '');
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            moveSlide(categoryId, 1);
        } else {
            // Swipe right - previous slide
            moveSlide(categoryId, 1);
        }
    }
}

/* =========================================
   PROJECT PAGE CAROUSEL LOGIC
   ========================================= */

// This function will initialize *only* the project carousel 
// if it's on the current page.
function initProjectCarousel() {
    const projectSlides = document.getElementById('project-slides');
    if (!projectSlides) {
        return; // Not on a project page, so do nothing
    }

    const category = 'project'; // We'll use 'project' as the key
    const totalSlides = projectSlides.children.length;

    if (totalSlides > 0) {
        // Register this carousel in the main 'carousels' object
        carousels[category] = {
            currentSlide: 0,
            totalSlides: totalSlides
        };
        
        // Create indicators and update the view
        createIndicators(category);
        updateCarousel(category);
        
        console.log('Project carousel initialized!');
        
        // Stop the auto-advance interval from the skills carousel
        // if it's running, as it's not needed here.
        if (typeof autoAdvanceInterval !== 'undefined') {
            clearInterval(autoAdvanceInterval);
        }
    }
}

// We need to modify the DOMContentLoaded event listener
// to call BOTH initCarousels() (for skills) AND initProjectCarousel()
// We'll wrap them in a new DOM listener.
//
// IMPORTANT: Find your existing listener that looks like:
// document.addEventListener('DOMContentLoaded', initCarousels);
//
// ...and REPLACE it with this one:
//
document.addEventListener('DOMContentLoaded', function() {
    initCarousels(); // This initializes the skills carousels
    initProjectCarousel(); // This initializes the project carousel (if present)
});


console.log('%c Skills Carousel Loaded and Fixed! ', 'background: #00ADB5; color: white; padding: 5px; border-radius: 3px;');
console.log('Carousel logic is now dynamic and counts slides correctly.');
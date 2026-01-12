/**
 * XZELLERATE - Marketing Consulting Website
 * Interactive JavaScript for modern user experience
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initScrollIndicator();
});

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Highlight active nav link based on section
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');

        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignore empty anchors
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe other sections
    const revealElements = document.querySelectorAll('.about-content, .contact-content');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ============================================
// SCROLL INDICATOR
// ============================================

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate API call (replace with actual form submission to Jason@XZELLERATE.com)
            // In production, integrate with a backend service or use Formspree/Netlify Forms
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you soon!', 'success');
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                // Log form data (in production, this would be sent to Jason@XZELLERATE.com)
                console.log('Form submitted with data:', formData);
                console.log('Form should be submitted to: Jason@XZELLERATE.com');
            }, 1500);
        });
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '400px',
        fontWeight: '500'
    });

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .notification-icon {
            font-weight: bold;
            font-size: 1.25rem;
        }
    `;
    document.head.appendChild(style);

    // Add to page
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 5000);
}

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    updateCounter();
}

// Observe stats and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');

                if (!isNaN(number)) {
                    stat.textContent = '0' + suffix;
                    setTimeout(() => {
                        let current = 0;
                        const increment = number / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= number) {
                                stat.textContent = number + suffix;
                                clearInterval(timer);
                            } else {
                                stat.textContent = Math.ceil(current) + suffix;
                            }
                        }, 30);
                    }, 200);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');

        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Console welcome message
console.log(
    '%c🚀 Welcome to Xzellerate! ',
    'background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;'
);
console.log(
    '%cInterested in working together? Contact us at Jason@XZELLERATE.com',
    'color: #2563eb; font-size: 14px; padding: 5px 0;'
);
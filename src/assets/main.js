/* ===========================
   SHAAHI MAHALL — NAVBAR JS
   =========================== */
document.addEventListener('DOMContentLoaded', function() { 

    /* ----------------------------
       SMOOTH SCROLL UTILITY
       Uses manual animation — works in ALL browsers regardless of
       scroll-behavior CSS on html/body
    ----------------------------- */
    function smoothScrollTo(targetY, duration) {
        duration = duration || 700;
        const startY = window.scrollY;
        const diff = targetY - startY;
        let startTime = null;

        function easeInOutCubic(t) {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startY + diff * ease);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    /* ----------------------------
       LIVE CLOCK (Norway time)
    ----------------------------- */
    function updateTime() {
        const timeEl = document.getElementById('current-time');
        if (!timeEl) return;
        const now = new Date();
        timeEl.textContent = now.toLocaleTimeString('en-GB', {
            timeZone: 'Europe/Oslo',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    updateTime();
    setInterval(updateTime, 1000);

    /* ----------------------------
       OPEN STATUS DOT
    ----------------------------- */
    function updateOpenStatus() {
        const dot = document.querySelector('.status-dot');
        if (!dot) return;
        const now = new Date();
        const total = now.getHours() * 60 + now.getMinutes();
        dot.classList.toggle('open', total >= 14 * 60 && total < 22 * 60);
    }
    updateOpenStatus();

    /* ----------------------------
       MOBILE MENU TOGGLE
    ----------------------------- */
/* ---- MOBILE MENU ---- */
const menuToggle  = document.getElementById('menuToggle');
const mobileMenu  = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const menuOverlay  = document.getElementById('menuOverlay');

function openMobileMenu() {
    menuToggle.classList.add('open');
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('active');
    // slight delay so display:block kicks in before opacity transition
    requestAnimationFrame(() => menuOverlay.classList.add('visible'));
    document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeMobileMenu() {
    menuToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('visible');
    document.body.style.overflow = '';
    // wait for overlay fade then hide it
    menuOverlay.addEventListener('transitionend', () => {
        menuOverlay.classList.remove('active');
    }, { once: true });
}

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
    });
}

if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
if (menuOverlay)  menuOverlay.addEventListener('click', closeMobileMenu);

// Smooth scroll + close on nav link click
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            closeMobileMenu();
            const target = document.querySelector(href);
            if (target) {
                // wait for menu slide-out before scrolling
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 380); // matches transition duration
            }
        } else {
            closeMobileMenu();
        }
    });
});

// Close on scroll (optional — remove if you don't want this)
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768 && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
    }
}, { passive: true });
    /* ----------------------------
       SMOOTH SCROLL — ALL NAV LINKS
       Desktop + Mobile
    ----------------------------- */
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#') || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            closeMobileMenu();

            // Wait a tiny bit for mobile menu close animation
            setTimeout(() => {
                const header = document.querySelector('.header');
                const offset = header ? header.offsetHeight + 16 : 100;
                const targetY = target.getBoundingClientRect().top + window.scrollY - offset;
                smoothScrollTo(targetY, 700);
            }, 50);
        });
    });


    /* ----------------------------
       CART MODAL — origin animation
    ----------------------------- */
    const cartModal = document.getElementById('cartModal');
    const cartClose = document.getElementById('cartClose');
    const cartIcons = document.querySelectorAll('.cart-icon, .cart-icon-mobile');

    function openCart(triggerEl) {
        if (!cartModal) return;
        cartModal.classList.remove('animate-out');
        cartModal.classList.add('open');

        if (triggerEl) {
            triggerEl.classList.add('cart-active');
            setTimeout(() => triggerEl.classList.remove('cart-active'), 450);
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                cartModal.classList.add('animate-in');
            });
        });

        closeMobileMenu();
    }

    function closeCart() {
        if (!cartModal) return;
        cartModal.classList.remove('animate-in');
        cartModal.classList.add('animate-out');
        cartModal.style.background = 'rgba(0,0,0,0)';
        cartModal.style.backdropFilter = 'blur(0px)';

        setTimeout(() => {
            cartModal.classList.remove('open', 'animate-out');
            cartModal.style.background = '';
            cartModal.style.backdropFilter = '';
        }, 300);
    }

    cartIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            cartModal && cartModal.classList.contains('open') ? closeCart() : openCart(icon);
        });
    });

    if (cartClose) cartClose.addEventListener('click', closeCart);

    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) closeCart();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartModal && cartModal.classList.contains('open')) {
            closeCart();
        }
    });

    /* ----------------------------
       LANGUAGE SWITCHER
    ----------------------------- */
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const switcher = btn.closest('.lang-switcher');
            if (switcher) {
                switcher.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    /* ----------------------------
       MOVE TO TOP BUTTON — smooth
    ----------------------------- */
    const moveTopBtn = document.getElementById('moveTopBtn');

    if (moveTopBtn) {
        window.addEventListener('scroll', () => {
            moveTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        }, { passive: true });

        moveTopBtn.addEventListener('click', () => {
            smoothScrollTo(0, 700);
        });
    }

    /* ----------------------------
       SCROLL FADE-IN ANIMATIONS
    ----------------------------- */
    const animateSelectors = [
        '.section-title',
        '.about-image',
        '.about-content',
        '.celebrate-header',
        '.card',
        '.celebrate-action',
        '.hours-title',
        '.hours-container',
        '.contact-title',
        '.contact-block',
        '.contact-map',
        '.footer-col',
        '.badge',
        '.catering-title',
        '.catering-text',
        '.hours-item',
    ];

    document.querySelectorAll(animateSelectors.join(', ')).forEach((el) => {
        if (el.closest('.hero')) return;

        el.classList.add('scroll-animate');

        const staggerMap = {
            'card':          0.12,
            'footer-col':    0.10,
            'contact-block': 0.15,
            'hours-item':    0.07,
        };

        for (const [cls, delay] of Object.entries(staggerMap)) {
            if (el.classList.contains(cls)) {
                const siblings = [...el.parentElement.children].filter(c => c.classList.contains(cls));
                const idx = siblings.indexOf(el);
                el.style.transitionDelay = `${idx * delay}s`;
            }
        }
    });

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.scroll-animate').forEach(el => scrollObserver.observe(el));

});
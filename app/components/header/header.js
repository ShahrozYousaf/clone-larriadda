import { Component, Inject, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { APP_CONFIG } from '../../app.config';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/general";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
const _c0 = ["alertCart"];
const _c1 = a0 => ["/", a0, "home"];
const _c2 = a0 => ["/", a0, "menu"];
const _c3 = a0 => ["/", a0, "checkout"];
const _forTrack0 = ($index, $item) => $item.quotationd_id;
function Header_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.languageService.t(ctx_r0.lang, "open"), " - ");
} }
function Header_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.languageService.t(ctx_r0.lang, "closed"), " - ");
} }
function Header_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.openedMessage, " ");
} }
function Header_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} }
function Header_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.general.calculate_totalcartitems());
} }
function Header_Conditional_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.general.calculate_totalcartitems());
} }
function Header_Conditional_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 58);
    i0.ɵɵelement(2, "circle", 32)(3, "circle", 33)(4, "path", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.languageService.t(ctx_r0.lang, "cartbody"));
} }
function Header_Conditional_98_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "div", 64)(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 65);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 66)(8, "button", 67);
    i0.ɵɵlistener("click", function Header_Conditional_98_For_4_Template_button_click_8_listener() { const record_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.change_cartitemqty(-1, record_r3.qty, record_r3.item_id, record_r3.quotationd_id)); });
    i0.ɵɵtext(9, " - ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 67);
    i0.ɵɵlistener("click", function Header_Conditional_98_For_4_Template_button_click_12_listener() { const record_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.change_cartitemqty(1, record_r3.qty, record_r3.item_id, record_r3.quotationd_id)); });
    i0.ɵɵtext(13, " + ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "button", 68);
    i0.ɵɵlistener("click", function Header_Conditional_98_For_4_Template_button_click_17_listener() { const record_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.delete_cartitem(record_r3.quotationd_id)); });
    i0.ɵɵtext(18, " \uD83D\uDDD1 ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(record_r3.item_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.currency_symbol, " ", i0.ɵɵpipeBind2(6, 6, record_r3.fnetprice, "1.2-2"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(record_r3.qty);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" @ ", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.currency_symbol, " ", i0.ɵɵpipeBind2(16, 9, record_r3.fnetprice / record_r3.qty, "1.2-2"), "/pcs ");
} }
function Header_Conditional_98_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "div", 59, 0);
    i0.ɵɵrepeaterCreate(3, Header_Conditional_98_For_4_Template, 19, 12, "div", 60, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 61)(6, "div", 62)(7, "span");
    i0.ɵɵtext(8, "Subtotal:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 63)(13, "a", 21);
    i0.ɵɵtext(14, "Proceed to Checkout");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.general.cartitems_list);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.branch_currencysymbol, ". ", i0.ɵɵpipeBind2(11, 3, ctx_r0.general.calculate_totalcartamount(), "1.2-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c3, ctx_r0.lang));
} }
function Header_Conditional_124_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵelement(1, "div", 69);
    i0.ɵɵelementEnd();
} }
export class Header {
    config;
    router;
    general;
    http;
    cdr;
    alertCart;
    activeLoader = false;
    opened = false;
    openedMessage = '';
    route = inject(ActivatedRoute);
    languageService = inject(LanguageService);
    lang = this.languageService.getLangFromRoute(this.route);
    constructor(config, router, general, http, cdr) {
        this.config = config;
        this.router = router;
        this.general = general;
        this.http = http;
        this.cdr = cdr;
        const currentDateTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Oslo' }));
        const days = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday'
        ];
        const currentDayName = days[currentDateTime.getDay()];
        const timeRecord = this.config.timeing[currentDayName];
        if (timeRecord && timeRecord?.isClosed) {
            this.opened = false;
            if (timeRecord?.ClosedMessage) {
                this.openedMessage = timeRecord.ClosedMessage;
            }
            else {
                this.openedMessage = this.languageService.t(this.lang, 'closed');
            }
        }
        else {
            const year = currentDateTime.getFullYear();
            const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
            const day = String(currentDateTime.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            let fromDateTime = new Date(`${year}-${month}-${day}T` + (timeRecord?.open ? timeRecord.open : `00:00:00`));
            let toDateTime = new Date(`${year}-${month}-${day}T` + (timeRecord?.open ? timeRecord.close : `00:00:00`));
            if (fromDateTime <= currentDateTime && toDateTime >= currentDateTime) {
                this.opened = true;
            }
            else {
                this.opened = false;
                /*
                let from_hours = String(fromDateTime.getHours()).padStart(2, '0');
                let from_minutes = String(fromDateTime.getMinutes()).padStart(2, '0');
                let to_hours = String(toDateTime.getHours()).padStart(2, '0');
                let to_minutes = String(toDateTime.getMinutes()).padStart(2, '0');
                this.openedMessage = `${from_hours}:${from_minutes} - ${to_hours}:${to_minutes}`;
                */
            }
        }
    }
    ngAfterViewInit() {
        this.initJsSetup();
    }
    changeLanguage(lang) {
        const segments = this.router.url.split('/');
        segments[1] = lang;
        const newUrl = segments.join('/');
        window.location.href = newUrl;
    }
    persistCartItems() {
        localStorage.setItem('cartitems_list', JSON.stringify(this.general.cartitems_list));
    }
    initJsSetup() {
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
                if (!startTime)
                    startTime = timestamp;
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
           MOBILE MENU TOGGLE
        ----------------------------- */
        /* ---- MOBILE MENU ---- */
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenuBtn = document.getElementById('closeMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        if (!menuToggle || !mobileMenu || !menuOverlay)
            return;
        const openMobileMenu = () => {
            menuToggle.classList.add('open');
            mobileMenu.classList.add('open');
            menuOverlay.classList.add('active');
            requestAnimationFrame(() => {
                menuOverlay.classList.add('visible');
            });
            document.body.style.overflow = 'hidden';
        };
        const closeMobileMenu = () => {
            menuToggle.classList.remove('open');
            mobileMenu.classList.remove('open');
            menuOverlay.classList.remove('visible');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (!mobileMenu.classList.contains('open')) {
                    menuOverlay.classList.remove('active');
                }
            }, 380);
        };
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.contains('open')
                ? closeMobileMenu()
                : openMobileMenu();
        });
        closeMenuBtn?.addEventListener('click', closeMobileMenu);
        menuOverlay.addEventListener('click', closeMobileMenu);
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
                }
                else {
                    closeMobileMenu();
                }
            });
        });
        /* ----------------------------
           SMOOTH SCROLL — ALL NAV LINKS
           Desktop + Mobile
        ----------------------------- */
        document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || !href.startsWith('#') || href === '#')
                    return;
                const target = document.querySelector(href);
                if (!target)
                    return;
                e.preventDefault();
                closeMobileMenu();
                // Wait a tiny bit for mobile menu close animation
                setTimeout(() => {
                    const header = document.querySelector('.header');
                    const offset = header instanceof HTMLElement ? header.offsetHeight + 16 : 100;
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
            if (!cartModal)
                return;
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
            if (!cartModal)
                return;
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
        if (cartClose)
            cartClose.addEventListener('click', closeCart);
        if (cartModal) {
            cartModal.addEventListener('click', (e) => {
                if (e.target === cartModal)
                    closeCart();
            });
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cartModal && cartModal.classList.contains('open')) {
                closeCart();
            }
        });
        /* ----------------------------
           LIVE CLOCK (Norway time)
        ----------------------------- */
        function updateTime() {
            const timeEl = document.getElementById('current-time');
            if (!timeEl)
                return;
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
        /* ---------------------------
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
            if (el.closest('.hero'))
                return;
            el.classList.add('scroll-animate');
            const staggerMap = {
                'card': 0.12,
                'footer-col': 0.10,
                'contact-block': 0.15,
                'hours-item': 0.07,
            };
            for (const [cls, delay] of Object.entries(staggerMap)) {
                if (el.classList.contains(cls) && el.parentElement) {
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
    }
    async change_cartitemqty(_cQty, _aQty, _item_id, _quotationd_id) {
        let _fQty = parseInt(_cQty.toString()) + parseInt(_aQty.toString());
        if (_fQty == 0) {
            this.delete_cartitem(_quotationd_id);
        }
        else {
            this.activeLoader = true;
            const formData = new FormData();
            formData.append('branch_id', this.config.branch_id);
            formData.append('active_walkingcustomerapp', '1');
            formData.append('config_walkingcustomerappsignature', '1');
            formData.append('quotation_deliverytype', '2');
            formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
            formData.append('lang', this.lang);
            formData.append('changecartqty_active', '1');
            formData.append('changecartqty_itemid', _item_id);
            formData.append('changecartqty_quotationdid', _quotationd_id);
            formData.append('changecartqty_qty', _cQty.toString());
            formData.append('changecartqty_fqty', _fQty.toString());
            this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
                this.activeLoader = false;
                this.general.updateReponse(response);
                this.cdr.detectChanges();
            }, error => {
                this.activeLoader = false;
                console.log(error);
                console.log(error.error);
                if (error.error.messagedetail == undefined) {
                    this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
                }
                else {
                    this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
                }
            });
        }
    }
    delete_cartitem(quotationd_id) {
        this.activeLoader = true;
        const formData = new FormData();
        formData.append('branch_id', this.config.branch_id);
        formData.append('active_walkingcustomerapp', '1');
        formData.append('config_walkingcustomerappsignature', '1');
        formData.append('quotation_deliverytype', '2');
        formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
        formData.append('lang', this.lang);
        formData.append('cart', '1');
        formData.append('delete_quotationdid', '1');
        formData.append('quotationd_id', quotationd_id);
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.activeLoader = false;
            this.general.updateReponse(response);
            this.cdr.detectChanges();
        }, error => {
            this.activeLoader = false;
            console.log(error);
            console.log(error.error);
            if (error.error.messagedetail == undefined) {
                this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
            }
            else {
                this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
            }
        });
    }
    static ɵfac = function Header_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Header)(i0.ɵɵdirectiveInject(APP_CONFIG), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.General), i0.ɵɵdirectiveInject(i3.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Header, selectors: [["app-header"]], viewQuery: function Header_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.alertCart = _t.first);
        } }, decls: 125, vars: 51, consts: [["alertCart", ""], [1, "header"], [1, "top-bar"], [1, "top-bar-left"], [1, "status-dot"], [1, "status-text"], ["id", "current-time"], [1, "top-bar-right"], [1, "ticker-track"], [1, "contact-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon-phone"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "icon-location"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "main-nav"], [1, "logo"], ["src", "./images/shahilogo.webp", "alt", "logo", "width", "100px", "height", "70px"], [1, "nav-links"], [3, "routerLink"], ["href", "#about"], ["routerLinkActive", "active", 3, "routerLink"], ["href", "#party-room"], ["href", "#catering"], [1, "nav-actions"], [1, "lang-switcher", "desktop-lang"], ["data-lang", "no", "title", "Norwegian", 1, "flag-btn", 3, "click"], ["src", "https://flagcdn.com/w40/no.png", "alt", "Norwegian"], ["data-lang", "en", "title", "English", 1, "flag-btn", 3, "click"], ["src", "https://flagcdn.com/w40/gb.png", "alt", "English"], [1, "cart-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1.5"], ["cx", "20", "cy", "21", "r", "1.5"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], [1, "cart-count"], ["href", "https://order.foodsted.com/en/porder/1130/shaahi-mahall-indisk-restaurant/cart?booktable=active", "target", "_blank", 1, "btn-book"], [1, "mobile-nav-controls"], [1, "lang-switcher"], ["title", "Norwegian", 1, "flag-btn", 3, "click"], ["src", "https://flagcdn.com/w40/no.png", "alt", "NO"], ["title", "English", 1, "flag-btn", 3, "click"], ["src", "https://flagcdn.com/w40/gb.png", "alt", "EN"], ["href", "#", 1, "cart-icon-mobile"], ["id", "menuToggle", "aria-label", "Toggle menu", 1, "mobile-menu-toggle"], ["id", "cartModal", 1, "cart-modal-overlay"], [1, "cart-box"], [1, "cart-header"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["id", "cartClose", "aria-label", "Close cart", 1, "cart-close"], [1, "cart-body"], [1, "cart-empty"], ["id", "menuOverlay", 1, "menu-overlay"], ["id", "mobileMenu", 1, "mobile-menu"], ["id", "closeMenu", 1, "close-menu"], [1, "mobile-nav-links"], ["href", "https://order.foodsted.com/en/porder/1130/shaahi-mahall-indisk-restaurant/cart?booktable=active", "target", "_blank", 1, "btn-book", "btn-book-mobile"], ["id", "loaderOverlay", 1, "loader-overlay"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "gInfoBlock", 2, "padding", "0"], [1, "cart-item"], [1, "cart-footer"], [1, "subtotal"], [1, "checkout-btn"], [1, "item-info"], [1, "item-price"], [1, "qty-box"], [3, "click"], [1, "remove-item", 3, "click"], [1, "loader"]], template: function Header_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 1)(1, "div", 2)(2, "div", 3);
            i0.ɵɵelement(3, "span", 4);
            i0.ɵɵelementStart(4, "span", 5);
            i0.ɵɵconditionalCreate(5, Header_Conditional_5_Template, 1, 1);
            i0.ɵɵconditionalCreate(6, Header_Conditional_6_Template, 1, 1);
            i0.ɵɵconditionalCreate(7, Header_Conditional_7_Template, 1, 1)(8, Header_Conditional_8_Template, 1, 0, "span", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(12, "svg", 10);
            i0.ɵɵelement(13, "path", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "51668082");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(17, "svg", 12);
            i0.ɵɵelement(18, "path", 13)(19, "circle", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "span");
            i0.ɵɵtext(21, "Mauritz Kartevoldsplass 1, 4306, Sandnes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(23, "svg", 10);
            i0.ɵɵelement(24, "path", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26, "51668082");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(28, "svg", 12);
            i0.ɵɵelement(29, "path", 13)(30, "circle", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(31, "span");
            i0.ɵɵtext(32, "Mauritz Kartevoldsplass 1, 4306, Sandnes");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(33, "nav", 15)(34, "div", 16);
            i0.ɵɵelement(35, "img", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "ul", 18)(37, "li")(38, "a", 19);
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "li")(41, "a", 20);
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "li")(44, "a", 21);
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "li")(47, "a", 21);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "li")(50, "a", 22);
            i0.ɵɵtext(51);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "li")(53, "a", 23);
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "div", 24)(56, "div", 25)(57, "button", 26);
            i0.ɵɵlistener("click", function Header_Template_button_click_57_listener() { return ctx.changeLanguage("no"); });
            i0.ɵɵelement(58, "img", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "button", 28);
            i0.ɵɵlistener("click", function Header_Template_button_click_59_listener() { return ctx.changeLanguage("en"); });
            i0.ɵɵelement(60, "img", 29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "a", 30);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(62, "svg", 31);
            i0.ɵɵelement(63, "circle", 32)(64, "circle", 33)(65, "path", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(66, Header_Conditional_66_Template, 2, 1, "span", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(67, "a", 36);
            i0.ɵɵtext(68);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "div", 37)(70, "div", 38)(71, "button", 39);
            i0.ɵɵlistener("click", function Header_Template_button_click_71_listener() { return ctx.changeLanguage("no"); });
            i0.ɵɵelement(72, "img", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "button", 41);
            i0.ɵɵlistener("click", function Header_Template_button_click_73_listener() { return ctx.changeLanguage("en"); });
            i0.ɵɵelement(74, "img", 42);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "a", 43);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(76, "svg", 31);
            i0.ɵɵelement(77, "circle", 32)(78, "circle", 33)(79, "path", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(80, Header_Conditional_80_Template, 2, 1, "span", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(81, "button", 44);
            i0.ɵɵelement(82, "span")(83, "span")(84, "span");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(85, "div", 45)(86, "div", 46)(87, "div", 47)(88, "h3");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(89, "svg", 48);
            i0.ɵɵelement(90, "circle", 32)(91, "circle", 33)(92, "path", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(93);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(94, "button", 49);
            i0.ɵɵtext(95, " \u00D7 ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "div", 50);
            i0.ɵɵconditionalCreate(97, Header_Conditional_97_Template, 7, 1, "div", 51)(98, Header_Conditional_98_Template, 15, 8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(99, "div", 52)(100, "div", 53)(101, "button", 54);
            i0.ɵɵtext(102, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "ul", 55)(104, "li")(105, "a", 19);
            i0.ɵɵtext(106);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(107, "li")(108, "a", 20);
            i0.ɵɵtext(109);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(110, "li")(111, "a", 21);
            i0.ɵɵtext(112);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(113, "li")(114, "a", 21);
            i0.ɵɵtext(115);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(116, "li")(117, "a", 22);
            i0.ɵɵtext(118);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(119, "li")(120, "a", 23);
            i0.ɵɵtext(121);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(122, "a", 56);
            i0.ɵɵtext(123);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(124, Header_Conditional_124_Template, 2, 0, "div", 57);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("open", ctx.opened);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.opened ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.opened ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.openedMessage ? 7 : 8);
            i0.ɵɵadvance(31);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(39, _c1, ctx.lang));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "home"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "about"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(41, _c2, ctx.lang));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "menu"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(43, _c2, ctx.lang));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "takeaway"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "partyroom"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "catering"));
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.lang == "no");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.lang == "en");
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.general.calculate_totalcartitems() > 0 ? 66 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "booktable"));
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.lang == "no");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.lang == "en");
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.general.calculate_totalcartitems() > 0 ? 80 : -1);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate2(" ", ctx.languageService.t(ctx.lang, "cart"), " (", ctx.general.calculate_totalcartitems(), ") ");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.general.cartitems_list.length === 0 ? 97 : 98);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(45, _c1, ctx.lang));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "home"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "about"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(47, _c2, ctx.lang));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "menu"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(49, _c2, ctx.lang));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "takeaway"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "partyroom"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "catering"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "booktable"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeLoader ? 124 : -1);
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i4.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Header, [{
        type: Component,
        args: [{ selector: 'app-header', imports: [RouterLink, RouterLinkActive, CommonModule], template: "<header class=\"header\">\n    <div class=\"top-bar\">\n        <div class=\"top-bar-left\">\n            <span class=\"status-dot\" [class.open]=\"opened\"></span>\n            <span class=\"status-text\">\n                @if (opened) {\n                {{ this.languageService.t(this.lang, 'open') }} -\n                }\n                @if (!opened) {\n                {{ this.languageService.t(this.lang, 'closed') }} -\n                }\n                @if (openedMessage) {\n                {{ openedMessage }}\n                } @else {\n                <span id=\"current-time\"></span>\n                }\n            </span>\n        </div>\n        <div class=\"top-bar-right\">\n            <div class=\"ticker-track\">\n                <div class=\"contact-item\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\" class=\"icon-phone\">\n                        <path\n                            d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\">\n                        </path>\n                    </svg>\n                    <span>51668082</span>\n                </div>\n                <div class=\"contact-item\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\" class=\"icon-location\">\n                        <path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path>\n                        <circle cx=\"12\" cy=\"10\" r=\"3\"></circle>\n                    </svg>\n                    <span>Mauritz Kartevoldsplass 1, 4306, Sandnes</span>\n                </div>\n\n                <div class=\"contact-item\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\" class=\"icon-phone\">\n                        <path\n                            d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\">\n                        </path>\n                    </svg>\n                    <span>51668082</span>\n                </div>\n                <div class=\"contact-item\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\" class=\"icon-location\">\n                        <path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path>\n                        <circle cx=\"12\" cy=\"10\" r=\"3\"></circle>\n                    </svg>\n                    <span>Mauritz Kartevoldsplass 1, 4306, Sandnes</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <nav class=\"main-nav\">\n        <div class=\"logo\">\n            <img src=\"./images/shahilogo.webp\" alt=\"logo\" width=\"100px\" height=\"70px\">\n        </div>\n\n        <ul class=\"nav-links\">\n            <li><a [routerLink]=\"['/', lang, 'home']\">{{ languageService.t(lang, 'home') }}</a></li>\n            <li><a href=\"#about\">{{ languageService.t(lang, 'about') }}</a></li>\n            <li><a [routerLink]=\"['/', lang, 'menu']\" routerLinkActive=\"active\">{{ languageService.t(lang, 'menu')\n                    }}</a></li>\n            <li><a [routerLink]=\"['/', lang, 'menu']\" routerLinkActive=\"active\">{{ languageService.t(lang, 'takeaway')\n                    }}</a></li>\n            <li><a href=\"#party-room\">{{ languageService.t(lang, 'partyroom') }}</a></li>\n            <li><a href=\"#catering\">{{ languageService.t(lang, 'catering') }}</a></li>\n        </ul>\n\n        <div class=\"nav-actions\">\n            <div class=\"lang-switcher desktop-lang\">\n                <button (click)=\"changeLanguage('no')\" [class.active]=\"lang == 'no'\" class=\"flag-btn\" data-lang=\"no\"\n                    title=\"Norwegian\">\n                    <img src=\"https://flagcdn.com/w40/no.png\" alt=\"Norwegian\">\n                </button>\n                <button (click)=\"changeLanguage('en')\" [class.active]=\"lang == 'en'\" class=\"flag-btn\" data-lang=\"en\"\n                    title=\"English\">\n                    <img src=\"https://flagcdn.com/w40/gb.png\" alt=\"English\">\n                </button>\n            </div>\n        </div>\n\n        <a class=\"cart-icon\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <circle cx=\"9\" cy=\"21\" r=\"1.5\"></circle>\n                <circle cx=\"20\" cy=\"21\" r=\"1.5\"></circle>\n                <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n            </svg>\n            @if(this.general.calculate_totalcartitems() > 0) { <span class=\"cart-count\">{{this.general.calculate_totalcartitems()}}</span> }\n        </a>\n\n        <a href=\"https://order.foodsted.com/en/porder/1130/shaahi-mahall-indisk-restaurant/cart?booktable=active\"\n            target=\"_blank\" class=\"btn-book\">{{ languageService.t(lang, 'booktable') }}</a>\n\n        <div class=\"mobile-nav-controls\">\n            <div class=\"lang-switcher\">\n                <button (click)=\"changeLanguage('no')\" [class.active]=\"lang == 'no'\" class=\"flag-btn\" title=\"Norwegian\">\n                    <img src=\"https://flagcdn.com/w40/no.png\" alt=\"NO\">\n                </button>\n                <button (click)=\"changeLanguage('en')\" [class.active]=\"lang == 'en'\" class=\"flag-btn\" title=\"English\">\n                    <img src=\"https://flagcdn.com/w40/gb.png\" alt=\"EN\">\n                </button>\n            </div>\n            <a href=\"#\" class=\"cart-icon-mobile\">\n                <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                    stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <circle cx=\"9\" cy=\"21\" r=\"1.5\"></circle>\n                    <circle cx=\"20\" cy=\"21\" r=\"1.5\"></circle>\n                    <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n                </svg>\n                @if(this.general.calculate_totalcartitems() > 0) { <span class=\"cart-count\">{{this.general.calculate_totalcartitems()}}</span> }\n            </a>\n            <button class=\"mobile-menu-toggle\" id=\"menuToggle\" aria-label=\"Toggle menu\">\n                <span></span>\n                <span></span>\n                <span></span>\n            </button>\n        </div>\n    </nav>\n\n\n    <div class=\"cart-modal-overlay\" id=\"cartModal\">\n        <div class=\"cart-box\">\n            <!-- HEADER -->\n            <div class=\"cart-header\">\n                <h3>\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                        <circle cx=\"9\" cy=\"21\" r=\"1.5\"></circle>\n                        <circle cx=\"20\" cy=\"21\" r=\"1.5\"></circle>\n                        <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n                    </svg>\n                    {{ languageService.t(lang, 'cart') }} ({{this.general.calculate_totalcartitems()}})\n                </h3>\n                <button class=\"cart-close\" id=\"cartClose\" aria-label=\"Close cart\">\n                    &times;\n                </button>\n            </div>\n            <!-- BODY -->\n            <div class=\"cart-body\">\n                @if(this.general.cartitems_list.length === 0) {\n                    <div class=\"cart-empty\">\n                        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">\n                            <circle cx=\"9\" cy=\"21\" r=\"1.5\"></circle>\n                            <circle cx=\"20\" cy=\"21\" r=\"1.5\"></circle>\n                            <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n                        </svg>\n                        <p>{{ languageService.t(lang, 'cartbody') }}</p>\n                    </div>\n                } @else {\n                    <div>\n                        <div style=\"padding:0;\" class=\"gInfoBlock\" #alertCart></div>\n                        @for (record of this.general.cartitems_list; track record.quotationd_id) {\n                            <div class=\"cart-item\">\n                                <div class=\"item-info\">\n                                    <h4>{{ record.item_name }}</h4>\n                                    <div class=\"item-price\">\n                                        {{ this.general.branch_result?.currency_symbol }}\n                                        {{ record.fnetprice | number:'1.2-2' }}\n                                    </div>\n                                    <div class=\"qty-box\">\n                                        <button\n                                            (click)=\"change_cartitemqty(-1, record.qty, record.item_id, record.quotationd_id)\">\n                                            -\n                                        </button>\n                                        <span>{{ record.qty }}</span>\n                                        <button\n                                            (click)=\"change_cartitemqty(1, record.qty, record.item_id, record.quotationd_id)\">\n                                            +\n                                        </button>\n                                        <small>\n                                            @ {{ this.general.branch_result?.currency_symbol }}\n                                            {{ record.fnetprice / record.qty | number:'1.2-2' }}/pcs\n                                        </small>\n                                    </div>\n                                </div>\n                                <button class=\"remove-item\" (click)=\"delete_cartitem(record.quotationd_id)\">\n                                    \uD83D\uDDD1\n                                </button>\n                            </div>\n                        }\n                    </div>\n                    <!-- FOOTER -->\n                    <div class=\"cart-footer\">\n                        <div class=\"subtotal\">\n                            <span>Subtotal:</span>\n                            <strong>{{this.general.branch_result?.branch_currencysymbol}}. {{this.general.calculate_totalcartamount() | number:'1.2-2'}}</strong>\n                        </div>\n                        <button class=\"checkout-btn\">\n                            <a [routerLink]=\"['/', lang, 'checkout']\" routerLinkActive=\"active\">Proceed to Checkout</a>\n                        </button>\n                    </div>\n                }\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"menu-overlay\" id=\"menuOverlay\">\n        <div class=\"mobile-menu\" id=\"mobileMenu\">\n            <button class=\"close-menu\" id=\"closeMenu\">&times;</button>\n            <ul class=\"mobile-nav-links\">\n                <li><a [routerLink]=\"['/', lang, 'home']\">{{ languageService.t(lang, 'home') }}</a></li>\n                <li><a href=\"#about\">{{ languageService.t(lang, 'about') }}</a></li>\n                <li><a [routerLink]=\"['/', lang, 'menu']\" routerLinkActive=\"active\">{{ languageService.t(lang, 'menu')\n                        }}</a></li>\n                <li><a [routerLink]=\"['/', lang, 'menu']\" routerLinkActive=\"active\">{{ languageService.t(lang,\n                        'takeaway') }}</a></li>\n                <li><a href=\"#party-room\">{{ languageService.t(lang, 'partyroom') }}</a></li>\n                <li><a href=\"#catering\">{{ languageService.t(lang, 'catering') }}</a></li>\n            </ul>\n            <a href=\"https://order.foodsted.com/en/porder/1130/shaahi-mahall-indisk-restaurant/cart?booktable=active\"\n                target=\"_blank\" class=\"btn-book btn-book-mobile\">{{ languageService.t(lang, 'booktable') }}</a>\n        </div>\n    </div>\n\n    \n</header>\n@if (activeLoader) {\n  <div class=\"loader-overlay\" id=\"loaderOverlay\">\n    <div class=\"loader\"></div>\n  </div>\n}" }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1.Router }, { type: i2.General }, { type: i3.HttpClient }, { type: i0.ChangeDetectorRef }], { alertCart: [{
            type: ViewChild,
            args: ['alertCart']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Header, { className: "Header", filePath: "app/components/header/header.ts", lineNumber: 15 }); })();

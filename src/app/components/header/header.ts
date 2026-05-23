import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, inject, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { APP_CONFIG } from '../../app.config';
import { CommonModule } from '@angular/common';
import { General } from '../../services/general';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {

  @ViewChild('alertCart') declare alertCart: ElementRef;
  activeLoader: boolean = false;
  opened: boolean = false;
  openedMessage: string = '';

  private readonly route = inject(ActivatedRoute);
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);

  constructor(
    @Inject(APP_CONFIG) public config: any,
    private router: Router,
    public general: General,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {
    const currentDateTime = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Europe/Oslo' })
    );
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
      } else {
        this.openedMessage = this.languageService.t(this.lang, 'closed');
      }
    } else {
      const year = currentDateTime.getFullYear();
      const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
      const day = String(currentDateTime.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      let fromDateTime = new Date(`${year}-${month}-${day}T` + (timeRecord?.open ? timeRecord.open : `00:00:00`));
      let toDateTime = new Date(`${year}-${month}-${day}T` + (timeRecord?.open ? timeRecord.close : `00:00:00`));
      if (fromDateTime <= currentDateTime && toDateTime >= currentDateTime) {
        this.opened = true;
      } else {
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
  changeLanguage(lang: string) {
    const segments = this.router.url.split('/');
    segments[1] = lang;
    const newUrl = segments.join('/');
    window.location.href = newUrl;
  }
  private persistCartItems() {
    localStorage.setItem('cartitems_list', JSON.stringify(this.general.cartitems_list));
  }
  initJsSetup() {



    // ... rest of code ...

    /* ----------------------------
       MOVE TO TOP BUTTON — smooth
    ----------------------------- */
    const moveTopBtn = document.getElementById('moveTopBtn') as HTMLElement | null;
    if (moveTopBtn) {
      moveTopBtn.addEventListener('click', () => {
        smoothScrollTo(0, 700);
      });
    }


    /* ----------------------------
       SMOOTH SCROLL UTILITY
       Uses manual animation — works in ALL browsers regardless of
       scroll-behavior CSS on html/body
    ----------------------------- */
    function smoothScrollTo(targetY: any, duration: any) {
      duration = duration || 700;
      const startY = window.scrollY;
      const diff = targetY - startY;
      let startTime: any = null;

      function easeInOutCubic(t: any) {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function step(timestamp: any) {
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
       MOBILE MENU TOGGLE
    ----------------------------- */
    /* ---- MOBILE MENU ---- */
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    if (!menuToggle || !mobileMenu || !menuOverlay) return;
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
        } else {
          closeMobileMenu();
        }
      });
    });

    /* ----------------------------
       SMOOTH SCROLL — ALL NAV LINKS
       Desktop + Mobile
    ----------------------------- */
    /*
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
          const offset = header instanceof HTMLElement ? header.offsetHeight + 16 : 100;
          const targetY = target.getBoundingClientRect().top + window.scrollY - offset;
          smoothScrollTo(targetY, 700);
        }, 50);
      });
    });
    */
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#') || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 380); // matches transition duration
      });
    });

    /* ----------------------------
       CART MODAL — origin animation
    ----------------------------- */
    const cartModal = document.getElementById('cartModal');
    const cartClose = document.getElementById('cartClose');
    const cartIcons = document.querySelectorAll('.cart-icon, .cart-icon-mobile');
    function openCart(triggerEl: any) {
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
    document.querySelectorAll<HTMLElement>(animateSelectors.join(', ')).forEach((el) => {
      if (el.closest('.hero')) return;
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

  async change_cartitemqty(_cQty: number, _aQty: number, _item_id: any, _quotationd_id: any) {
    let _fQty = parseInt(_cQty.toString()) + parseInt(_aQty.toString());
    if (_fQty == 0) {
      this.delete_cartitem(_quotationd_id);
    } else {
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
      this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe(
        (response: any) => {
          this.activeLoader = false;
          this.general.updateReponse(response);
          this.cdr.detectChanges();
        },
        error => {
          this.activeLoader = false;
          console.log(error);
          console.log(error.error);
          if (error.error.messagedetail == undefined) {
            this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
          } else {
            this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
          }
        });
    }
  }
  delete_cartitem(quotationd_id: any) {
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
    this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe(
      (response: any) => {
        this.activeLoader = false;
        this.general.updateReponse(response);
        this.cdr.detectChanges();
      },
      error => {
        this.activeLoader = false;
        console.log(error);
        console.log(error.error);
        if (error.error.messagedetail == undefined) {
          this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
        } else {
          this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
        }
      });
  }

  scrollTo(e: Event, href: string) {
  if (!href || !href.startsWith('#') || href === '#') return;

  const target = document.querySelector(href) as HTMLElement | null;  // ✅
  if (!target) return;

  e.preventDefault();

  setTimeout(() => {
    this.smoothScrollTo(target, 600);
  }, 380);
}

private smoothScrollTo(target: HTMLElement, duration: number) {
  const targetY = target.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startY + diff * easeOut(progress));

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}





}

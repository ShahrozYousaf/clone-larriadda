import { ChangeDetectorRef, Component, Inject, inject, NgZone,OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LanguageService } from '../../services/language.service';
import { APP_CONFIG } from '../../app.config';
import { CommonModule } from '@angular/common';
import { General } from '../../services/general';


// export interface Slide {
//   image: string;
//   title?: string;
//   subtitle?: string;
// }

export interface Review {
  name: string;
  text: string;
  rating: number;       // e.g. 4.5 (supports halves)
  avatar?: string;      // optional image URL
}



@Component({
  selector: 'app-home',
  imports: [Header, Footer, CommonModule, RouterLink,RouterLinkActive,],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home  implements  OnDestroy{

  public dailySchedult: any = [];
  public discountBtnLabel: any = '';

  private readonly route = inject(ActivatedRoute);
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);

  constructor(
    @Inject(APP_CONFIG) public config: any,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private general: General) {
      this.general.setup();
      this.discountBtnLabel = this.config.discountCode;
      const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Oslo' }));
      console.log( today );
      Object.keys(this.config.timeing).forEach((day:any, index:number) => {
        let activeDay = false;
        if(today.getDay() == 0 && (index+1) == 7) {
          activeDay = true;
        } else if(today.getDay() == (index+1)) {
          activeDay = true;
        }
        let timing = this.config.timeing[day];
        let languageDay = this.languageService.t(this.lang, day);
        let isClosed = timing.isClosed;
        let ClosedMessage = timing.ClosedMessage;
        let open = timing.open;
        let close = timing.close;
        let record:any = {
          languageDay,
          isClosed,
          ClosedMessage,
          open,
          close,
          activeDay
        }
        this.dailySchedult.push(record);
      });
  }



  discountBtnClick(discountCode: string) {
    this.discountBtnLabel = this.languageService.t(this.lang, 'copied') + '!';
    setTimeout(() => {
      this.ngZone.run(() => {
        this.discountBtnLabel = this.config.discountCode;
        this.cdr.detectChanges();
      });
    }, 2000);
    // Modern browsers: Chrome, Edge, Firefox, Safari
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(discountCode)
        .then(() => {
          console.log('Copied');
        })
        .catch(() => {
          this.fallbackCopyText(discountCode);
        });
    } else {
      // Older browsers / non-HTTPS
      this.fallbackCopyText(discountCode);
    }
  }

  fallbackCopyText(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      document.execCommand('copy');
      console.log('Copied fallback');
    } catch (err) {
      console.error('Copy failed', err);
    }

    document.body.removeChild(textarea);
  }


// /* image silder ------------*/




//   @Input() slides: Slide[] = [
//     { image: 'team-1.avif'},
//     { image: 'team-2.avif'},
//     { image: 'team-3.avif'},
//     { image: 'team-3.webp'},
//     { image: 'team-5.webp'},
//     { image: 'hero.webp'},
//   ];

//   @Input() autoPlayInterval: number = 3000;

//   currentIndex: number = 0;
//   private timer: any;

//   ngOnInit(): void {
//     this.startAutoPlay();
//   }

//   ngOnDestroy(): void {
//     this.stopAutoPlay();
//   }

//   startAutoPlay(): void {
//     this.timer = setInterval(() => {
//       this.next();
//     }, this.autoPlayInterval);
//   }

//   stopAutoPlay(): void {
//     if (this.timer) {
//       clearInterval(this.timer);
//     }
//   }

//   next(): void {
//     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
//   }

//   prev(): void {
//     this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
//   }

//   goTo(index: number): void {
//     this.currentIndex = index;
//     this.stopAutoPlay();
//     this.startAutoPlay(); // reset timer on manual click
//   }


// ── Sample data — replace with real data or @Input() ──────────────────────
  reviews: Review[] = [
    {
      name: 'Alexandra Jacob',
      rating: 5,
      avatar: '/review.png',
      text: 'Nice Pakistani restaurant in the middle of Lillestrøm. Food was average, the pepper chicken was lukewarm. Palak paneer good. Lamb was ok. Nice papdi chaat. Samosa chaat was nice. But the Masala chips were out of this world and what made me give 4 stars instead of 3. Naan was very good. Kulfi was great. Great ambiance and friendly albeit busy staff.',
    },
    {
      name: 'Amara Awan',
      rating: 4.5,
      avatar: '/review.png',
      text: 'Absolutely amazing experience. Its a gem in this city. A must try. Management is very professional, down to earth and friendly. Helped to choose right flavours and dishes. Would recommend whoever is visiting Norway.',
    },
    {
      name: 'Alina S. Stokkan',
      rating: 5,
      avatar: '/review.png',
      text: 'Very nice restaurant! Can adjust dishes to fit vegans. Good portion sizes and delicious food. 🤗 Will come here again. So welcoming staff and cozy interior.',
    },
    {
      name: 'Ivana Pavić',
      rating: 4,
      avatar: '/review.png',
      text: 'Amazing food and service, very pleasant staff . Would recommend to try!',
    },
    {
      name: 'Lars-Erik',
      rating: 5,
      avatar: '/review.png',
      text: 'Amazing food, great service and a fantastic atmosphere.Best peshwari naan in all of Europe, no doubt! A culinary experience that I will remember for a long long time.',
    },
    {
      name: 'Asim Ali',
      rating: 3.5,
      avatar: '/review.png',
      text: 'I ordered Lam Palak. It was indeed very good. 5 starts to “Salan” . I ordered sweet lassi and to my surprise it was sour. Perhaps yogurt was not fresh which disappoints me. i found fly bees on food as well. No offence to the owner but this review shall work for improvement.',
    },
  ];
  // ──────────────────────────────────────────────────────────────────────────
 
  currentIndex = 0;
 
  // Cards visible per slide (must match $cards-visible in SCSS)
  private readonly CARDS_VISIBLE = 3;
 
  get maxIndex(): number {
    return Math.max(0, this.reviews.length - this.CARDS_VISIBLE);
  }
 
  get dotsArray(): number[] {
    return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
  }
 
  /** Width percentage to translate per step */
  get slideWidth(): number {
    // Each card is 1/CARDS_VISIBLE of the track width
    return 100 / this.CARDS_VISIBLE;
  }
 
  prev(): void {
    if (this.currentIndex > 0) this.currentIndex--;
  }
 
  next(): void {
    if (this.currentIndex < this.maxIndex) this.currentIndex++;
  }
 
  goTo(index: number): void {
    this.currentIndex = index;
  }
 
  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('');
  }
 
  getCeilRating(rating: number): number {
    return Math.ceil(rating);
  }

  ngOnDestroy(): void {
  }

}









import { ChangeDetectorRef, Component, Inject, inject, NgZone } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LanguageService } from '../../services/language.service';
import { APP_CONFIG } from '../../app.config';
import { CommonModule } from '@angular/common';
import { General } from '../../services/general';



@Component({
  selector: 'app-home',
  imports: [Header, Footer, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

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
        if(today.getDay() == (index+1)) {
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





}

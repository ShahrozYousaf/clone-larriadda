import { ChangeDetectorRef, Component,ElementRef,Inject,inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';  
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { General } from '../../services/general';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../app.config';
@Component({
  selector: 'app-menu',
  imports: [Header, Footer, RouterLink,RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {
  activeLoader: boolean = false;
  private readonly route = inject(ActivatedRoute);
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);
  menuCategories: any = undefined;
  @ViewChild('alert') declare alert:ElementRef;
  constructor(
    @Inject(APP_CONFIG) public config: any,
    private router: Router,
    public general: General,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    this.general.setup();
  }
  downloadMenu(language: 'english' | 'norwegian'): void {
    const fileMap: Record<string, string> = {
      english: 'English-Menu.pdf',
      norwegian: 'Norsk-Meny.pdf',
    };
    const link = document.createElement('a');
    link.href = fileMap[language];
    link.download = `menu-${language}.pdf`;
    link.click();
  }
  ngOnInit() {
    if(this.general.latestmenu_loaded === false) {
      this.apiSetup();
    }
  }
  apiSetup() {
    this.activeLoader = true;
    const formData = new FormData();
    formData.append('branch_id', this.config.branch_id);
    formData.append('active_walkingcustomerapp', '1');
    formData.append('config_walkingcustomerappsignature', '1');
    formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
    formData.append('item_list', '1');
    formData.append('cart', '1');
    formData.append('quotation_deliverytype', '2');
    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.activeLoader = false;
        this.general.updateReponse(response);
        this.general.setup();
        this.general.menuLoaded();
        this.cdr.detectChanges();
      },
      error => {
        this.activeLoader = false;
        console.log( error );
        console.log( error.error );
        if( error.error.messagedetail == undefined ) {
          this.alert.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
        } else {
          this.alert.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> '+error.error.messagedetail+'</div>');
        }
      });
  }
}
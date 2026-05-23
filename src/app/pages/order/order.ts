import { ChangeDetectorRef, Component, inject, Inject, OnInit } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { APP_CONFIG } from '../../app.config';
import { General } from '../../services/general';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alert } from '../../services/alert';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-order',
  imports: [CommonModule, RouterModule, FormsModule, Header, Footer,],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order implements OnInit {

  activeLoader: boolean = false;

  private readonly route = inject(ActivatedRoute);
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);

  quotation_id: string = '';
  quotation_result: any = undefined;
  quotation_detail: any = undefined;  

  quotation_mode: number = 0;

  constructor(
    @Inject(APP_CONFIG) public config: any,
    private router: Router,
    public general: General,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private alert: Alert
  ) {
    this.general.setup();
  }

  ngOnInit() {
    this.quotation_id = this.route.snapshot.paramMap.get('quotation_id') ?? '';
    this.apiSetup();
  }

  apiSetup() {
    this.activeLoader = true;
    const formData = new FormData();
    formData.append('branch_id', this.config.branch_id);
    formData.append('active_walkingcustomerapp', '1');
    formData.append('config_walkingcustomerappsignature', '1');
    formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
    formData.append('lang', this.lang);

    formData.append('muser_validation', '1');
    formData.append('muser_id', '-1');
    formData.append('muserlsignature_signature', 'foodsted-$direct$order-foodsted');

    formData.append('quotation_id', this.quotation_id.toString());
    formData.append('call_quotationd', this.quotation_id.toString());

    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.general.updateReponse(response);
        console.log( " response " );
        console.log( response );
        this.quotation_result = response['quotation_result'];
        this.quotation_detail = response['quotation_detail'];
        this.quotation_mode = parseInt(response['quotation_result']['quotation_mode']);
        this.activeLoader = false;
      },
      error => {
        this.activeLoader = false;
        console.log( error );
        console.log( error.error );
        if( error.error.messagedetail == undefined ) {
          this.alert.error("Error!", "Connection error.");
        } else {
          this.alert.error("Error!", error.error.messagedetail);
        }
      });
  }
  get hasRemainingPayable(): boolean {
    return Number(this.quotation_result.remaining_payable) > 0;
  }

  triggerPayment() {
    this.activeLoader = true;
    window.location.href = this.config.paymentUrl+`/jazzcash_paymentrequest?quotation_placefrom=general&quotation_id=`+this.quotation_id+`&quotation_mode=`+this.quotation_mode+`&active_redirectreference=`+this.config.redirectBackReference+`/`+this.lang
  }

}

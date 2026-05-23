import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { APP_CONFIG } from '../../app.config';
import { General } from '../../services/general';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alert } from '../../services/alert';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, RouterModule, FormsModule, Header, Footer,],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout implements OnInit {

  activeLoader: boolean = false;
  @ViewChild('alert') declare alertt:ElementRef;

  currentDateTime = new Date();

  private readonly route = inject(ActivatedRoute);
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);


  public party_displayname = signal('');
  public party_mobile = signal('');
  public quotation_shippingemail = signal('');
  public quotation_mode = signal('');

  public quotation_shippingcallingcode: string = '';
  public quotation_remarks: string = '';

  public porder_method_cash:number = 0;
  public porder_method_general:number = 0;
  public porder_method_card:number = 0;

  public defaultTime: boolean = true;
  public estimated_orderreadytime:number = 25;

  public quotation_sdate: any = '';
  public quotation_stime: any = '';

  public inputpvoucher_code: string = '';
  public pvoucher_code: string = '';
  public pvoucher_id: number = 0;
  public pvoucher_paidamount: number = 0;
  public pvoucher_validated: number = 0;

  constructor(
    @Inject(APP_CONFIG) public config: any,
    private router: Router,
    public general: General,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private alert: Alert,
    private autofillMonitor: AutofillMonitor
  ) {
    this.general.setup();
    this.quotation_shippingcallingcode = this.config.defaultcallingcode;
  }

  ngOnInit() {
    this.apiSetup();
  }

  apiSetup() {
    this.activeLoader = true;
    const formData = new FormData();
    formData.append('branch_id', this.config.branch_id);
    formData.append('active_walkingcustomerapp', '1');
    formData.append('config_walkingcustomerappsignature', '1');
    formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
    formData.append('cart', '1');
    formData.append('quotation_deliverytype', '2');
    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.activeLoader = false;
        this.general.updateReponse(response);
        this.general.setup();
        this.general.menuLoaded();
        this.cdr.detectChanges();
        if(this.general.branch_result) {
          this.estimated_orderreadytime = parseInt(this.general.branch_result.branch_orderreadytime);
          const now = new Date();
          now.setHours(now.getHours() + 1);
          this.quotation_sdate = now.toISOString().substring(0, 10);
          this.quotation_stime = now.toTimeString().substring(0, 5); 
        }        
        if(this.general.branch_result && this.general.branch_result.branch_configuration) {
          let branch_configuration = JSON.parse(this.general.branch_result.branch_configuration);
          this.porder_method_cash = parseInt(branch_configuration.porder_method_cash);
          this.porder_method_general = parseInt(branch_configuration.porder_method_general);
          this.porder_method_card = parseInt(branch_configuration.porder_method_card);
        }
      },
      error => {
        this.activeLoader = false;
        console.log( error );
        console.log( error.error );
        if( error.error.messagedetail == undefined ) {
          this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
        } else {
          this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> '+error.error.messagedetail+'</div>');
        }
      });
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
      this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
        (response:any) => {
          this.activeLoader = false;
          this.general.updateReponse(response);
          this.inputpvoucher_code = '';
          this.pvoucher_code = '';
          this.pvoucher_id = 0;
          this.pvoucher_paidamount = 0; 
          this.pvoucher_validated = 0;

          this.cdr.detectChanges();
        },
        error => {
          this.activeLoader = false;
          console.log( error );
          console.log( error.error );
          if( error.error.messagedetail == undefined ) {
            this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
          } else {
            this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> '+error.error.messagedetail+'</div>');
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
    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.activeLoader = false;
        this.general.updateReponse(response);

        this.inputpvoucher_code = '';
        this.pvoucher_code = '';
        this.pvoucher_id = 0;
        this.pvoucher_paidamount = 0; 
        this.pvoucher_validated = 0;

        this.cdr.detectChanges();
      },
      error => {
        this.activeLoader = false;
        console.log( error );
        console.log( error.error );
        if( error.error.messagedetail == undefined ) {
          this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
        } else {
          this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> '+error.error.messagedetail+'</div>');
        }
      });
  }

  isOrderDisabled = computed(() =>
    !(
      this.quotation_mode()
    )
  );

  applyPromo() {
    this.activeLoader = true;
    const formData = new FormData();
    formData.append('branch_id', this.config.branch_id);
    formData.append('active_walkingcustomerapp', '1');
    formData.append('config_walkingcustomerappsignature', '1');
    formData.append('quotation_deliverytype', '2');
    formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
    formData.append('lang', this.lang);
    formData.append('muser_validation', '1');
    formData.append('muser_id', '-1');
    formData.append('muserlsignature_signature', 'foodsted-$direct$order-foodsted');
    formData.append('validate_promocode', '1');
    formData.append('active_promocode', this.inputpvoucher_code);
    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.activeLoader = false;
        this.general.updateReponse(response);
        this.pvoucher_code = this.inputpvoucher_code;
        this.pvoucher_id = parseInt(response['pvoucher_id']);
        this.pvoucher_paidamount = parseInt(response['pvoucher_paidamount']);
        this.pvoucher_validated = parseInt(response['pvoucher_validated']);
        this.cdr.detectChanges();
      },
      error => {
        this.activeLoader = false;
        this.pvoucher_code = '';
        this.pvoucher_id = 0;
        this.pvoucher_paidamount = 0; 
        this.pvoucher_validated = 0;
        console.log( error );
        console.log( error.error );
        if( error.error.messagedetail == undefined ) {
          this.alert.error("Error!", "Connection error.");
        } else {
          this.alert.error("Error!", error.error.messagedetail);
        }
      });
  }

  placeOrder() {
    this.activeLoader = true;
    const formData = new FormData();
    formData.append('branch_id', this.config.branch_id);
    formData.append('active_walkingcustomerapp', '1');
    formData.append('config_walkingcustomerappsignature', '1');
    formData.append('quotation_deliverytype', '2');
    formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
    formData.append('lang', this.lang);

    formData.append('cart', '1');

    formData.append('muser_validation', '1');
    formData.append('muser_id', '-1');
    formData.append('muserlsignature_signature', 'foodsted-$direct$order-foodsted');

    formData.append('active_creditcard', this.quotation_mode());
    formData.append('quotation_mode', this.quotation_mode());
    formData.append('muser_placeoder', '1');
    formData.append('active_alldeliverytypeporder', '1');

    if(this.pvoucher_validated === 1) {
      formData.append('active_promobalance', this.pvoucher_paidamount.toString());
      formData.append('active_promocode', this.pvoucher_code);
      formData.append('validate_promocode', '1');
    }

    formData.append('party_displayname', this.party_displayname());
    formData.append('party_mobile', this.party_mobile());
    formData.append('quotation_shippingemail', this.quotation_shippingemail());
    formData.append('quotation_remarks', this.quotation_remarks);
    formData.append('quotation_persons', '2');
    formData.append('walletpaidamount', '0');
    if(!this.defaultTime) {
      formData.append('quotation_sdate', this.quotation_sdate);
      formData.append('quotation_stime', this.quotation_stime);
    }
    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.general.updateReponse(response);
        let quotation_id = parseInt(response['quotation_id']);
        let quotation_mode = parseInt(this.quotation_mode());
        if(quotation_mode == 0) {
          this.activeLoader = false;
          this.router.navigate([this.lang, 'order', quotation_id], {
            replaceUrl: true    // ✅ no back button to this page
          });          
        } else {
          this.alert.loading("Please wait", "Please wait while we redirect you to the secure payment page");
          window.location.href = this.config.paymentUrl+`/jazzcash_paymentrequest?quotation_placefrom=general&quotation_id=`+quotation_id+`&quotation_mode=`+quotation_mode+`&active_redirectreference=`+this.config.redirectBackReference+`/`+this.lang
        }
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
}
 

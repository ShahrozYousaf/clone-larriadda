import { ChangeDetectorRef, Component, ElementRef, Inject, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { General } from '../../services/general';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { APP_CONFIG } from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Allergen {
  code: string;
  label: string;
}
@Component({
  selector: 'app-items',
  imports: [FormsModule, CommonModule, Header, Footer, RouterLink],
  templateUrl: './items.html',
  styleUrl: './items.scss',
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class Items {
  activeLoader: boolean = false;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  public readonly languageService = inject(LanguageService);
  public readonly general = inject(General);
  public lang = this.languageService.getLangFromRoute(this.route);
  public item_gcategory = '';
  public item_gcategory_title = '';
  public category_itemlist: any = undefined;
  public groupedItemSpecification: any[] = [];
  public ItemOptionsHandlerArray: any[] = [];

  /* Item Detail */
  @ViewChild('alert') declare alert:ElementRef;
  @ViewChild('alertCart') declare alertCart:ElementRef;
  public itemPopup: boolean = false;
  public itemDetail: any = undefined;
  public itemSchedule: any = undefined;
  public itemSpecification: any = undefined;
  public itemQty: number = 1;
  public quotationd_instruction: string = '';
  public item_activeschedule: number = 0;
  /* Item Detail */

  constructor(
    @Inject(APP_CONFIG) public config: any,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
  ) {
    if (this.general && !this.general.latestmenu_loaded) {
      this.router.navigate(['/', this.lang, 'menu'], { replaceUrl: true });
    }
  }
  allergens: Allergen[] = [
    { code: 'CR', label: 'Shellfish' },
    { code: 'E',  label: 'Egg' },
    { code: 'F',  label: 'Fish' },
    { code: 'G',  label: 'Gluten' },
    { code: 'M',  label: 'Milk' },
    { code: 'N',  label: 'Nuts' },
    { code: 'SE', label: 'Sesame' },
    { code: 'SF', label: 'Shellfish' },
    { code: 'MU', label: 'Mustard' },
    { code: 'SY', label: 'Soya' }
  ];
  ngOnInit(): void {
    this.general.setup();
    this.route.paramMap.subscribe(params => {
      this.item_gcategory = params.get('item_gcategory') ?? '';
      this.item_gcategory_title =
        this.general.categories_list.find(category => category.item_gcategory === this.item_gcategory)?.item_gcategory_title ?? '';
    });
    this.category_itemlist = this.general.items_list.filter((item:any) => item.item_gcategory === this.item_gcategory);
    // console.log(" category_itemlist ");
    // console.log( this.category_itemlist );
  }
  getAllergenString(): string {
    return this.allergens.map(a => `${a.code} - ${a.label}`).join(', ');
  }
  closeItemDetail() {
    this.itemPopup = false;
    this.itemDetail = undefined;
    this.itemSchedule = undefined;
    this.itemSpecification = undefined;
    this.item_activeschedule = 0;
    this.ItemOptionsHandlerArray = [];
  }
  getlast_itemgroupid(__i:number) {
    if(__i === 0) {
      return 0;
    } else {
      __i--;
      return this.itemSpecification[__i]['itemgroup_id'];
    }
  }
  groupItems(items: any[]) {
    const groups: any[] = [];
    items.forEach(item => {
      let group = groups.find(g => g.itemgroup_id === item.itemgroup_id);
      if (!group) {
        group = {
          itemgroup_id: item.itemgroup_id,
          itemgroup_name: item.itemgroup_name,
          itemgroup_namelang: item.itemgroup_namelang,
          itemgroup_mandatory: item.itemgroup_mandatory,
          options: []
        };
        groups.push(group);
      }
      group.options.push(item);
    });
    return groups;
  }
  addqty(aqty:number) {
    this.itemQty = this.itemQty + aqty;
    if(this.itemQty < 1) { this.itemQty = 1; }
  }
  isOptionSelected(itemgroupitem_id: number): boolean {
    return this.ItemOptionsHandlerArray.some((item: any) => item.itemgroupitem_id == itemgroupitem_id);
  }
  radioChangeHandler(_itemgroupitem_id:any) {
    let itemSpecificationOptionRecord = this.itemSpecification.find((Record:any) => Record.itemgroupitem_id === _itemgroupitem_id);
    let itemgroupitem_item_id = parseInt(itemSpecificationOptionRecord.itemgroupitem_item_id);
    let itemgroup_id = parseInt(itemSpecificationOptionRecord.itemgroup_id);
    let itemgroupitem_id = parseInt(itemSpecificationOptionRecord.itemgroupitem_id);
    let itemgroupitem_rate = parseInt(itemSpecificationOptionRecord.item_rate);
    let itemgroup_multiselectable = parseInt(itemSpecificationOptionRecord.itemgroup_multiselectable);
    let itemgroup_qtychangeable = parseInt(itemSpecificationOptionRecord.itemgroup_qtychangeable);
    if(itemgroup_multiselectable == 0) {
      let itemoptionindex_itemoptionshandlerarray = this.ItemOptionsHandlerArray.findIndex((record:any) => record.itemgroup_id == itemgroup_id);
      if(itemoptionindex_itemoptionshandlerarray == -1) {
        let jsonRecord : any = [];
        jsonRecord['itemgroup_id'] = itemgroup_id;
        jsonRecord['itemgroupitem_id'] = itemgroupitem_id;
        jsonRecord['itemgroupitem_rate'] = itemgroupitem_rate;
        jsonRecord['itemgroup_multiselectable'] = itemgroup_multiselectable;
        jsonRecord['itemgroup_qtychangeable'] = itemgroup_qtychangeable;
        jsonRecord['itemgroupitem_item_id'] = itemgroupitem_item_id;
        jsonRecord['itemgroupitem_qty'] = 1;
        this.ItemOptionsHandlerArray.push(jsonRecord);
      } else {
        this.ItemOptionsHandlerArray[itemoptionindex_itemoptionshandlerarray]['itemgroupitem_id'] = itemgroupitem_id;
        this.ItemOptionsHandlerArray[itemoptionindex_itemoptionshandlerarray]['itemgroupitem_rate'] = itemgroupitem_rate;
      }
    } else {      
      let itemoptionindex_itemoptionshandlerarray = this.ItemOptionsHandlerArray.findIndex((record:any) => record.itemgroup_id == itemgroup_id && record.itemgroupitem_id == itemgroupitem_id);
      if(itemoptionindex_itemoptionshandlerarray == -1) {
        let jsonRecord : any = [];
        jsonRecord['itemgroup_id'] = itemgroup_id;
        jsonRecord['itemgroupitem_id'] = itemgroupitem_id;
        jsonRecord['itemgroupitem_rate'] = itemgroupitem_rate;
        jsonRecord['itemgroup_multiselectable'] = itemgroup_multiselectable;
        jsonRecord['itemgroup_qtychangeable'] = itemgroup_qtychangeable;
        jsonRecord['itemgroupitem_item_id'] = itemgroupitem_item_id;
        jsonRecord['itemgroupitem_qty'] = 1;
        this.ItemOptionsHandlerArray.push(jsonRecord);
      } else {
        this.ItemOptionsHandlerArray.splice(itemoptionindex_itemoptionshandlerarray, 1);
      }
    }
  }
  detail(item:any) {
    this.groupedItemSpecification = [];
    this.ItemOptionsHandlerArray = [];
    this.activeLoader = true;
    this.itemPopup = true;
    this.itemQty = 1;
    this.quotationd_instruction = '';
    this.itemDetail = item;
    this.itemSchedule = undefined;
    this.itemSpecification = undefined;
    this.item_activeschedule = 0;
    const formData = new FormData();
    formData.append('branch_id', this.config.branch_id);
    formData.append('active_walkingcustomerapp', '1');
    formData.append('config_walkingcustomerappsignature', '1');
    formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
    formData.append('item_id', item.item_id);
    formData.append('call_itemspecification', '1');
    formData.append('call_itemtags', '1');
    formData.append('lang', this.lang);
    formData.append('quotation_deliverytype', '2');
    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.activeLoader = false;
        this.general.updateReponse(response);
        this.itemDetail = item;
        this.itemDetail.item_specification = parseInt(response['item_result'].item_specification);
        this.item_activeschedule = parseInt(response['item_result'].item_activeschedule);
        this.itemSpecification = response['itemgroup_result'];
        this.groupedItemSpecification = this.groupItems(this.itemSpecification);
        if(response['itemschedule_result']) {
          this.itemSchedule = response['itemschedule_result'];
        } else {
          this.itemSchedule = undefined;
        }
        // console.log( this.groupedItemSpecification );
        // this.general.updateReponse(response);
        // this.general.setup();
        // this.general.menuLoaded();
        // this.cdr.detectChanges();
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
  validateRequiredOption() {
    if (this.itemSpecification.length > 0) {
      let validation = this.itemSpecification.filter(
        (spec: any) =>
          spec.itemgroup_mandatory == 1 &&
          !this.ItemOptionsHandlerArray.some(
            (item: any) => item.itemgroup_id == spec.itemgroup_id
          )
      );
      if (validation.length == 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  addtoCart() {
    this.activeLoader = true;
    let directitem_list:any = [];
    const formData = new FormData();
    formData.append('branch_id', this.config.branch_id);
    formData.append('active_walkingcustomerapp', '1');
    formData.append('config_walkingcustomerappsignature', '1');
    formData.append('walkingcustomerapp_signature', this.general.walkingcustomerapp_signature ? this.general.walkingcustomerapp_signature : '');
    formData.append('quotation_deliverytype', '2');
    formData.append('cart', '1');
    formData.append('lang', this.lang);

    formData.append('qty', this.itemQty.toString());
    formData.append('item_id', this.itemDetail.item_id);
    formData.append('quotationd_instruction', this.quotationd_instruction);

    if(this.itemDetail.item_specification == 1) {
      formData.append('active_advancedaddtocart', '1');
      formData.append('totaloption', this.ItemOptionsHandlerArray.length.toString());      
      this.ItemOptionsHandlerArray.forEach((element:any, index:number) => {
        let itemgroup_qtychangeable = parseInt(element.itemgroup_qtychangeable);
        if(itemgroup_qtychangeable == 1) {
          let item_id = parseInt(element.itemgroupitem_item_id);
          let qty = 1;
          let itemindex_directitem = directitem_list.findIndex((record:any) => record.item_id == item_id);
          if(itemindex_directitem == -1) {
            directitem_list.push({item_id, qty});
          }
        } else {
          formData.append('itemgroup_id_'+index, element.itemgroup_id);
          formData.append('itemgroupitem_id_'+index, element.itemgroupitem_id);
          formData.append('itemgroupitem_price_'+index, element.itemgroupitem_rate);
        }
      });
      formData.append('active_multiitemaddtocart', '1');
      formData.append('total_multiitems', directitem_list.length);
      directitem_list.forEach((directitem:any, index:number) => {
        formData.append('item_id_'+index, directitem.item_id);
        formData.append('qty_'+index, directitem.qty);
      });
    } else {
      formData.append('active_directaddtocart', '1');
    }
    this.http.post(this.config.apiUrl+'/api/shop', formData).subscribe(
      (response:any) => {
        this.activeLoader = false;
        this.general.updateReponse(response);
        this.closeItemDetail();
        this.animateCart();
        this.cdr.detectChanges();
      },
      error => {
        this.activeLoader = false;
        console.log( error );
        console.log( error.error );
        if( error.error.messagedetail == undefined ) {
          this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
        } else {
          this.alertCart.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> '+error.error.messagedetail+'</div>');
        }
      });
  }
  animateCart() {
    const el = document.querySelector('.cart-toast__btn');

    if (el) {
      el.classList.remove('animate');

      // restart animation
      setTimeout(() => {
        el.classList.add('animate');
      }, 10);

      setTimeout(() => {
        el.classList.remove('animate');
      }, 400);
    }
  }

  getHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}

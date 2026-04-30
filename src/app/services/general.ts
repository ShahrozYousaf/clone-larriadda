import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class General {
  latestmenu_loaded: boolean = false;
  walkingcustomerapp_signature?: string;
  cartitems_list: any[] = [];
  categories_list: any[] = [];
  items_list: any[] = [];
  branch_result: any = undefined;
  constructor(
    @Inject(APP_CONFIG) private config: any
  ) { }
  setup() {
    let walkingcustomerapp_signature = localStorage.getItem('walkingcustomerapp_signature');
    if (!walkingcustomerapp_signature) {
      this.walkingcustomerapp_signature = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem('walkingcustomerapp_signature', this.walkingcustomerapp_signature);
    } else {
      this.walkingcustomerapp_signature = walkingcustomerapp_signature;
    }
    let cartitems_list = localStorage.getItem('cartitems_list');
    if(cartitems_list) { this.cartitems_list = this.parseStorageList(cartitems_list); }

    let categories_list = localStorage.getItem('categories_list');
    if(categories_list) { this.categories_list = this.parseStorageList(categories_list); }

    let items_list = localStorage.getItem('items_list');
    if(items_list) { this.items_list = this.parseStorageList(items_list); }

    let branch_result = localStorage.getItem('branch_result');
    if(branch_result) { this.branch_result = JSON.parse(branch_result); }
  }
  private parseStorageList(value: string) {
    try {
      let parsedValue = JSON.parse(value);
      return Array.isArray(parsedValue) ? parsedValue : [];
    } catch {
      return [];
    }
  }
  call_itemfinalprice(rate: number, drate: number) {
    if (Number(drate) == 0.00) {
      return rate;
    } else {
      return drate;
    }
  }
  get_itemincart(item_id: number) {
    let sum: number = 0;
    for (let index = 0; index < this.cartitems_list?.length; index++) {
      if (item_id == this.cartitems_list[index].item_id) {
        sum += parseFloat(this.cartitems_list[index]['qty']);
      }
    }
    return sum;
  }
  menuLoaded() {
    this.latestmenu_loaded = true;
  }
  cleanNull(data: any) {
    Object.keys(data).forEach(key => {
      if (data[key] === null || data[key] === 'null') {
        data[key] = '';
      }
    });
    return data;
  }
  updateReponse(response: any) {
    if (!response) {
      return;
    }
    if (response['cartitems_list']) {
      this.cartitems_list = response['cartitems_list'];
      localStorage.setItem('cartitems_list', JSON.stringify(this.cartitems_list));
    }

    if (response['branch_result']) {
      this.branch_result = response['branch_result'];
      localStorage.setItem('branch_result', JSON.stringify(this.branch_result));
    }

    if (response['items_list']) {
      let dbitems_list = response['items_list'];
      let items_list: any = [];
      let categories_list: any = [];
      dbitems_list.forEach((item: any, index: number) => {
        let item_gcategory = item.item_gcategory;
        let item_gcategory_title = item.item_gcategory_title;
        let lookupdetail_title_no = item.lookupdetail_title_no;
        let item_gcategory_img = item.item_gcategory_img;
        let findalready = categories_list.find((subcategory:any) => subcategory.item_gcategory === item_gcategory)
        if (!findalready) {
          let jsonRecord: any = {};
          jsonRecord['item_gcategory'] = item_gcategory;
          jsonRecord['item_gcategory_title'] = item_gcategory_title;
          jsonRecord['lookupdetail_title_no'] = lookupdetail_title_no;
          jsonRecord['item_gcategory_img'] = item_gcategory_img;
          categories_list.push(jsonRecord);
        }
        let lastIndex = -1;
        if (index == 0) { lastIndex = -1; } else { lastIndex = index - 1; }
        let getvalidate_showcategoryname = (lastIndex == -1 ? 1 : (item_gcategory == dbitems_list[lastIndex].item_gcategory ? 0 : 1));

        let rItem = item;
        rItem['getvalidate_showcategoryname'] = getvalidate_showcategoryname;
        rItem['call_itemfinalprice'] = this.call_itemfinalprice(item.itembranch_rate, item.item_displayprice);

        let item_displayprice = parseFloat(item.item_displayprice);
        let item_originalprice = parseFloat(item.item_originalprice);

        let check_itemdiscountfound = 0;
        if (item_originalprice > item_displayprice) { check_itemdiscountfound = 1; }

        rItem['check_itemdiscountfound'] = check_itemdiscountfound;

        let check_itemdiscountptage = 0;

        if (check_itemdiscountfound == 1) {
          check_itemdiscountptage = 100 - ((rItem['call_itemfinalprice'] / item_originalprice) * 100);
        }
        rItem['check_itemdiscountptage'] = Math.floor(check_itemdiscountptage);
        rItem['get_itemincart'] = this.get_itemincart(item.item_id);
        rItem = this.cleanNull(rItem);
        items_list.push(rItem);
      });
      this.categories_list = categories_list;
      localStorage.setItem('categories_list', JSON.stringify(this.categories_list));
      this.items_list = items_list;
      localStorage.setItem('items_list', JSON.stringify(this.items_list));
    }
  }
}

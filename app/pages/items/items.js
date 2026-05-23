import { Component, Inject, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { General } from '../../services/general';
import { trigger, transition, style, animate } from '@angular/animations';
import { APP_CONFIG } from '../../app.config';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
const _c0 = ["alert"];
const _c1 = ["alertCart"];
const _c2 = a0 => ["/", a0, "home"];
const _c3 = a0 => ["/", a0, "menu"];
const _c4 = a0 => ["/", a0, "checkout"];
function Items_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "div", 21);
    i0.ɵɵelementEnd();
} }
function Items_Conditional_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.itemDetail.item_namelang, " ");
} }
function Items_Conditional_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.itemDetail.item_name, " ");
} }
function Items_Conditional_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.itemDetail.item_saleinfolang, " ");
} }
function Items_Conditional_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.itemDetail.item_saleinfo, " ");
} }
function Items_Conditional_2_Conditional_12_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const groupedItem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", groupedItem_r4.itemgroup_namelang, " ");
} }
function Items_Conditional_2_Conditional_12_For_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const groupedItem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", groupedItem_r4.itemgroup_name, " ");
} }
function Items_Conditional_2_Conditional_12_For_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " * ");
} }
function Items_Conditional_2_Conditional_12_For_1_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Required ");
} }
function Items_Conditional_2_Conditional_12_For_1_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Optional ");
} }
function Items_Conditional_2_Conditional_12_For_1_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function Items_Conditional_2_Conditional_12_For_1_For_13_Template_button_click_0_listener() { const option_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.radioChangeHandler(option_r6.itemgroupitem_id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("active", ctx_r1.isOptionSelected(option_r6.itemgroupitem_id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r6.item_name);
} }
function Items_Conditional_2_Conditional_12_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "h3");
    i0.ɵɵconditionalCreate(2, Items_Conditional_2_Conditional_12_For_1_Conditional_2_Template, 1, 1)(3, Items_Conditional_2_Conditional_12_For_1_Conditional_3_Template, 1, 1);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵconditionalCreate(5, Items_Conditional_2_Conditional_12_For_1_Conditional_5_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "( ");
    i0.ɵɵconditionalCreate(8, Items_Conditional_2_Conditional_12_For_1_Conditional_8_Template, 1, 0)(9, Items_Conditional_2_Conditional_12_For_1_Conditional_9_Template, 1, 0);
    i0.ɵɵtext(10, " )");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 34);
    i0.ɵɵrepeaterCreate(12, Items_Conditional_2_Conditional_12_For_1_For_13_Template, 2, 3, "button", 35, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const groupedItem_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.lang == "no" ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(groupedItem_r4.itemgroup_mandatory == 1 ? 5 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(groupedItem_r4.itemgroup_mandatory == 1 ? 8 : 9);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(groupedItem_r4.options);
} }
function Items_Conditional_2_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵrepeaterCreate(0, Items_Conditional_2_Conditional_12_For_1_Template, 14, 3, "div", 28, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(2, "div", 28)(3, "h3");
    i0.ɵɵtext(4, "Antall");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 29)(6, "button", 30);
    i0.ɵɵlistener("click", function Items_Conditional_2_Conditional_12_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addqty(-1)); });
    i0.ɵɵtext(7, "-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 30);
    i0.ɵɵlistener("click", function Items_Conditional_2_Conditional_12_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addqty(1)); });
    i0.ɵɵtext(11, "+");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 28)(13, "h3");
    i0.ɵɵtext(14, "Special Instructions ");
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "(Optional)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "textarea", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function Items_Conditional_2_Conditional_12_Template_textarea_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.quotationd_instruction, $event) || (ctx_r1.quotationd_instruction = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(18, "div", 27, 1);
    i0.ɵɵelementStart(20, "button", 32);
    i0.ɵɵlistener("click", function Items_Conditional_2_Conditional_12_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addtoCart()); });
    i0.ɵɵtext(21, "Legg i handlekurv");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p", 33);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.groupedItemSpecification);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.itemQty);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.quotationd_instruction);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.validateRequiredOption());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" '", ctx_r1.validateRequiredOption(), "' Klar til \u00E5 legge i handlekurv");
} }
function Items_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "div", 22);
    i0.ɵɵelementStart(1, "div", 23)(2, "button", 24);
    i0.ɵɵlistener("click", function Items_Conditional_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeItemDetail()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵconditionalCreate(5, Items_Conditional_2_Conditional_5_Template, 1, 1)(6, Items_Conditional_2_Conditional_6_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 25);
    i0.ɵɵconditionalCreate(8, Items_Conditional_2_Conditional_8_Template, 1, 1)(9, Items_Conditional_2_Conditional_9_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 26);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, Items_Conditional_2_Conditional_12_Template, 24, 4);
    i0.ɵɵelement(13, "div", 27, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.lang == "no" ? 5 : 6);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.lang == "no" ? 8 : 9);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.general.branch_result == null ? null : ctx_r1.general.branch_result.branch_currencysymbol, ". ", ctx_r1.itemDetail.call_itemfinalprice);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.itemSpecification !== undefined ? 12 : -1);
} }
function Items_Conditional_22_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.general.get_itemincart(item_r8.item_id));
} }
function Items_Conditional_22_For_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r8.item_namelang, " ");
} }
function Items_Conditional_22_For_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r8.item_name, " ");
} }
function Items_Conditional_22_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r8.item_saleinfolang, " ");
} }
function Items_Conditional_22_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r8.item_saleinfo, " ");
} }
function Items_Conditional_22_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 37);
    i0.ɵɵlistener("click", function Items_Conditional_22_For_2_Template_article_click_0_listener() { const item_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.detail(item_r8)); });
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵconditionalCreate(2, Items_Conditional_22_For_2_Conditional_2_Template, 2, 1, "span", 39);
    i0.ɵɵelementStart(3, "div", 40)(4, "h2", 41);
    i0.ɵɵconditionalCreate(5, Items_Conditional_22_For_2_Conditional_5_Template, 1, 1)(6, Items_Conditional_22_For_2_Conditional_6_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 42);
    i0.ɵɵconditionalCreate(8, Items_Conditional_22_For_2_Conditional_8_Template, 1, 1)(9, Items_Conditional_22_For_2_Conditional_9_Template, 1, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 43)(11, "span", 44);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 45)(14, "span", 46);
    i0.ɵɵtext(15, " Add to Cart ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "span", 47);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.general.get_itemincart(item_r8.item_id) ? 2 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.lang == "no" ? 5 : 6);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.lang == "no" ? 8 : 9);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r1.general.branch_result == null ? null : ctx_r1.general.branch_result.branch_currencysymbol, ". ", item_r8.call_itemfinalprice);
} }
function Items_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵrepeaterCreate(1, Items_Conditional_22_For_2_Template, 17, 5, "article", 36, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.category_itemlist);
} }
function Items_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 48)(2, "div", 49);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 50);
    i0.ɵɵelement(4, "circle", 51)(5, "circle", 52)(6, "path", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "div", 54)(8, "span", 55);
    i0.ɵɵtext(9, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 56);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "button", 57);
    i0.ɵɵtext(14, " Checkout ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(15, "svg", 58);
    i0.ɵɵelement(16, "line", 59)(17, "polyline", 60);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c4, ctx_r1.lang));
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate2("", ctx_r1.general.branch_result == null ? null : ctx_r1.general.branch_result.branch_currencysymbol, ". ", i0.ɵɵpipeBind2(12, 3, ctx_r1.general.calculate_totalcartamount(), "1.2-2"));
} }
export class Items {
    config;
    http;
    cdr;
    activeLoader = false;
    route = inject(ActivatedRoute);
    router = inject(Router);
    languageService = inject(LanguageService);
    general = inject(General);
    lang = this.languageService.getLangFromRoute(this.route);
    item_gcategory = '';
    item_gcategory_title = '';
    category_itemlist = undefined;
    groupedItemSpecification = [];
    ItemOptionsHandlerArray = [];
    /* Item Detail */
    alert;
    alertCart;
    itemPopup = false;
    itemDetail = undefined;
    itemSpecification = undefined;
    itemQty = 1;
    quotationd_instruction = '';
    /* Item Detail */
    constructor(config, http, cdr) {
        this.config = config;
        this.http = http;
        this.cdr = cdr;
        if (this.general && !this.general.latestmenu_loaded) {
            this.router.navigate(['/', this.lang, 'menu'], { replaceUrl: true });
        }
    }
    allergens = [
        { code: 'CR', label: 'Shellfish' },
        { code: 'E', label: 'Egg' },
        { code: 'F', label: 'Fish' },
        { code: 'G', label: 'Gluten' },
        { code: 'M', label: 'Milk' },
        { code: 'N', label: 'Nuts' },
        { code: 'SE', label: 'Sesame' },
        { code: 'SF', label: 'Shellfish' },
        { code: 'MU', label: 'Mustard' },
        { code: 'SY', label: 'Soya' }
    ];
    ngOnInit() {
        this.general.setup();
        this.route.paramMap.subscribe(params => {
            this.item_gcategory = params.get('item_gcategory') ?? '';
            this.item_gcategory_title =
                this.general.categories_list.find(category => category.item_gcategory === this.item_gcategory)?.item_gcategory_title ?? '';
        });
        this.category_itemlist = this.general.items_list.filter((item) => item.item_gcategory === this.item_gcategory);
        // console.log(" category_itemlist ");
        // console.log( this.category_itemlist );
    }
    getAllergenString() {
        return this.allergens.map(a => `${a.code} - ${a.label}`).join(', ');
    }
    closeItemDetail() {
        this.itemPopup = false;
        this.itemDetail = undefined;
        this.itemSpecification = undefined;
        this.ItemOptionsHandlerArray = [];
    }
    getlast_itemgroupid(__i) {
        if (__i === 0) {
            return 0;
        }
        else {
            __i--;
            return this.itemSpecification[__i]['itemgroup_id'];
        }
    }
    groupItems(items) {
        const groups = [];
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
    addqty(aqty) {
        this.itemQty = this.itemQty + aqty;
        if (this.itemQty < 1) {
            this.itemQty = 1;
        }
    }
    isOptionSelected(itemgroupitem_id) {
        return this.ItemOptionsHandlerArray.some((item) => item.itemgroupitem_id == itemgroupitem_id);
    }
    radioChangeHandler(_itemgroupitem_id) {
        let itemSpecificationOptionRecord = this.itemSpecification.find((Record) => Record.itemgroupitem_id === _itemgroupitem_id);
        let itemgroupitem_item_id = parseInt(itemSpecificationOptionRecord.itemgroupitem_item_id);
        let itemgroup_id = parseInt(itemSpecificationOptionRecord.itemgroup_id);
        let itemgroupitem_id = parseInt(itemSpecificationOptionRecord.itemgroupitem_id);
        let itemgroupitem_rate = parseInt(itemSpecificationOptionRecord.item_rate);
        let itemgroup_multiselectable = parseInt(itemSpecificationOptionRecord.itemgroup_multiselectable);
        let itemgroup_qtychangeable = parseInt(itemSpecificationOptionRecord.itemgroup_qtychangeable);
        if (itemgroup_multiselectable == 0) {
            let itemoptionindex_itemoptionshandlerarray = this.ItemOptionsHandlerArray.findIndex((record) => record.itemgroup_id == itemgroup_id);
            if (itemoptionindex_itemoptionshandlerarray == -1) {
                let jsonRecord = [];
                jsonRecord['itemgroup_id'] = itemgroup_id;
                jsonRecord['itemgroupitem_id'] = itemgroupitem_id;
                jsonRecord['itemgroupitem_rate'] = itemgroupitem_rate;
                jsonRecord['itemgroup_multiselectable'] = itemgroup_multiselectable;
                jsonRecord['itemgroup_qtychangeable'] = itemgroup_qtychangeable;
                jsonRecord['itemgroupitem_item_id'] = itemgroupitem_item_id;
                jsonRecord['itemgroupitem_qty'] = 1;
                this.ItemOptionsHandlerArray.push(jsonRecord);
            }
            else {
                this.ItemOptionsHandlerArray[itemoptionindex_itemoptionshandlerarray]['itemgroupitem_id'] = itemgroupitem_id;
                this.ItemOptionsHandlerArray[itemoptionindex_itemoptionshandlerarray]['itemgroupitem_rate'] = itemgroupitem_rate;
            }
        }
        else {
            let itemoptionindex_itemoptionshandlerarray = this.ItemOptionsHandlerArray.findIndex((record) => record.itemgroup_id == itemgroup_id && record.itemgroupitem_id == itemgroupitem_id);
            if (itemoptionindex_itemoptionshandlerarray == -1) {
                let jsonRecord = [];
                jsonRecord['itemgroup_id'] = itemgroup_id;
                jsonRecord['itemgroupitem_id'] = itemgroupitem_id;
                jsonRecord['itemgroupitem_rate'] = itemgroupitem_rate;
                jsonRecord['itemgroup_multiselectable'] = itemgroup_multiselectable;
                jsonRecord['itemgroup_qtychangeable'] = itemgroup_qtychangeable;
                jsonRecord['itemgroupitem_item_id'] = itemgroupitem_item_id;
                jsonRecord['itemgroupitem_qty'] = 1;
                this.ItemOptionsHandlerArray.push(jsonRecord);
            }
            else {
                this.ItemOptionsHandlerArray.splice(itemoptionindex_itemoptionshandlerarray, 1);
            }
        }
    }
    detail(item) {
        this.groupedItemSpecification = [];
        this.ItemOptionsHandlerArray = [];
        this.activeLoader = true;
        this.itemPopup = true;
        this.itemQty = 1;
        this.quotationd_instruction = '';
        this.itemDetail = item;
        this.itemSpecification = undefined;
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
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.activeLoader = false;
            this.general.updateReponse(response);
            this.itemDetail = item;
            this.itemDetail.item_specification = parseInt(response['item_result'].item_specification);
            this.itemSpecification = response['itemgroup_result'];
            this.groupedItemSpecification = this.groupItems(this.itemSpecification);
            // console.log( this.groupedItemSpecification );
            // this.general.updateReponse(response);
            // this.general.setup();
            // this.general.menuLoaded();
            // this.cdr.detectChanges();
        }, error => {
            this.activeLoader = false;
            console.log(error);
            console.log(error.error);
            if (error.error.messagedetail == undefined) {
                this.alert.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
            }
            else {
                this.alert.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
            }
        });
    }
    validateRequiredOption() {
        if (this.itemSpecification.length > 0) {
            let validation = this.itemSpecification.filter((spec) => spec.itemgroup_mandatory == 1 &&
                !this.ItemOptionsHandlerArray.some((item) => item.itemgroup_id == spec.itemgroup_id));
            if (validation.length == 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
    addtoCart() {
        this.activeLoader = true;
        let directitem_list = [];
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
        if (this.itemDetail.item_specification == 1) {
            formData.append('active_advancedaddtocart', '1');
            formData.append('totaloption', this.ItemOptionsHandlerArray.length.toString());
            this.ItemOptionsHandlerArray.forEach((element, index) => {
                let itemgroup_qtychangeable = parseInt(element.itemgroup_qtychangeable);
                if (itemgroup_qtychangeable == 1) {
                    let item_id = parseInt(element.itemgroupitem_item_id);
                    let qty = 1;
                    let itemindex_directitem = directitem_list.findIndex((record) => record.item_id == item_id);
                    if (itemindex_directitem == -1) {
                        directitem_list.push({ item_id, qty });
                    }
                }
                else {
                    formData.append('itemgroup_id_' + index, element.itemgroup_id);
                    formData.append('itemgroupitem_id_' + index, element.itemgroupitem_id);
                    formData.append('itemgroupitem_price_' + index, element.itemgroupitem_rate);
                }
            });
            formData.append('active_multiitemaddtocart', '1');
            formData.append('total_multiitems', directitem_list.length);
            directitem_list.forEach((directitem, index) => {
                formData.append('item_id_' + index, directitem.item_id);
                formData.append('qty_' + index, directitem.qty);
            });
        }
        else {
            formData.append('active_directaddtocart', '1');
        }
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.activeLoader = false;
            this.general.updateReponse(response);
            this.closeItemDetail();
            this.animateCart();
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
    static ɵfac = function Items_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Items)(i0.ɵɵdirectiveInject(APP_CONFIG), i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Items, selectors: [["app-items"]], viewQuery: function Items_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.alert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.alertCart = _t.first);
        } }, decls: 33, vars: 13, consts: [["alert", ""], ["alertCart", ""], ["id", "loaderOverlay", 1, "loader-overlay"], [1, "page-wrapper"], [1, "page-header"], [1, "page-title"], ["aria-label", "Breadcrumb", 1, "breadcrumb"], [1, "breadcrumb__link", 3, "routerLink"], [1, "breadcrumb__sep"], [1, "breadcrumb__current"], [1, "header-divider"], [1, "header-tagline"], [1, "menu-section"], [1, "menu-grid"], [1, "allergens-section"], [1, "allergens-card"], [1, "allergens-accent"], [1, "allergens-body"], [1, "allergens-title"], [1, "allergens-list"], [1, "cart-toast", 3, "routerLink"], [1, "loader"], [1, "popup-overlay"], [1, "modal"], [1, "close-btn", 3, "click"], [1, "desc"], [1, "price"], [1, "gInfoBlock"], [1, "section"], [1, "qty"], [3, "click"], ["placeholder", "Add any special requests or notes...", 3, "ngModelChange", "ngModel"], [1, "cart-btn", 3, "click", "disabled"], [1, "ready-text"], [1, "options"], [3, "active"], [1, "menu-card"], [1, "menu-card", 3, "click"], [1, "card__glow"], [1, "card__qty"], [1, "card__content"], [1, "card__title"], [1, "card__description"], [1, "card__footer"], [1, "price-badge"], ["aria-label", "Add Chicken Biryani to cart", 1, "btn-cart"], [1, "btn-cart__text"], [1, "btn-cart__ripple"], [1, "cart-toast__left"], [1, "cart-toast__icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], [1, "cart-toast__info"], [1, "cart-toast__label"], [1, "cart-toast__price"], [1, "cart-toast__btn"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"]], template: function Items_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-header");
            i0.ɵɵconditionalCreate(1, Items_Conditional_1_Template, 2, 0, "div", 2);
            i0.ɵɵconditionalCreate(2, Items_Conditional_2_Template, 15, 5);
            i0.ɵɵelementStart(3, "div", 3)(4, "header", 4)(5, "h1", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "nav", 6)(8, "a", 7);
            i0.ɵɵtext(9, "Home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 7);
            i0.ɵɵtext(13, "Menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 8);
            i0.ɵɵtext(15, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 9);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(18, "div", 10);
            i0.ɵɵelementStart(19, "p", 11);
            i0.ɵɵtext(20, "Delight your palate with our authentic menu");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "main", 12);
            i0.ɵɵconditionalCreate(22, Items_Conditional_22_Template, 3, 0, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "section", 14)(24, "div", 15);
            i0.ɵɵelement(25, "div", 16);
            i0.ɵɵelementStart(26, "div", 17)(27, "h3", 18);
            i0.ɵɵtext(28, "Allergens");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p", 19);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(31, Items_Conditional_31_Template, 18, 8, "div", 20);
            i0.ɵɵelement(32, "app-footer");
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeLoader ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.itemPopup ? 2 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.item_gcategory_title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(9, _c2, ctx.lang));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c3, ctx.lang));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.item_gcategory_title);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.category_itemlist ? 22 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.getAllergenString());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.general.calculate_totalcartamount() > 0 ? 31 : -1);
        } }, dependencies: [FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, CommonModule, Header, Footer, RouterLink, i3.DecimalPipe], styles: ["//   items.component.scss\r\n\r\n//   \u2500\u2500   CSS   Custom   Properties   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n[_nghost-%COMP%] {\r\n  --bg-primary:        #0a0c12;\r\n  --bg-card:           #111827;\r\n  --bg-card-hover:     #14203a;\r\n  --bg-card-edge:      #1e2d4a;\r\n  --accent-gold:       #c9a84c;\r\n  --accent-gold-light: #e8c96a;\r\n  --accent-gold-glow:  rgba(201, 168, 76, 0.18);\r\n  --accent-red:        #e02020;\r\n  --accent-red-hover:  #ff3333;\r\n  --text-primary:      #ffffff;\r\n  --text-secondary:    #9ca3af;\r\n  --text-muted:        #6b7280;\r\n  --border-subtle:     rgba(255, 255, 255, 0.06);\r\n  --border-card:       rgba(201, 168, 76, 0.22);\r\n  --shadow-card:       0 4px 24px rgba(0, 0, 0, 0.45);\r\n  --shadow-hover:      0 12px 40px rgba(201, 168, 76, 0.15);\r\n  --radius-card:       14px;\r\n  --radius-btn:        8px;\r\n  --font-display:      baloo 2;\r\n  --font-body:         baloo 2;\r\n  --transition-base:   250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  --transition-slow:   400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Reset[_ngcontent-%COMP%]   &[_ngcontent-%COMP%]   Base[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after { box-sizing: border-box; margin: 0; padding: 0; }\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Page[_ngcontent-%COMP%]   Wrapper[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background: var(--bg-primary);\r\n  background-image:\r\n    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.07) 0%, transparent 70%),\r\n    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(14,30,60,0.5) 0%, transparent 60%);\r\n  font-family: var(--font-body);\r\n  color: var(--text-primary);\r\n  padding: clamp(24px, 5vw, 64px) clamp(16px, 4vw, 48px);\r\n  position: relative;\r\n  overflow-x: hidden;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Page[_ngcontent-%COMP%]   Header[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.page-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: clamp(32px, 5vw, 56px);\r\n  padding-top: 16px;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%] {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(2.4rem, 7vw, 4.5rem);\r\n  font-weight: 900;\r\n  letter-spacing: -0.02em;\r\n  color: var(--text-primary);\r\n  line-height: 1.1;\r\n  text-shadow: 0 2px 20px rgba(201, 168, 76, 0.15);\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n\r\n  // &::after {\r\n  //   content: '';\r\n  //   position: absolute;\r\n  //   bottom: -4px;\r\n  //   left: 50%;\r\n  //   transform: translateX(-50%);\r\n  //   width: 0;\r\n  //   height: 2px;\r\n  //   background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);\r\n  //   animation: expand-line 900ms 300ms ease-out forwards;\r\n  // }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Breadcrumb[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  font-size: 0.9rem;\r\n  margin-bottom: 20px;\r\n  flex-wrap: wrap;\r\n\r\n  &__link {\r\n    color: var(--text-secondary);\r\n    text-decoration: none;\r\n    transition: color var(--transition-base);\r\n    &:hover { color: var(--text-primary); }\r\n  }\r\n\r\n  &__sep     { color: var(--text-muted); }\r\n  &__current { color: var(--accent-gold); font-weight: 700; }\r\n}\r\n\r\n.header-divider[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 3px;\r\n  background: linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light));\r\n  border-radius: 4px;\r\n  margin: 0 auto 20px;\r\n  box-shadow: 0 0 12px var(--accent-gold-glow);\r\n}\r\n\r\n.header-tagline[_ngcontent-%COMP%] {\r\n  color: var(--accent-gold);\r\n  font-size: clamp(0.85rem, 2vw, 1.05rem);\r\n\r\n  // letter-spacing: 0.02em;\r\n  opacity: 0.9;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Menu[_ngcontent-%COMP%]   Grid[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-section[_ngcontent-%COMP%] {\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));\r\n  gap: clamp(14px, 2.5vw, 24px);\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Menu[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: var(--bg-card);\r\n  border: 1px solid var(--border-subtle);\r\n  border-radius: var(--radius-card);\r\n  padding: clamp(16px, 2.5vw, 24px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  box-shadow: var(--shadow-card);\r\n  cursor: default;\r\n  overflow: hidden;\r\n  transition:\r\n    transform       var(--transition-slow),\r\n    box-shadow      var(--transition-slow),\r\n    border-color    var(--transition-slow),\r\n    background      var(--transition-slow);\r\n  will-change: transform;\r\n\r\n  // Animated gradient glow overlay \u2014 only visible on hover\r\n  // .card__glow {\r\n  //   position: absolute;\r\n  //   inset: 0;\r\n  //   background: radial-gradient(\r\n  //     ellipse 80% 60% at 50% 0%,\r\n  //     var(--accent-gold-glow) 0%,\r\n  //     transparent 70%\r\n  //   );\r\n  //   opacity: 0;\r\n  //   transition: opacity var(--transition-slow);\r\n  //   pointer-events: none;\r\n  //   z-index: 0;\r\n  // }\r\n\r\n  .card__content,\r\n  .card__footer { position: relative; z-index: 1; }\r\n\r\n  // \u2500\u2500 Quantity Badge (top-right corner) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // Always rendered; shows \"0\" when empty, highlights gold when > 0\r\n  .card__qty {\r\n    position: absolute;\r\n    top: 14px;\r\n    right: 14px;\r\n    z-index: 2;\r\n    min-width: 28px;\r\n    height: 28px;\r\n    padding: 0 6px;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: transparent;\r\n    border: 1.5px solid rgba(255, 255, 255, 0.20);\r\n    border-radius: 50%;\r\n    font-family: var(--font-body);\r\n    font-size: 0.8rem;\r\n    font-weight: 700;\r\n    color: var(--text-secondary);\r\n    line-height: 1;\r\n    letter-spacing: 0;\r\n    transition:\r\n      background      var(--transition-base),\r\n      color           var(--transition-base),\r\n      border-color    var(--transition-base),\r\n      transform       var(--transition-base),\r\n      box-shadow      var(--transition-base);\r\n\r\n    // Active state \u2014 gold fill, scale up, glow\r\n    &--active {\r\n      background: var(--accent-gold);\r\n      border-color:  var(--accent-gold);\r\n      color: #1a1000;\r\n      transform: scale(1.12);\r\n      box-shadow: 0 0 12px rgba(201, 168, 76, 0.55);\r\n      animation: _ngcontent-%COMP%_pop 300ms cubic-bezier(0.36, 0.07, 0.19, 0.97);\r\n    }\r\n  }\r\n\r\n  // Hover state\r\n  &:hover {\r\n    transform: translateY(-4px) scale(1.01);\r\n    box-shadow: var(--shadow-hover), 0 0 0 1px var(--border-card);\r\n    background: var(--bg-card-hover);\r\n    border-color: var(--border-card);\r\n\r\n    .card__glow { opacity: 1; }\r\n\r\n    .card__title { color: var(--accent-gold-light); }\r\n\r\n    // .btn-cart:not(.btn-cart--added) {\r\n    //   background: var(--accent-gold-light);\r\n    //   box-shadow: 0 0 16px rgba(201, 168, 76, 0.4);\r\n    //   transform: scale(1.03);\r\n    // }\r\n\r\n    .card__qty:not(.card__qty--active) {\r\n      border-color: rgba(255, 255, 255, 0.30);\r\n      color: var(--text-primary);\r\n    }\r\n  }\r\n\r\n  // Flash animation when item is added\r\n  &.card--added {\r\n    border-color: rgba(201, 168, 76, 0.5);\r\n    animation: _ngcontent-%COMP%_card-flash 700ms ease-out;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Title[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card__title[_ngcontent-%COMP%] {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(0.9rem, 1.8vw, 1.05rem);\r\n  font-weight: 700;\r\n  color: var(--text-primary);\r\n  line-height: 1.5;\r\n  transition: color var(--transition-base);\r\n  display: flex;\r\n  align-items: baseline;\r\n  flex-wrap: wrap;\r\n  gap: 5px;\r\n  // Leave right space so qty badge doesn't overlap\r\n  padding-right: 40px;\r\n  margin-bottom: 4px;\r\n\r\n  // Item number prefix \u2014 slightly dimmed\r\n  .card__number {\r\n    color: var(--text-secondary);\r\n    font-weight: 700;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  // Allergen tags rendered inline, e.g. \"(M, N)\"\r\n  .card__tag-group {\r\n    font-family: var(--font-body);\r\n    font-size: 0.78rem;\r\n    font-weight: 700;\r\n    color: var(--accent-gold);\r\n    letter-spacing: 0.04em;\r\n    white-space: nowrap;\r\n    position: relative;\r\n    top: -1px;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Description[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card__description[_ngcontent-%COMP%] {\r\n  font-family: var(--font-body);\r\n  font-size: clamp(0.78rem, 1.4vw, 0.875rem);\r\n  color: var(--text-secondary);\r\n  line-height: 1.7;\r\n  flex: 1;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Footer[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card__footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-top: 6px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Price[_ngcontent-%COMP%]   Badge[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.price-badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: var(--accent-red);\r\n  color: #fff;\r\n  font-family: var(--font-body);\r\n  font-size: 0.88rem;\r\n  font-weight: 700;\r\n  padding: 6px 14px;\r\n  border-radius: var(--radius-btn);\r\n  letter-spacing: 0.02em;\r\n  white-space: nowrap;\r\n  // transition:\r\n  //   background  var(--transition-base),\r\n  //   box-shadow  var(--transition-base);\r\n  // box-shadow: 0 2px 8px rgba(224, 32, 32, 0.3);\r\n\r\n  .menu-card:hover & {\r\n    background: var(--accent-red-hover);\r\n    box-shadow: 0 4px 14px rgba(255, 51, 51, 0.4);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Add[_ngcontent-%COMP%]   to[_ngcontent-%COMP%]   Cart[_ngcontent-%COMP%]   Button[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.btn-cart[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 7px;\r\n  background: var(--accent-gold);\r\n  color: #1a1000;\r\n  font-family: var(--font-body);\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  margin-left: auto;\r\n  padding: 7px 16px;\r\n  border: none;\r\n  border-radius: var(--radius-btn);\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  transition:\r\n    background  var(--transition-base),\r\n    transform   var(--transition-base),\r\n    box-shadow  var(--transition-base),\r\n    color       var(--transition-base);\r\n\r\n  &__icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  // Ripple overlay on press\r\n  &__ripple {\r\n    position: absolute;\r\n    inset: 0;\r\n    border-radius: inherit;\r\n    background: radial-gradient(\r\n      circle,\r\n      rgba(255, 255, 255, 0.35) 0%,\r\n      transparent 70%\r\n    );\r\n    opacity: 0;\r\n    transform: scale(0);\r\n    transition:\r\n      opacity   400ms ease-out,\r\n      transform 400ms ease-out;\r\n    pointer-events: none;\r\n  }\r\n\r\n  &:active {\r\n    transform: scale(0.96) !important;\r\n\r\n    .btn-cart__ripple {\r\n      opacity: 1;\r\n      transform: scale(2);\r\n      transition: none;\r\n    }\r\n  }\r\n\r\n  &:focus-visible {\r\n    outline: 2px solid var(--accent-gold-light);\r\n    outline-offset: 2px;\r\n  }\r\n\r\n  // \u2500\u2500 Added / success state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // &--added {\r\n  //   background: #22c55e !important;\r\n  //   color: #fff !important;\r\n  //   box-shadow: 0 0 20px rgba(34, 197, 94, 0.4) !important;\r\n  //   transform: scale(1) !important;\r\n  //   animation: success-pulse 600ms ease-out;\r\n  // }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Allergens[_ngcontent-%COMP%]   Section[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.allergens-section[_ngcontent-%COMP%] {\r\n  max-width: 1280px;\r\n  margin: clamp(32px, 5vw, 56px) auto 0;\r\n}\r\n\r\n.allergens-card[_ngcontent-%COMP%] {\r\n  background: var(--bg-card);\r\n  border: 1px solid var(--border-subtle);\r\n  border-radius: var(--radius-card);\r\n  display: flex;\r\n  align-items: stretch;\r\n  overflow: hidden;\r\n  padding: clamp(20px, 3vw, 32px) clamp(20px, 3vw, 36px);\r\n  gap: 24px;\r\n  box-shadow: var(--shadow-card);\r\n  transition: border-color var(--transition-slow), box-shadow var(--transition-slow);\r\n\r\n  &:hover {\r\n    border-color: var(--border-card);\r\n    box-shadow: var(--shadow-hover);\r\n  }\r\n}\r\n\r\n.allergens-accent[_ngcontent-%COMP%] {\r\n  width: 4px;\r\n  min-height: 100%;\r\n  background: linear-gradient(180deg, var(--accent-gold), var(--accent-gold-light), var(--accent-gold));\r\n  border-radius: 4px;\r\n  flex-shrink: 0;\r\n  box-shadow: 0 0 12px var(--accent-gold-glow);\r\n}\r\n\r\n.allergens-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.allergens-title[_ngcontent-%COMP%] {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(1.1rem, 2.5vw, 1.4rem);\r\n  font-weight: 700;\r\n  color: var(--accent-gold);\r\n  letter-spacing: 0.01em;\r\n}\r\n\r\n.allergens-list[_ngcontent-%COMP%] {\r\n  font-size: clamp(0.78rem, 1.5vw, 0.9rem);\r\n  color: var(--text-secondary);\r\n  line-height: 1.8;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Keyframe[_ngcontent-%COMP%]   Animations[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n@keyframes[_ngcontent-%COMP%]   expand-line[_ngcontent-%COMP%] {\r\n  from { width: 0; }\r\n  to   { width: 60px; }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_pop {\r\n  0%   { transform: scale(0.6); }\r\n  70%  { transform: scale(1.2); }\r\n  100% { transform: scale(1.12); }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_card-flash {\r\n  0%   { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }\r\n  30%  { box-shadow: 0 0 24px 6px rgba(201, 168, 76, 0.35); }\r\n  100% { box-shadow: var(--shadow-card); }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_success-pulse {\r\n  0%   { transform: scale(1); }\r\n  40%  { transform: scale(1.08); }\r\n  100% { transform: scale(1); }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   Breakpoints[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n@media[_ngcontent-%COMP%]   (max-width: 768px)[_ngcontent-%COMP%] {\r\n  .menu-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .page-wrapper {\r\n    padding: 20px 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .card__footer[_ngcontent-%COMP%] {\r\n    // flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 8px;\r\n  }\r\n\r\n  .btn-cart[_ngcontent-%COMP%] {\r\n   margin-left: auto;\r\n    padding: 7px 16px;\r\n    font-size: 0.95rem;\r\n    justify-content: center;\r\n  }\r\n\r\n  .price-badge[_ngcontent-%COMP%] {\r\n    font-size: 0.95rem;\r\n    padding: 7px 16px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .menu-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Prefers-reduced-motion[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n@media[_ngcontent-%COMP%]   (prefers-reduced-motion: reduce)[_ngcontent-%COMP%] {\r\n  * {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n//[_ngcontent-%COMP%]   ITEM[_ngcontent-%COMP%]   DETAIL[_ngcontent-%COMP%]   POPUP\r\n//[_ngcontent-%COMP%]   ITEM[_ngcontent-%COMP%]   DETAIL[_ngcontent-%COMP%]   POPUP\r\n//[_ngcontent-%COMP%]   ITEM[_ngcontent-%COMP%]   DETAIL[_ngcontent-%COMP%]   POPUP\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   CSS[_ngcontent-%COMP%]   Custom[_ngcontent-%COMP%]   Properties[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Popup[_ngcontent-%COMP%]   Overlay[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n\r\n\r\n\r\n.popup-overlay[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  position: fixed;\r\n  z-index: 999;\r\n  background: rgba($color: #000000, $alpha: 0.5);\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 80%;\r\n  height: auto;\r\n  max-height: 80%;\r\n  overflow: auto;\r\n  position: fixed;\r\n  background: #111827;\r\n  padding: 25px;\r\n  border-radius: 2px;\r\n  z-index: 1000;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 28px;\r\n  right: 24px;\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 0;\r\n  border-radius: 9px;\r\n  background: #030712;\r\n  color: #ffffff;\r\n  font-size: 29px;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\r\n  margin: 8px 0 8px;\r\n  color: #9ca3af;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: #f40012;\r\n  color: #ffffff;\r\n  padding: 7px 13px;\r\n  border-radius: 9px;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 17px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0 0 4px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #ff4b4b;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #8b93a3;\r\n  font-size: 14px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  min-width: 78px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  border: 2px solid #334155;\r\n  background: #1f2937;\r\n  color: #ffffff;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  color: #d9b957;\r\n  border-color: #d9b957;\r\n  box-shadow: 0 8px 17px rgba(217, 185, 87, 0.35);\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button,\r\n.modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  height: 41px;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  background: #1f2937;\r\n  color: #ffffff;\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 45px;\r\n  color: #c2c8d2;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  width: 64px;\r\n}\r\n.modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 75px;\r\n  resize: none;\r\n  border-radius: 9px;\r\n  border: 2px solid #334155;\r\n  background: #1f2937;\r\n  color: #ffffff;\r\n  padding: 13px;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  outline: none;\r\n}\r\n.modal[_ngcontent-%COMP%]   textarea::placeholder[_ngcontent-%COMP%] {\r\n  color: #9ca3af;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 52px;\r\n  border: 0;\r\n  border-radius: 9px;\r\n  background: #C9A84C ;\r\n  color: #000000;\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .cart-btn:disabled[_ngcontent-%COMP%] {\r\n  background: #374151;\r\n  color: #6b7280;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .ready-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #8b93a3;\r\n  font-size: 15px;\r\n  margin: 10px 0 0;\r\n}\r\n\r\n\n\r\n@media (max-width: 1024px) {\r\n  .modal[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    max-width: 90%;\r\n    max-height: 85%;\r\n    padding: 22px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding-right: 52px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    min-width: 88px;\r\n    height: 46px;\r\n    font-size: 15px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%] {\r\n    height: 56px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n\n\r\n@media (max-width: 768px) {\r\n  .modal[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    max-width: 95%;\r\n    max-height: 90%;\r\n    padding: 20px 18px;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  .modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding-right: 56px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\r\n    top: 18px;\r\n    right: 16px;\r\n    width: 42px;\r\n    height: 42px;\r\n    font-size: 28px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    min-width: 90px;\r\n    height: 46px;\r\n    font-size: 15px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button,\r\n[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    height: 44px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 44px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 58px;\r\n    font-size: 18px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    height: 68px;\r\n    font-size: 15px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%] {\r\n    height: 56px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n\n\r\n@media (max-width: 480px) {\r\n  .modal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    max-height: 92%;\r\n    padding: 20px 16px 24px;\r\n    border-radius: 16px 16px 0 0;\r\n    top: auto;\r\n    bottom: 0;\r\n    left: 0;\r\n    transform: none;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n    padding-right: 52px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 6px 11px;\r\n    margin-bottom: 14px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\r\n    top: 16px;\r\n    right: 14px;\r\n    width: 38px;\r\n    height: 38px;\r\n    font-size: 26px;\r\n    border-radius: 8px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\r\n    margin-bottom: 14px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\r\n    gap: 8px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    flex: 1 1 calc(50% - 8px);\r\n    min-width: unset;\r\n    height: 44px;\r\n    font-size: 14px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button,\r\n[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    height: 42px;\r\n    font-size: 18px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 42px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 54px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    height: 64px;\r\n    padding: 10px 12px;\r\n    font-size: 14px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%] {\r\n    height: 52px;\r\n    font-size: 17px;\r\n    border-radius: 10px;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .ready-text[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n\r\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\r\n\r\n\n\r\n@keyframes _ngcontent-%COMP%_toast-enter {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(100%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_toast-enter-mobile {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(100%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\n\r\n@keyframes _ngcontent-%COMP%_value-flip {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(14px) scale(0.88);\r\n  }\r\n  55% {\r\n    opacity: 1;\r\n    transform: translateY(-3px) scale(1.04);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0) scale(1);\r\n  }\r\n}\r\n\r\n\n\r\n@keyframes _ngcontent-%COMP%_icon-added {\r\n  0%   { transform: scale(1); }\r\n  35%  { transform: scale(1.22); }\r\n  65%  { transform: scale(0.94); }\r\n  100% { transform: scale(1); }\r\n}\r\n\r\n\n\r\n@keyframes _ngcontent-%COMP%_btn-confirm {\r\n  0%   { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }\r\n  60%  { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }\r\n  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }\r\n}\r\n\r\n\r\n\r\n\n\r\n.cart-toast[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 24px;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(0);\r\n\r\n  width: 680px;\r\n  max-width: calc(100% - 48px);\r\n  height: 72px;\r\n\r\n  \n\r\n  background: #C9A84C;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 10px 0 14px;\r\n\r\n  border-radius: 18px;\r\n  box-shadow:\r\n    0 12px 40px rgba(0, 0, 0, 0.3),\r\n    0 2px 8px rgba(0, 0, 0, 0.18);\r\n\r\n  z-index: 50;\r\n\r\n  \n\r\n  will-change: transform;\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n\r\n  animation: toast-enter 0.42s cubic-bezier(0.16, 1, 0.3, 1) both;\r\n}\r\n\r\n\r\n\r\n\n\r\n.cart-toast__left[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 14px;\r\n  min-width: 0;\r\n}\r\n\r\n\n\r\n.cart-toast__icon[_ngcontent-%COMP%] {\r\n  width: 46px;\r\n  height: 46px;\r\n  background: #1C1A17;\r\n  border-radius: 13px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #FFF;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.cart-toast__icon.pop[_ngcontent-%COMP%] {\r\n  animation: icon-added 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n.cart-toast__info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1px;\r\n  min-width: 0;\r\n}\r\n\r\n.cart-toast__label[_ngcontent-%COMP%] {\r\n  font-size: 10.5px;\r\n  font-weight: 600;\r\n  color: rgba(28, 26, 23, 0.65);\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.8px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.cart-toast__price[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  font-weight: 800;\r\n  color: #1C1A17;\r\n  line-height: 1.1;\r\n  letter-spacing: -0.5px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.cart-toast__price.updated[_ngcontent-%COMP%] {\r\n  animation: value-flip 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;\r\n}\r\n\r\n.cart-toast__count.updated[_ngcontent-%COMP%] {\r\n  animation: value-flip 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;\r\n}\r\n\r\n\r\n\r\n\n\r\n.cart-toast__btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  height: 48px;\r\n  padding: 0 22px;\r\n\r\n  background: #1C1A17;\r\n  color: #F5F5F5;\r\n\r\n  border: none;\r\n  border-radius: 13px;\r\n  font-family: inherit;\r\n  font-size: 14.5px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.25px;\r\n  cursor: pointer;\r\n  flex-shrink: 0;\r\n  white-space: nowrap;\r\n\r\n  transition:\r\n    background 0.2s ease,\r\n    transform 0.18s ease,\r\n    box-shadow 0.2s ease;\r\n}\r\n\r\n.cart-toast__btn:hover[_ngcontent-%COMP%] {\r\n  background: #2e2b25;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.cart-toast__btn:active[_ngcontent-%COMP%] {\r\n  transform: translateY(0);\r\n  box-shadow: none;\r\n}\r\n\r\n.cart-toast__btn.animate[_ngcontent-%COMP%] {\r\n  animation: btn-confirm 0.5s ease both;\r\n}\r\n\r\n\r\n\r\n\n\r\n@media (max-width: 1024px) {\r\n  .cart-toast[_ngcontent-%COMP%] {\r\n    width: 92%;\r\n    max-width: 92%;\r\n    bottom: 20px;\r\n    height: 68px;\r\n    padding: 0 10px 0 14px;\r\n  }\r\n\r\n  .cart-toast__price[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .cart-toast__btn[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 0 18px;\r\n    height: 46px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\n\r\n@media (max-width: 768px) {\r\n  .cart-toast[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    transform: none;\r\n\r\n    border-radius: 20px 20px 0 0;\r\n    height: 76px;\r\n    padding: 0 16px;\r\n\r\n    box-shadow: 0 -6px 32px rgba(0, 0, 0, 0.2);\r\n    animation-name: toast-enter-mobile;\r\n  }\r\n\r\n  .cart-toast__icon[_ngcontent-%COMP%] {\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n\r\n  .cart-toast__price[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n  }\r\n\r\n  .cart-toast__label[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .cart-toast__btn[_ngcontent-%COMP%] {\r\n    height: 48px;\r\n    padding: 0 18px;\r\n    font-size: 14px;\r\n    border-radius: 12px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\r\n@media (max-width: 480px) {\r\n  .cart-toast[_ngcontent-%COMP%] {\r\n    height: 74px;\r\n    padding: 0 14px;\r\n    gap: 10px;\r\n  }\r\n\r\n  .cart-toast__left[_ngcontent-%COMP%] {\r\n    gap: 11px;\r\n  }\r\n\r\n  .cart-toast__icon[_ngcontent-%COMP%] {\r\n    width: 42px;\r\n    height: 42px;\r\n    border-radius: 11px;\r\n  }\r\n\r\n  .cart-toast__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .cart-toast__label[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .cart-toast__price[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .cart-toast__btn[_ngcontent-%COMP%] {\r\n    height: 46px;\r\n    padding: 0 14px;\r\n    font-size: 13.5px;\r\n    border-radius: 11px;\r\n    gap: 6px;\r\n  }\r\n\r\n  .cart-toast__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .cart-toast,\r\n[_ngcontent-%COMP%]   .cart-toast__price,\r\n[_ngcontent-%COMP%]   .cart-toast__count,\r\n[_ngcontent-%COMP%]   .cart-toast__icon,\r\n[_ngcontent-%COMP%]   .cart-toast__btn[_ngcontent-%COMP%] {\r\n    animation: none !important;\r\n    transition: none !important;\r\n  }\r\n}"], data: { animation: [
                trigger('itemAnimation', [
                    transition(':enter', [
                        style({ opacity: 0, transform: 'translateY(-20px)' }),
                        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
                    ]),
                    transition(':leave', [
                        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
                    ])
                ])
            ] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Items, [{
        type: Component,
        args: [{ selector: 'app-items', imports: [FormsModule, CommonModule, Header, Footer, RouterLink], animations: [
                    trigger('itemAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'translateY(-20px)' }),
                            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
                        ]),
                        transition(':leave', [
                            animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
                        ])
                    ])
                ], template: "<app-header></app-header>\r\n@if (activeLoader) {\r\n  <div class=\"loader-overlay\" id=\"loaderOverlay\">\r\n    <div class=\"loader\"></div>\r\n  </div>\r\n}\r\n@if (itemPopup) {\r\n<div class=\"popup-overlay\"></div>\r\n<div class=\"modal\">\r\n  <button (click)=\"closeItemDetail()\" class=\"close-btn\">\u00D7</button>\r\n  <h1>\r\n    @if(lang == 'no') {\r\n      {{itemDetail.item_namelang}}\r\n    } @else {\r\n      {{itemDetail.item_name}}\r\n    }\r\n  </h1>\r\n  <p class=\"desc\">\r\n    @if(lang == 'no') { {{itemDetail.item_saleinfolang}} } @else { {{itemDetail.item_saleinfo}} }\r\n  </p>\r\n  <div class=\"price\">{{this.general.branch_result?.branch_currencysymbol}}. {{itemDetail.call_itemfinalprice}}</div>\r\n  @if (itemSpecification !== undefined) {\r\n    @for (groupedItem of groupedItemSpecification; track groupedItem; let gIndex = $index) {\r\n      <div class=\"section\">\r\n        <h3>\r\n          @if(lang == 'no') { {{groupedItem.itemgroup_namelang}} } @else { {{groupedItem.itemgroup_name}} }\r\n          <span>@if(groupedItem.itemgroup_mandatory == 1) { * }</span>\r\n          <small>( @if(groupedItem.itemgroup_mandatory == 1) { Required } @else { Optional } )</small>\r\n        </h3>\r\n        <div class=\"options\">\r\n          @for (option of groupedItem.options; track option; let oIndex = $index) {\r\n            <button [class.active]=\"isOptionSelected(option.itemgroupitem_id)\" (click)=\"radioChangeHandler(option.itemgroupitem_id)\">{{option.item_name}}</button>\r\n          }\r\n        </div>\r\n      </div>\r\n    }\r\n    <div class=\"section\">\r\n      <h3>Antall</h3>\r\n      <div class=\"qty\">\r\n        <button (click)=\"addqty(-1)\">-</button>\r\n        <div>{{itemQty}}</div>\r\n        <button (click)=\"addqty(1)\">+</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"section\">\r\n      <h3>Special Instructions <small>(Optional)</small></h3>\r\n      <textarea [(ngModel)]=\"quotationd_instruction\" placeholder=\"Add any special requests or notes...\"></textarea>\r\n    </div>\r\n    <div class=\"gInfoBlock\" #alertCart></div>\r\n    <button [disabled]=\"validateRequiredOption()\" (click)=\"addtoCart()\" class=\"cart-btn\">Legg i handlekurv</button>\r\n    <p class=\"ready-text\"> '{{ validateRequiredOption() }}' Klar til \u00E5 legge i handlekurv</p>\r\n  }\r\n  <div class=\"gInfoBlock\" #alert></div>\r\n</div>\r\n}\r\n\r\n<!-- items.component.html -->\r\n<div class=\"page-wrapper\">\r\n  <!-- Hero Header -->\r\n  <header class=\"page-header\">\r\n    <h1 class=\"page-title\">{{item_gcategory_title}}</h1>\r\n    <nav class=\"breadcrumb\" aria-label=\"Breadcrumb\">\r\n      <a [routerLink]=\"['/', lang, 'home']\" class=\"breadcrumb__link\">Home</a>\r\n      <span class=\"breadcrumb__sep\">/</span>\r\n      <a [routerLink]=\"['/', lang, 'menu']\" class=\"breadcrumb__link\">Menu</a>\r\n      <span class=\"breadcrumb__sep\">/</span>\r\n      <span class=\"breadcrumb__current\">{{item_gcategory_title}}</span>\r\n    </nav>\r\n    <div class=\"header-divider\"></div>\r\n    <p class=\"header-tagline\">Delight your palate with our authentic menu</p>\r\n  </header>\r\n  <!-- Menu Grid -->\r\n  <main class=\"menu-section\">\r\n    @if (category_itemlist) {\r\n    <div class=\"menu-grid\">\r\n      @for (item of category_itemlist; track item;) {\r\n      <article class=\"menu-card\" (click)=\"detail(item)\">\r\n        <!-- Glow overlay -->\r\n        <div class=\"card__glow\"></div>\r\n        <!-- Quantity Badge -->\r\n        @if (general.get_itemincart(item.item_id)) {\r\n          <span class=\"card__qty\">{{ general.get_itemincart(item.item_id) }}</span>\r\n        }\r\n        <!-- Card body -->\r\n        <div class=\"card__content\">\r\n          <h2 class=\"card__title\">\r\n            @if(lang == 'no') {\r\n            {{item.item_namelang}}\r\n            } @else {\r\n            {{item.item_name}}\r\n            }\r\n          </h2>\r\n          <p class=\"card__description\">\r\n            @if(lang == 'no') {\r\n            {{item.item_saleinfolang}}\r\n            } @else {\r\n            {{item.item_saleinfo}}\r\n            }\r\n          </p>\r\n        </div>\r\n        <!-- Card footer -->\r\n        <div class=\"card__footer\">\r\n          <span class=\"price-badge\">{{this.general.branch_result?.branch_currencysymbol}}.\r\n            {{item.call_itemfinalprice}}</span>\r\n          <button class=\"btn-cart\" aria-label=\"Add Chicken Biryani to cart\">\r\n            <span class=\"btn-cart__text\">\r\n              Add to Cart\r\n            </span>\r\n            <span class=\"btn-cart__ripple\"></span>\r\n          </button>\r\n        </div>\r\n      </article>\r\n      }\r\n    </div>\r\n    }\r\n  </main>\r\n  <!-- Allergens Section -->\r\n  <section class=\"allergens-section\">\r\n    <div class=\"allergens-card\">\r\n      <div class=\"allergens-accent\"></div>\r\n      <div class=\"allergens-body\">\r\n        <h3 class=\"allergens-title\">Allergens</h3>\r\n        <p class=\"allergens-list\">{{ getAllergenString() }}</p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n@if(this.general.calculate_totalcartamount() > 0) {\r\n  <div class=\"cart-toast\" [routerLink]=\"['/', lang, 'checkout']\" >\r\n    <div class=\"cart-toast__left\">\r\n      <div class=\"cart-toast__icon\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n          stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n          <circle cx=\"9\" cy=\"21\" r=\"1\" />\r\n          <circle cx=\"20\" cy=\"21\" r=\"1\" />\r\n          <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\" />\r\n        </svg>\r\n      </div>\r\n      <div class=\"cart-toast__info\">\r\n        <span class=\"cart-toast__label\">Total</span>\r\n        <span class=\"cart-toast__price\">{{this.general.branch_result?.branch_currencysymbol}}. {{this.general.calculate_totalcartamount() | number:'1.2-2'}}</span>\r\n      </div>\r\n    </div>\r\n    <button class=\"cart-toast__btn\">\r\n      Checkout\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n        stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" />\r\n        <polyline points=\"12 5 19 12 12 19\" />\r\n      </svg>\r\n    </button>\r\n  </div>\r\n}\r\n\r\n<app-footer></app-footer>", styles: ["// items.component.scss\r\n\r\n// \u2500\u2500 CSS Custom Properties \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n:host {\r\n  --bg-primary:        #0a0c12;\r\n  --bg-card:           #111827;\r\n  --bg-card-hover:     #14203a;\r\n  --bg-card-edge:      #1e2d4a;\r\n  --accent-gold:       #c9a84c;\r\n  --accent-gold-light: #e8c96a;\r\n  --accent-gold-glow:  rgba(201, 168, 76, 0.18);\r\n  --accent-red:        #e02020;\r\n  --accent-red-hover:  #ff3333;\r\n  --text-primary:      #ffffff;\r\n  --text-secondary:    #9ca3af;\r\n  --text-muted:        #6b7280;\r\n  --border-subtle:     rgba(255, 255, 255, 0.06);\r\n  --border-card:       rgba(201, 168, 76, 0.22);\r\n  --shadow-card:       0 4px 24px rgba(0, 0, 0, 0.45);\r\n  --shadow-hover:      0 12px 40px rgba(201, 168, 76, 0.15);\r\n  --radius-card:       14px;\r\n  --radius-btn:        8px;\r\n  --font-display:      baloo 2;\r\n  --font-body:         baloo 2;\r\n  --transition-base:   250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  --transition-slow:   400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n// \u2500\u2500 Reset & Base \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\r\n\r\n// \u2500\u2500 Page Wrapper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.page-wrapper {\r\n  min-height: 100vh;\r\n  background: var(--bg-primary);\r\n  background-image:\r\n    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.07) 0%, transparent 70%),\r\n    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(14,30,60,0.5) 0%, transparent 60%);\r\n  font-family: var(--font-body);\r\n  color: var(--text-primary);\r\n  padding: clamp(24px, 5vw, 64px) clamp(16px, 4vw, 48px);\r\n  position: relative;\r\n  overflow-x: hidden;\r\n}\r\n\r\n// \u2500\u2500 Page Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.page-header {\r\n  text-align: center;\r\n  margin-bottom: clamp(32px, 5vw, 56px);\r\n  padding-top: 16px;\r\n}\r\n\r\n.page-title {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(2.4rem, 7vw, 4.5rem);\r\n  font-weight: 900;\r\n  letter-spacing: -0.02em;\r\n  color: var(--text-primary);\r\n  line-height: 1.1;\r\n  text-shadow: 0 2px 20px rgba(201, 168, 76, 0.15);\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n\r\n  // &::after {\r\n  //   content: '';\r\n  //   position: absolute;\r\n  //   bottom: -4px;\r\n  //   left: 50%;\r\n  //   transform: translateX(-50%);\r\n  //   width: 0;\r\n  //   height: 2px;\r\n  //   background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);\r\n  //   animation: expand-line 900ms 300ms ease-out forwards;\r\n  // }\r\n}\r\n\r\n// \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.breadcrumb {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  font-size: 0.9rem;\r\n  margin-bottom: 20px;\r\n  flex-wrap: wrap;\r\n\r\n  &__link {\r\n    color: var(--text-secondary);\r\n    text-decoration: none;\r\n    transition: color var(--transition-base);\r\n    &:hover { color: var(--text-primary); }\r\n  }\r\n\r\n  &__sep     { color: var(--text-muted); }\r\n  &__current { color: var(--accent-gold); font-weight: 700; }\r\n}\r\n\r\n.header-divider {\r\n  width: 60px;\r\n  height: 3px;\r\n  background: linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light));\r\n  border-radius: 4px;\r\n  margin: 0 auto 20px;\r\n  box-shadow: 0 0 12px var(--accent-gold-glow);\r\n}\r\n\r\n.header-tagline {\r\n  color: var(--accent-gold);\r\n  font-size: clamp(0.85rem, 2vw, 1.05rem);\r\n\r\n  // letter-spacing: 0.02em;\r\n  opacity: 0.9;\r\n}\r\n\r\n// \u2500\u2500 Menu Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-section {\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));\r\n  gap: clamp(14px, 2.5vw, 24px);\r\n}\r\n\r\n// \u2500\u2500 Menu Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-card {\r\n  position: relative;\r\n  background: var(--bg-card);\r\n  border: 1px solid var(--border-subtle);\r\n  border-radius: var(--radius-card);\r\n  padding: clamp(16px, 2.5vw, 24px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  box-shadow: var(--shadow-card);\r\n  cursor: default;\r\n  overflow: hidden;\r\n  transition:\r\n    transform       var(--transition-slow),\r\n    box-shadow      var(--transition-slow),\r\n    border-color    var(--transition-slow),\r\n    background      var(--transition-slow);\r\n  will-change: transform;\r\n\r\n  // Animated gradient glow overlay \u2014 only visible on hover\r\n  // .card__glow {\r\n  //   position: absolute;\r\n  //   inset: 0;\r\n  //   background: radial-gradient(\r\n  //     ellipse 80% 60% at 50% 0%,\r\n  //     var(--accent-gold-glow) 0%,\r\n  //     transparent 70%\r\n  //   );\r\n  //   opacity: 0;\r\n  //   transition: opacity var(--transition-slow);\r\n  //   pointer-events: none;\r\n  //   z-index: 0;\r\n  // }\r\n\r\n  .card__content,\r\n  .card__footer { position: relative; z-index: 1; }\r\n\r\n  // \u2500\u2500 Quantity Badge (top-right corner) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // Always rendered; shows \"0\" when empty, highlights gold when > 0\r\n  .card__qty {\r\n    position: absolute;\r\n    top: 14px;\r\n    right: 14px;\r\n    z-index: 2;\r\n    min-width: 28px;\r\n    height: 28px;\r\n    padding: 0 6px;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: transparent;\r\n    border: 1.5px solid rgba(255, 255, 255, 0.20);\r\n    border-radius: 50%;\r\n    font-family: var(--font-body);\r\n    font-size: 0.8rem;\r\n    font-weight: 700;\r\n    color: var(--text-secondary);\r\n    line-height: 1;\r\n    letter-spacing: 0;\r\n    transition:\r\n      background      var(--transition-base),\r\n      color           var(--transition-base),\r\n      border-color    var(--transition-base),\r\n      transform       var(--transition-base),\r\n      box-shadow      var(--transition-base);\r\n\r\n    // Active state \u2014 gold fill, scale up, glow\r\n    &--active {\r\n      background: var(--accent-gold);\r\n      border-color:  var(--accent-gold);\r\n      color: #1a1000;\r\n      transform: scale(1.12);\r\n      box-shadow: 0 0 12px rgba(201, 168, 76, 0.55);\r\n      animation: pop 300ms cubic-bezier(0.36, 0.07, 0.19, 0.97);\r\n    }\r\n  }\r\n\r\n  // Hover state\r\n  &:hover {\r\n    transform: translateY(-4px) scale(1.01);\r\n    box-shadow: var(--shadow-hover), 0 0 0 1px var(--border-card);\r\n    background: var(--bg-card-hover);\r\n    border-color: var(--border-card);\r\n\r\n    .card__glow { opacity: 1; }\r\n\r\n    .card__title { color: var(--accent-gold-light); }\r\n\r\n    // .btn-cart:not(.btn-cart--added) {\r\n    //   background: var(--accent-gold-light);\r\n    //   box-shadow: 0 0 16px rgba(201, 168, 76, 0.4);\r\n    //   transform: scale(1.03);\r\n    // }\r\n\r\n    .card__qty:not(.card__qty--active) {\r\n      border-color: rgba(255, 255, 255, 0.30);\r\n      color: var(--text-primary);\r\n    }\r\n  }\r\n\r\n  // Flash animation when item is added\r\n  &.card--added {\r\n    border-color: rgba(201, 168, 76, 0.5);\r\n    animation: card-flash 700ms ease-out;\r\n  }\r\n}\r\n\r\n// \u2500\u2500 Card Title \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card__title {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(0.9rem, 1.8vw, 1.05rem);\r\n  font-weight: 700;\r\n  color: var(--text-primary);\r\n  line-height: 1.5;\r\n  transition: color var(--transition-base);\r\n  display: flex;\r\n  align-items: baseline;\r\n  flex-wrap: wrap;\r\n  gap: 5px;\r\n  // Leave right space so qty badge doesn't overlap\r\n  padding-right: 40px;\r\n  margin-bottom: 4px;\r\n\r\n  // Item number prefix \u2014 slightly dimmed\r\n  .card__number {\r\n    color: var(--text-secondary);\r\n    font-weight: 700;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  // Allergen tags rendered inline, e.g. \"(M, N)\"\r\n  .card__tag-group {\r\n    font-family: var(--font-body);\r\n    font-size: 0.78rem;\r\n    font-weight: 700;\r\n    color: var(--accent-gold);\r\n    letter-spacing: 0.04em;\r\n    white-space: nowrap;\r\n    position: relative;\r\n    top: -1px;\r\n  }\r\n}\r\n\r\n// \u2500\u2500 Card Description \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card__description {\r\n  font-family: var(--font-body);\r\n  font-size: clamp(0.78rem, 1.4vw, 0.875rem);\r\n  color: var(--text-secondary);\r\n  line-height: 1.7;\r\n  flex: 1;\r\n}\r\n\r\n// \u2500\u2500 Card Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card__footer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-top: 6px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n// \u2500\u2500 Price Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.price-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  background: var(--accent-red);\r\n  color: #fff;\r\n  font-family: var(--font-body);\r\n  font-size: 0.88rem;\r\n  font-weight: 700;\r\n  padding: 6px 14px;\r\n  border-radius: var(--radius-btn);\r\n  letter-spacing: 0.02em;\r\n  white-space: nowrap;\r\n  // transition:\r\n  //   background  var(--transition-base),\r\n  //   box-shadow  var(--transition-base);\r\n  // box-shadow: 0 2px 8px rgba(224, 32, 32, 0.3);\r\n\r\n  .menu-card:hover & {\r\n    background: var(--accent-red-hover);\r\n    box-shadow: 0 4px 14px rgba(255, 51, 51, 0.4);\r\n  }\r\n}\r\n\r\n// \u2500\u2500 Add to Cart Button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.btn-cart {\r\n  position: relative;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 7px;\r\n  background: var(--accent-gold);\r\n  color: #1a1000;\r\n  font-family: var(--font-body);\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  margin-left: auto;\r\n  padding: 7px 16px;\r\n  border: none;\r\n  border-radius: var(--radius-btn);\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  transition:\r\n    background  var(--transition-base),\r\n    transform   var(--transition-base),\r\n    box-shadow  var(--transition-base),\r\n    color       var(--transition-base);\r\n\r\n  &__icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  // Ripple overlay on press\r\n  &__ripple {\r\n    position: absolute;\r\n    inset: 0;\r\n    border-radius: inherit;\r\n    background: radial-gradient(\r\n      circle,\r\n      rgba(255, 255, 255, 0.35) 0%,\r\n      transparent 70%\r\n    );\r\n    opacity: 0;\r\n    transform: scale(0);\r\n    transition:\r\n      opacity   400ms ease-out,\r\n      transform 400ms ease-out;\r\n    pointer-events: none;\r\n  }\r\n\r\n  &:active {\r\n    transform: scale(0.96) !important;\r\n\r\n    .btn-cart__ripple {\r\n      opacity: 1;\r\n      transform: scale(2);\r\n      transition: none;\r\n    }\r\n  }\r\n\r\n  &:focus-visible {\r\n    outline: 2px solid var(--accent-gold-light);\r\n    outline-offset: 2px;\r\n  }\r\n\r\n  // \u2500\u2500 Added / success state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n  // &--added {\r\n  //   background: #22c55e !important;\r\n  //   color: #fff !important;\r\n  //   box-shadow: 0 0 20px rgba(34, 197, 94, 0.4) !important;\r\n  //   transform: scale(1) !important;\r\n  //   animation: success-pulse 600ms ease-out;\r\n  // }\r\n}\r\n\r\n// \u2500\u2500 Allergens Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.allergens-section {\r\n  max-width: 1280px;\r\n  margin: clamp(32px, 5vw, 56px) auto 0;\r\n}\r\n\r\n.allergens-card {\r\n  background: var(--bg-card);\r\n  border: 1px solid var(--border-subtle);\r\n  border-radius: var(--radius-card);\r\n  display: flex;\r\n  align-items: stretch;\r\n  overflow: hidden;\r\n  padding: clamp(20px, 3vw, 32px) clamp(20px, 3vw, 36px);\r\n  gap: 24px;\r\n  box-shadow: var(--shadow-card);\r\n  transition: border-color var(--transition-slow), box-shadow var(--transition-slow);\r\n\r\n  &:hover {\r\n    border-color: var(--border-card);\r\n    box-shadow: var(--shadow-hover);\r\n  }\r\n}\r\n\r\n.allergens-accent {\r\n  width: 4px;\r\n  min-height: 100%;\r\n  background: linear-gradient(180deg, var(--accent-gold), var(--accent-gold-light), var(--accent-gold));\r\n  border-radius: 4px;\r\n  flex-shrink: 0;\r\n  box-shadow: 0 0 12px var(--accent-gold-glow);\r\n}\r\n\r\n.allergens-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.allergens-title {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(1.1rem, 2.5vw, 1.4rem);\r\n  font-weight: 700;\r\n  color: var(--accent-gold);\r\n  letter-spacing: 0.01em;\r\n}\r\n\r\n.allergens-list {\r\n  font-size: clamp(0.78rem, 1.5vw, 0.9rem);\r\n  color: var(--text-secondary);\r\n  line-height: 1.8;\r\n}\r\n\r\n// \u2500\u2500 Keyframe Animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n@keyframes expand-line {\r\n  from { width: 0; }\r\n  to   { width: 60px; }\r\n}\r\n\r\n@keyframes pop {\r\n  0%   { transform: scale(0.6); }\r\n  70%  { transform: scale(1.2); }\r\n  100% { transform: scale(1.12); }\r\n}\r\n\r\n@keyframes card-flash {\r\n  0%   { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }\r\n  30%  { box-shadow: 0 0 24px 6px rgba(201, 168, 76, 0.35); }\r\n  100% { box-shadow: var(--shadow-card); }\r\n}\r\n\r\n@keyframes success-pulse {\r\n  0%   { transform: scale(1); }\r\n  40%  { transform: scale(1.08); }\r\n  100% { transform: scale(1); }\r\n}\r\n\r\n// \u2500\u2500 Responsive Breakpoints \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n@media (max-width: 768px) {\r\n  .menu-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .page-wrapper {\r\n    padding: 20px 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .card__footer {\r\n    // flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 8px;\r\n  }\r\n\r\n  .btn-cart {\r\n   margin-left: auto;\r\n    padding: 7px 16px;\r\n    font-size: 0.95rem;\r\n    justify-content: center;\r\n  }\r\n\r\n  .price-badge {\r\n    font-size: 0.95rem;\r\n    padding: 7px 16px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .menu-grid {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n// \u2500\u2500 Prefers-reduced-motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n@media (prefers-reduced-motion: reduce) {\r\n  * {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n// ITEM DETAIL POPUP\r\n// ITEM DETAIL POPUP\r\n// ITEM DETAIL POPUP\r\n// \u2500\u2500 CSS Custom Properties \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n\r\n// \u2500\u2500 Popup Overlay \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n\r\n\r\n\r\n.popup-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  position: fixed;\r\n  z-index: 999;\r\n  background: rgba($color: #000000, $alpha: 0.5);\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.modal {\r\n  width: 800px;\r\n  max-width: 80%;\r\n  height: auto;\r\n  max-height: 80%;\r\n  overflow: auto;\r\n  position: fixed;\r\n  background: #111827;\r\n  padding: 25px;\r\n  border-radius: 2px;\r\n  z-index: 1000;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n}\r\n\r\n.modal .close-btn {\r\n  position: absolute;\r\n  top: 28px;\r\n  right: 24px;\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 0;\r\n  border-radius: 9px;\r\n  background: #030712;\r\n  color: #ffffff;\r\n  font-size: 29px;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal h1 {\r\n  margin: 0;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.modal .desc {\r\n  margin: 8px 0 8px;\r\n  color: #9ca3af;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.modal .price {\r\n  display: inline-block;\r\n  background: #f40012;\r\n  color: #ffffff;\r\n  padding: 7px 13px;\r\n  border-radius: 9px;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.modal .section {\r\n  margin-top: 0;\r\n  margin-bottom: 17px;\r\n}\r\n\r\n.modal h3 {\r\n  margin: 0 0 4px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.modal h3 span {\r\n  color: #ff4b4b;\r\n}\r\n\r\n.modal h3 small {\r\n  color: #8b93a3;\r\n  font-size: 14px;\r\n}\r\n\r\n.modal .options {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.modal .options button {\r\n  min-width: 78px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  border: 2px solid #334155;\r\n  background: #1f2937;\r\n  color: #ffffff;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.modal .options .active {\r\n  color: #d9b957;\r\n  border-color: #d9b957;\r\n  box-shadow: 0 8px 17px rgba(217, 185, 87, 0.35);\r\n}\r\n\r\n.modal .qty {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.modal .qty button,\r\n.modal .qty div {\r\n  height: 41px;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  background: #1f2937;\r\n  color: #ffffff;\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.modal .qty button {\r\n  width: 45px;\r\n  color: #c2c8d2;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal .qty div {\r\n  width: 64px;\r\n}\r\n.modal textarea {\r\n  width: 100%;\r\n  height: 75px;\r\n  resize: none;\r\n  border-radius: 9px;\r\n  border: 2px solid #334155;\r\n  background: #1f2937;\r\n  color: #ffffff;\r\n  padding: 13px;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  outline: none;\r\n}\r\n.modal textarea::placeholder {\r\n  color: #9ca3af;\r\n}\r\n\r\n.modal .cart-btn {\r\n  width: 100%;\r\n  height: 52px;\r\n  border: 0;\r\n  border-radius: 9px;\r\n  background: #C9A84C ;\r\n  color: #000000;\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n}\r\n\r\n.modal .cart-btn:disabled {\r\n  background: #374151;\r\n  color: #6b7280;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.modal .ready-text {\r\n  text-align: center;\r\n  color: #8b93a3;\r\n  font-size: 15px;\r\n  margin: 10px 0 0;\r\n}\r\n\r\n/* \u2500\u2500 Tablet (portrait + landscape) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n@media (max-width: 1024px) {\r\n  .modal {\r\n    width: 90%;\r\n    max-width: 90%;\r\n    max-height: 85%;\r\n    padding: 22px;\r\n  }\r\n  .modal h1 {\r\n    font-size: 20px;\r\n    padding-right: 52px;\r\n  }\r\n  .modal .options button {\r\n    min-width: 88px;\r\n    height: 46px;\r\n    font-size: 15px;\r\n  }\r\n  .modal .cart-btn {\r\n    height: 56px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* \u2500\u2500 Mobile landscape \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n@media (max-width: 768px) {\r\n  .modal {\r\n    width: 95%;\r\n    max-width: 95%;\r\n    max-height: 90%;\r\n    padding: 20px 18px;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  .modal h1 {\r\n    font-size: 20px;\r\n    padding-right: 56px;\r\n  }\r\n  .modal .desc {\r\n    font-size: 15px;\r\n  }\r\n  .modal .close-btn {\r\n    top: 18px;\r\n    right: 16px;\r\n    width: 42px;\r\n    height: 42px;\r\n    font-size: 28px;\r\n  }\r\n  .modal .options {\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n  }\r\n  .modal .options button {\r\n    min-width: 90px;\r\n    height: 46px;\r\n    font-size: 15px;\r\n  }\r\n  .modal .qty button,\r\n  .modal .qty div {\r\n    height: 44px;\r\n  }\r\n  .modal .qty button {\r\n    width: 44px;\r\n  }\r\n  .modal .qty div {\r\n    width: 58px;\r\n    font-size: 18px;\r\n  }\r\n  .modal textarea {\r\n    height: 68px;\r\n    font-size: 15px;\r\n  }\r\n  .modal .cart-btn {\r\n    height: 56px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* \u2500\u2500 Mobile portrait (small phones) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n@media (max-width: 480px) {\r\n  .modal {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    max-height: 92%;\r\n    padding: 20px 16px 24px;\r\n    border-radius: 16px 16px 0 0;\r\n    top: auto;\r\n    bottom: 0;\r\n    left: 0;\r\n    transform: none;\r\n  }\r\n  .modal h1 {\r\n    font-size: 19px;\r\n    padding-right: 52px;\r\n  }\r\n  .modal .desc {\r\n    font-size: 14px;\r\n  }\r\n  .modal .price {\r\n    font-size: 14px;\r\n    padding: 6px 11px;\r\n    margin-bottom: 14px;\r\n  }\r\n  .modal h3 {\r\n    font-size: 15px;\r\n  }\r\n  .modal h3 small {\r\n    font-size: 13px;\r\n  }\r\n  .modal .close-btn {\r\n    top: 16px;\r\n    right: 14px;\r\n    width: 38px;\r\n    height: 38px;\r\n    font-size: 26px;\r\n    border-radius: 8px;\r\n  }\r\n  .modal .section {\r\n    margin-bottom: 14px;\r\n  }\r\n  .modal .options {\r\n    gap: 8px;\r\n  }\r\n  .modal .options button {\r\n    flex: 1 1 calc(50% - 8px);\r\n    min-width: unset;\r\n    height: 44px;\r\n    font-size: 14px;\r\n  }\r\n  .modal .qty button,\r\n  .modal .qty div {\r\n    height: 42px;\r\n    font-size: 18px;\r\n  }\r\n  .modal .qty button {\r\n    width: 42px;\r\n  }\r\n  .modal .qty div {\r\n    width: 54px;\r\n  }\r\n  .modal textarea {\r\n    height: 64px;\r\n    padding: 10px 12px;\r\n    font-size: 14px;\r\n  }\r\n  .modal .cart-btn {\r\n    height: 52px;\r\n    font-size: 17px;\r\n    border-radius: 10px;\r\n  }\r\n  .modal .ready-text {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n\r\n/* ===== cart-toast.css ===== */\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   CART TOAST \u2014 Full Fixed CSS\r\n   \u2460 Toast background: gold #C6A75E (restored)\r\n   \u2461 Icon box: dark charcoal on gold (readable contrast)\r\n   \u2462 Button: dark charcoal background, white text\r\n   \u2463 Mobile scroll shake fixed\r\n   \u2464 Mobile height: 76px\r\n   \u2465 Smooth animations\r\n   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n\r\n/* \u2500\u2500 Entrance \u2500\u2500 */\r\n@keyframes toast-enter {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(100%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes toast-enter-mobile {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(100%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n/* \u2500\u2500 Price/count flip on update \u2500\u2500 */\r\n@keyframes value-flip {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(14px) scale(0.88);\r\n  }\r\n  55% {\r\n    opacity: 1;\r\n    transform: translateY(-3px) scale(1.04);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0) scale(1);\r\n  }\r\n}\r\n\r\n/* \u2500\u2500 Icon pop when item added \u2500\u2500 */\r\n@keyframes icon-added {\r\n  0%   { transform: scale(1); }\r\n  35%  { transform: scale(1.22); }\r\n  65%  { transform: scale(0.94); }\r\n  100% { transform: scale(1); }\r\n}\r\n\r\n/* \u2500\u2500 Button ripple on add \u2500\u2500 */\r\n@keyframes btn-confirm {\r\n  0%   { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }\r\n  60%  { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }\r\n  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   TOAST WRAPPER\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n.cart-toast {\r\n  position: fixed;\r\n  bottom: 24px;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(0);\r\n\r\n  width: 680px;\r\n  max-width: calc(100% - 48px);\r\n  height: 72px;\r\n\r\n  /* Gold background \u2014 restored */\r\n  background: #C9A84C;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 10px 0 14px;\r\n\r\n  border-radius: 18px;\r\n  box-shadow:\r\n    0 12px 40px rgba(0, 0, 0, 0.3),\r\n    0 2px 8px rgba(0, 0, 0, 0.18);\r\n\r\n  z-index: 50;\r\n\r\n  /* Prevents mobile scroll repaint shake */\r\n  will-change: transform;\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n\r\n  animation: toast-enter 0.42s cubic-bezier(0.16, 1, 0.3, 1) both;\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   LEFT SIDE\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n.cart-toast__left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 14px;\r\n  min-width: 0;\r\n}\r\n\r\n/* Icon box \u2014 dark so it pops off gold */\r\n.cart-toast__icon {\r\n  width: 46px;\r\n  height: 46px;\r\n  background: #1C1A17;\r\n  border-radius: 13px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #FFF;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.cart-toast__icon.pop {\r\n  animation: icon-added 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n.cart-toast__info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1px;\r\n  min-width: 0;\r\n}\r\n\r\n.cart-toast__label {\r\n  font-size: 10.5px;\r\n  font-weight: 600;\r\n  color: rgba(28, 26, 23, 0.65);\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.8px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.cart-toast__price {\r\n  font-size: 22px;\r\n  font-weight: 800;\r\n  color: #1C1A17;\r\n  line-height: 1.1;\r\n  letter-spacing: -0.5px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.cart-toast__price.updated {\r\n  animation: value-flip 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;\r\n}\r\n\r\n.cart-toast__count.updated {\r\n  animation: value-flip 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   BUTTON \u2014 dark charcoal, crisp on gold\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n.cart-toast__btn {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  height: 48px;\r\n  padding: 0 22px;\r\n\r\n  background: #1C1A17;\r\n  color: #F5F5F5;\r\n\r\n  border: none;\r\n  border-radius: 13px;\r\n  font-family: inherit;\r\n  font-size: 14.5px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.25px;\r\n  cursor: pointer;\r\n  flex-shrink: 0;\r\n  white-space: nowrap;\r\n\r\n  transition:\r\n    background 0.2s ease,\r\n    transform 0.18s ease,\r\n    box-shadow 0.2s ease;\r\n}\r\n\r\n.cart-toast__btn:hover {\r\n  background: #2e2b25;\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.cart-toast__btn:active {\r\n  transform: translateY(0);\r\n  box-shadow: none;\r\n}\r\n\r\n.cart-toast__btn.animate {\r\n  animation: btn-confirm 0.5s ease both;\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   TABLET  (\u2264 1024px)\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n@media (max-width: 1024px) {\r\n  .cart-toast {\r\n    width: 92%;\r\n    max-width: 92%;\r\n    bottom: 20px;\r\n    height: 68px;\r\n    padding: 0 10px 0 14px;\r\n  }\r\n\r\n  .cart-toast__price {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .cart-toast__btn {\r\n    font-size: 14px;\r\n    padding: 0 18px;\r\n    height: 46px;\r\n  }\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   MOBILE  (\u2264 768px)\r\n   transform: none removes the translateX that caused scroll shake\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n@media (max-width: 768px) {\r\n  .cart-toast {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    transform: none;\r\n\r\n    border-radius: 20px 20px 0 0;\r\n    height: 76px;\r\n    padding: 0 16px;\r\n\r\n    box-shadow: 0 -6px 32px rgba(0, 0, 0, 0.2);\r\n    animation-name: toast-enter-mobile;\r\n  }\r\n\r\n  .cart-toast__icon {\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n\r\n  .cart-toast__price {\r\n    font-size: 19px;\r\n  }\r\n\r\n  .cart-toast__label {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .cart-toast__btn {\r\n    height: 48px;\r\n    padding: 0 18px;\r\n    font-size: 14px;\r\n    border-radius: 12px;\r\n  }\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   MOBILE PORTRAIT  (\u2264 480px)\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n@media (max-width: 480px) {\r\n  .cart-toast {\r\n    height: 74px;\r\n    padding: 0 14px;\r\n    gap: 10px;\r\n  }\r\n\r\n  .cart-toast__left {\r\n    gap: 11px;\r\n  }\r\n\r\n  .cart-toast__icon {\r\n    width: 42px;\r\n    height: 42px;\r\n    border-radius: 11px;\r\n  }\r\n\r\n  .cart-toast__icon svg {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .cart-toast__label {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .cart-toast__price {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .cart-toast__btn {\r\n    height: 46px;\r\n    padding: 0 14px;\r\n    font-size: 13.5px;\r\n    border-radius: 11px;\r\n    gap: 6px;\r\n  }\r\n\r\n  .cart-toast__btn svg {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   REDUCED MOTION\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n@media (prefers-reduced-motion: reduce) {\r\n  .cart-toast,\r\n  .cart-toast__price,\r\n  .cart-toast__count,\r\n  .cart-toast__icon,\r\n  .cart-toast__btn {\r\n    animation: none !important;\r\n    transition: none !important;\r\n  }\r\n}"] }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1.HttpClient }, { type: i0.ChangeDetectorRef }], { alert: [{
            type: ViewChild,
            args: ['alert']
        }], alertCart: [{
            type: ViewChild,
            args: ['alertCart']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Items, { className: "Items", filePath: "app/pages/items/items.ts", lineNumber: 34 }); })();

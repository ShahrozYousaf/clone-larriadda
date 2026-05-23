import { Component, Inject, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { APP_CONFIG } from '../../app.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/general";
import * as i3 from "@angular/common/http";
const _c0 = ["alert"];
const _c1 = a0 => ["/", a0, "home"];
const _c2 = (a0, a1) => ["/", a0, "items", a1];
function Menu_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "div", 19);
    i0.ɵɵelementEnd();
} }
function Menu_Conditional_18_For_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const category_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", category_r2.lookupdetail_title_no, " ");
} }
function Menu_Conditional_18_For_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const category_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", category_r2.item_gcategory_title, " ");
} }
function Menu_Conditional_18_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵelement(2, "img", 22);
    i0.ɵɵelementStart(3, "div", 23)(4, "div", 24)(5, "span", 25);
    i0.ɵɵtext(6, "EXPLORE");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(7, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 27)(9, "span", 28);
    i0.ɵɵconditionalCreate(10, Menu_Conditional_18_For_2_Conditional_10_Template, 1, 1)(11, Menu_Conditional_18_For_2_Conditional_11_Template, 1, 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(5, _c2, ctx_r2.lang, category_r2.item_gcategory));
    i0.ɵɵattribute("aria-label", "Explore " + category_r2.item_gcategory_title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", category_r2.item_gcategory_img ? `https://apps.sahl24.com/lookup_img/` + category_r2.item_gcategory_img : "/images/default_catrgory_image.png", i0.ɵɵsanitizeUrl)("alt", category_r2.item_gcategory_title);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r2.lang == "no" ? 10 : 11);
} }
function Menu_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵrepeaterCreate(1, Menu_Conditional_18_For_2_Template, 12, 8, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.general.categories_list);
} }
export class Menu {
    config;
    router;
    general;
    http;
    cdr;
    activeLoader = false;
    route = inject(ActivatedRoute);
    languageService = inject(LanguageService);
    lang = this.languageService.getLangFromRoute(this.route);
    menuCategories = undefined;
    alert;
    constructor(config, router, general, http, cdr) {
        this.config = config;
        this.router = router;
        this.general = general;
        this.http = http;
        this.cdr = cdr;
        this.general.setup();
    }
    downloadMenu(language) {
        const fileMap = {
            english: 'assets/menus/menu-english.pdf',
            norwegian: 'assets/menus/menu-norwegian.pdf',
        };
        const link = document.createElement('a');
        link.href = fileMap[language];
        link.download = `menu-${language}.pdf`;
        link.click();
    }
    ngOnInit() {
        if (this.general.latestmenu_loaded === false) {
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
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.activeLoader = false;
            this.general.updateReponse(response);
            this.general.setup();
            this.general.menuLoaded();
            this.cdr.detectChanges();
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
    static ɵfac = function Menu_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Menu)(i0.ɵɵdirectiveInject(APP_CONFIG), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.General), i0.ɵɵdirectiveInject(i3.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Menu, selectors: [["app-menu"]], viewQuery: function Menu_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.alert = _t.first);
        } }, decls: 34, vars: 11, consts: [["alert", ""], [1, "menu-section"], [1, "menu-hero"], [1, "menu-title"], ["aria-label", "Breadcrumb", 1, "breadcrumb"], [1, "breadcrumb__link", 3, "routerLink"], [1, "breadcrumb__sep"], [1, "breadcrumb__current"], [1, "divider-line"], [1, "tagline"], ["id", "loaderOverlay", 1, "loader-overlay"], [1, "gInfoBlock"], [1, "menu-grid"], [1, "menu-download-section"], [1, "download-title"], [1, "download-subtitle"], [1, "download-buttons"], [1, "download-btn", 3, "click"], [1, "dl-icon"], [1, "loader"], ["role", "button", "tabindex", "0", 1, "menu-card", 3, "routerLink"], [1, "card-image-wrapper"], ["loading", "lazy", 1, "card-img", 3, "src", "alt"], [1, "card-overlay"], [1, "explore-btn"], [1, "explore-text"], [1, "card-shine"], [1, "card-footer"], [1, "card-name"]], template: function Menu_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "app-header");
            i0.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "h1", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "nav", 4)(6, "a", 5);
            i0.ɵɵtext(7, "Home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 6);
            i0.ɵɵtext(9, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "a", 7);
            i0.ɵɵtext(11, "Menu");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(12, "div", 8);
            i0.ɵɵelementStart(13, "p", 9);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(15, Menu_Conditional_15_Template, 2, 0, "div", 10);
            i0.ɵɵelement(16, "div", 11, 0);
            i0.ɵɵconditionalCreate(18, Menu_Conditional_18_Template, 3, 0, "div", 12);
            i0.ɵɵelementStart(19, "div", 13)(20, "h2", 14);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "p", 15);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 16)(25, "button", 17);
            i0.ɵɵlistener("click", function Menu_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.downloadMenu("english")); });
            i0.ɵɵelementStart(26, "span", 18);
            i0.ɵɵtext(27, "\u21D3");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "button", 17);
            i0.ɵɵlistener("click", function Menu_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.downloadMenu("norwegian")); });
            i0.ɵɵelementStart(30, "span", 18);
            i0.ɵɵtext(31, "\u21D3");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelement(33, "app-footer");
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "ourmenu"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(9, _c1, ctx.lang));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "menutagline"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeLoader ? 15 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.general.categories_list ? 18 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "getmenu"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "getmenudescription"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "getmenubutton1"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "getmenubutton2"), " ");
        } }, dependencies: [Header, Footer, RouterLink, RouterModule], styles: ["//   menu-section.component.scss\r\n\r\n//   \u2500\u2500\u2500   CSS   Variables   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n[_nghost-%COMP%] {\r\n  --color-bg:         #000000;\r\n  --color-card-bg:    #ffffff;\r\n  --color-footer-bg:  #0f1a2e;\r\n  --color-gold:       #c9a84c;\r\n  --color-gold-light: #e2b96a;\r\n  --color-white:      #ffffff;\r\n  --color-muted:      #a0a8b8;\r\n  --color-overlay:    rgba(10, 20, 45, 0.72);\r\n  --color-overlay-hover: rgba(10, 20, 45, 0.55);\r\n  --card-radius:      16px;\r\n  --font-display:     baloo 2;\r\n  --font-body:        baloo 2;\r\n  --transition-base:  0.38s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Google[_ngcontent-%COMP%]   Fonts[_ngcontent-%COMP%]   Import[_ngcontent-%COMP%]   (add to styles.scss in real project)[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n//[_ngcontent-%COMP%]   @import[_ngcontent-%COMP%]   url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;700&display=swap')[_ngcontent-%COMP%];\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Section[_ngcontent-%COMP%]   Shell[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-section[_ngcontent-%COMP%] {\r\n  background-color: var(--color-bg);\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  font-family: var(--font-body);\r\n  color: var(--color-white);\r\n  padding-bottom: 80px;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Hero[_ngcontent-%COMP%]   Header[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-hero[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 72px 24px 56px;\r\n  text-align: center;\r\n}\r\n\r\n.menu-title[_ngcontent-%COMP%] {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(2.8rem, 6vw, 5rem);\r\n  font-weight: 800;\r\n  color: var(--color-white);\r\n  letter-spacing: -0.5px;\r\n  margin: 0 0 18px;\r\n  line-height: 1.1;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Breadcrumbs\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 6px;\r\n  font-size: 0.9rem;\r\n  margin-bottom: 20px;\r\n  flex-wrap: wrap;\r\n\r\n\r\n  &__link {\r\n    color: #9ca3af;\r\n    text-decoration: none;\r\n    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    &:hover { \r\n      color: #ffffff;\r\n      \r\n    }\r\n  }\r\n\r\n  &__sep     { \r\n    color: #9ca3af;\r\n    margin: 0 2px;\r\n  }\r\n  &__current { \r\n    color: #c9a84c; \r\n    font-weight: 700;\r\n    }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Gold[_ngcontent-%COMP%]   Divider\r\n.divider-line[_ngcontent-%COMP%] {\r\n    width: 60px; \r\n    height: 3px;             \r\n    background: #d4af37;     \r\n    border-radius: 50px;      \r\n    margin: 0 auto 24px;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Tagline\r\n.tagline[_ngcontent-%COMP%] {\r\n  // font-family: var(--font-body);\r\n  font-size: 1rem;\r\n  color: var(--color-gold);\r\n  font-weight: 400;\r\n  margin: 0;\r\n  opacity: 0.9;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Menu[_ngcontent-%COMP%]   Grid[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 24px;\r\n  padding: 0 40px;\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n\r\n  // 3 columns on medium screens\r\n  @media (max-width: 1200px) {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    padding: 0 28px;\r\n    gap: 20px;\r\n  }\r\n\r\n  // 2 columns on tablet\r\n  @media (max-width: 860px) {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 0 20px;\r\n    gap: 16px;\r\n  }\r\n\r\n  // 1 column on mobile\r\n  @media (max-width: 540px) {\r\n    grid-template-columns: 1fr;\r\n    padding: 0 16px;\r\n    gap: 14px;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Menu[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border-radius: var(--card-radius);\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  background: var(--color-card-bg);\r\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);\r\n  outline: none;\r\n\r\n  // Gold border bottom accent on hover\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 3px;\r\n    background: linear-gradient(90deg, var(--color-gold), var(--color-gold-light), var(--color-gold));\r\n    transform: scaleX(0);\r\n    transform-origin: left;\r\n    transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);\r\n    z-index: 5;\r\n  }\r\n\r\n  &:hover::after,\r\n  &:focus-visible::after {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  &:focus-visible {\r\n    box-shadow: 0 0 0 3px var(--color-gold), 0 4px 24px rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  // Lift on hover\r\n  transition: transform var(--transition-base), box-shadow var(--transition-base);\r\n\r\n  &:hover,\r\n  &:focus-visible {\r\n    transform: translateY(-6px) scale(1.015);\r\n    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.65);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Image[_ngcontent-%COMP%]   Wrapper[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-image-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  aspect-ratio: 4 / 3;\r\n  overflow: hidden;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.card-img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  display: block;\r\n  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1),\r\n              filter 0.38s ease;\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    transform: scale(1.08);\r\n    filter: brightness(0.6);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Overlay[_ngcontent-%COMP%]   (visible on hover)[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  inset: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-base);\r\n  z-index: 2;\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.explore-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 8px;\r\n  transform: translateY(12px);\r\n  transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.explore-icon[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  color: var(--color-gold);\r\n  display: block;\r\n  animation: none;\r\n\r\n  .menu-card:hover & {\r\n    animation: _ngcontent-%COMP%_pulseArrow 0.8s ease-in-out infinite alternate;\r\n  }\r\n}\r\n\r\n.explore-text[_ngcontent-%COMP%] {\r\n  font-family: var(--font-body);\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  letter-spacing: 3px;\r\n  color: var(--color-white);\r\n  text-transform: uppercase;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_pulseArrow {\r\n  from { transform: translateX(0); }\r\n  to   { transform: translateX(5px); }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Shine[_ngcontent-%COMP%]   Sweep[_ngcontent-%COMP%]   Effect[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-shine[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  inset: 0;\r\n  z-index: 3;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  border-radius: var(--card-radius);\r\n\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: -60%;\r\n    left: -60%;\r\n    width: 60%;\r\n    height: 220%;\r\n    background: linear-gradient(\r\n      105deg,\r\n      transparent 30%,\r\n      rgba(255, 255, 255, 0.14) 50%,\r\n      transparent 70%\r\n    );\r\n    transform: translateX(-100%) rotate(5deg);\r\n    transition: none;\r\n  }\r\n\r\n  .menu-card:hover &::after {\r\n    transition: transform 0.6s ease;\r\n    transform: translateX(300%) rotate(5deg);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Footer[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-footer[_ngcontent-%COMP%] {\r\n  background-color: var(--color-footer-bg);\r\n  padding: 14px 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 52px;\r\n  transition: background-color var(--transition-base);\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    background-color: #182845;\r\n  }\r\n}\r\n\r\n.card-name[_ngcontent-%COMP%] {\r\n  font-family: var(--font-body);\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: var(--color-white);\r\n  text-align: center;\r\n  letter-spacing: 0.3px;\r\n  transition: color var(--transition-base);\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    color: var(--color-gold-light);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Download[_ngcontent-%COMP%]   CTA[_ngcontent-%COMP%]   Section[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-download-section[_ngcontent-%COMP%] {\r\n  margin-top: 80px;\r\n  padding: 72px 24px;\r\n  background: linear-gradient(180deg, #07101f 0%, #0d1b33 100%);\r\n  text-align: center;\r\n}\r\n\r\n.download-title[_ngcontent-%COMP%] {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(2rem, 4vw, 3rem);\r\n  font-weight: 700;\r\n  color: var(--color-gold);\r\n  margin: 0 0 14px;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.download-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  color: var(--color-muted);\r\n  margin: 0 0 42px;\r\n  letter-spacing: 0.3px;\r\n}\r\n\r\n.download-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.download-btn[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background: var(--color-gold);\r\n  color: #0a1020;\r\n  border: none;\r\n  border-radius: 12px;\r\n  padding: 16px 36px;\r\n  font-family: var(--font-body);\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  cursor: pointer;\r\n  transition: background var(--transition-base),\r\n              transform var(--transition-base),\r\n              box-shadow var(--transition-base);\r\n  min-width: 220px;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 18px rgba(201, 168, 76, 0.25);\r\n\r\n  &:hover {\r\n    background: var(--color-gold-light);\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 10px 32px rgba(201, 168, 76, 0.4);\r\n  }\r\n\r\n  &:active {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .dl-icon {\r\n    font-size: 1.2rem;\r\n    font-weight: 900;\r\n  }\r\n\r\n  @media (max-width: 480px) {\r\n    min-width: 100%;\r\n    padding: 14px 24px;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Menu, [{
        type: Component,
        args: [{ selector: 'app-menu', imports: [Header, Footer, RouterLink, RouterModule], template: "<app-header></app-header>\r\n<!-- menu-section.component.html -->\r\n<section class=\"menu-section\">\r\n  <!-- Hero Header -->\r\n  <div class=\"menu-hero\">\r\n    <h1 class=\"menu-title\">{{ languageService.t(lang, 'ourmenu') }}</h1>\r\n    <nav class=\"breadcrumb\" aria-label=\"Breadcrumb\">\r\n        <a [routerLink]=\"['/', lang, 'home']\" class=\"breadcrumb__link\">Home</a>\r\n        <span class=\"breadcrumb__sep\">/</span>\r\n        <a class=\"breadcrumb__current\">Menu</a>\r\n    </nav>\r\n\r\n    <div class=\"divider-line\"></div>\r\n    <p class=\"tagline\">{{ languageService.t(lang, 'menutagline') }}</p>\r\n  </div>\r\n  <!-- Menu Categories Grid -->\r\n  @if (activeLoader) {\r\n    <div class=\"loader-overlay\" id=\"loaderOverlay\">\r\n      <div class=\"loader\"></div>\r\n    </div>\r\n  }\r\n  <div class=\"gInfoBlock\" #alert>\r\n  </div>\r\n  @if (general.categories_list) {    \r\n    <div class=\"menu-grid\">\r\n      @for (category of general.categories_list; track category) {\r\n      <div [routerLink]=\"['/', lang, 'items', category.item_gcategory]\" class=\"menu-card\" [attr.aria-label]=\"'Explore ' + category.item_gcategory_title\" role=\"button\" tabindex=\"0\">\r\n        <div class=\"card-image-wrapper\">\r\n          <img\r\n            [src]=\"category.item_gcategory_img ? `https://apps.sahl24.com/lookup_img/`+category.item_gcategory_img : '/images/default_catrgory_image.png'\"\r\n            [alt]=\"category.item_gcategory_title\"\r\n            class=\"card-img\"\r\n            loading=\"lazy\"\r\n          />\r\n          <div class=\"card-overlay\">\r\n            <div class=\"explore-btn\">\r\n              <span class=\"explore-text\">EXPLORE</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-shine\"></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <span class=\"card-name\">\r\n            @if(lang == 'no') {\r\n              {{ category.lookupdetail_title_no }}\r\n            } @else {\r\n              {{ category.item_gcategory_title }}\r\n            }            \r\n          </span>\r\n        </div>\r\n      </div>\r\n      }\r\n    </div>\r\n  }\r\n\r\n  <!-- Download CTA -->\r\n  <div class=\"menu-download-section\">\r\n    <h2 class=\"download-title\">{{ languageService.t(lang, 'getmenu') }}</h2>\r\n    <p class=\"download-subtitle\">{{ languageService.t(lang, 'getmenudescription') }}</p>\r\n    <div class=\"download-buttons\">\r\n      <button class=\"download-btn\" (click)=\"downloadMenu('english')\">\r\n        <span class=\"dl-icon\">&#8659;</span>\r\n        {{ languageService.t(lang, 'getmenubutton1') }}\r\n      </button>\r\n      <button class=\"download-btn\" (click)=\"downloadMenu('norwegian')\">\r\n        <span class=\"dl-icon\">&#8659;</span>\r\n        {{ languageService.t(lang, 'getmenubutton2') }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n<app-footer></app-footer>\r\n", styles: ["// menu-section.component.scss\r\n\r\n// \u2500\u2500\u2500 CSS Variables \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n:host {\r\n  --color-bg:         #000000;\r\n  --color-card-bg:    #ffffff;\r\n  --color-footer-bg:  #0f1a2e;\r\n  --color-gold:       #c9a84c;\r\n  --color-gold-light: #e2b96a;\r\n  --color-white:      #ffffff;\r\n  --color-muted:      #a0a8b8;\r\n  --color-overlay:    rgba(10, 20, 45, 0.72);\r\n  --color-overlay-hover: rgba(10, 20, 45, 0.55);\r\n  --card-radius:      16px;\r\n  --font-display:     baloo 2;\r\n  --font-body:        baloo 2;\r\n  --transition-base:  0.38s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n// \u2500\u2500\u2500 Google Fonts Import (add to styles.scss in real project) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;700&display=swap');\r\n\r\n// \u2500\u2500\u2500 Section Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-section {\r\n  background-color: var(--color-bg);\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  font-family: var(--font-body);\r\n  color: var(--color-white);\r\n  padding-bottom: 80px;\r\n}\r\n\r\n// \u2500\u2500\u2500 Hero Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-hero {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 72px 24px 56px;\r\n  text-align: center;\r\n}\r\n\r\n.menu-title {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(2.8rem, 6vw, 5rem);\r\n  font-weight: 800;\r\n  color: var(--color-white);\r\n  letter-spacing: -0.5px;\r\n  margin: 0 0 18px;\r\n  line-height: 1.1;\r\n}\r\n\r\n// Breadcrumbs\r\n.breadcrumb {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 6px;\r\n  font-size: 0.9rem;\r\n  margin-bottom: 20px;\r\n  flex-wrap: wrap;\r\n\r\n\r\n  &__link {\r\n    color: #9ca3af;\r\n    text-decoration: none;\r\n    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    &:hover { \r\n      color: #ffffff;\r\n      \r\n    }\r\n  }\r\n\r\n  &__sep     { \r\n    color: #9ca3af;\r\n    margin: 0 2px;\r\n  }\r\n  &__current { \r\n    color: #c9a84c; \r\n    font-weight: 700;\r\n    }\r\n}\r\n\r\n// Gold Divider\r\n.divider-line {\r\n    width: 60px; \r\n    height: 3px;             \r\n    background: #d4af37;     \r\n    border-radius: 50px;      \r\n    margin: 0 auto 24px;\r\n}\r\n\r\n// Tagline\r\n.tagline {\r\n  // font-family: var(--font-body);\r\n  font-size: 1rem;\r\n  color: var(--color-gold);\r\n  font-weight: 400;\r\n  margin: 0;\r\n  opacity: 0.9;\r\n}\r\n\r\n// \u2500\u2500\u2500 Menu Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 24px;\r\n  padding: 0 40px;\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n\r\n  // 3 columns on medium screens\r\n  @media (max-width: 1200px) {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    padding: 0 28px;\r\n    gap: 20px;\r\n  }\r\n\r\n  // 2 columns on tablet\r\n  @media (max-width: 860px) {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 0 20px;\r\n    gap: 16px;\r\n  }\r\n\r\n  // 1 column on mobile\r\n  @media (max-width: 540px) {\r\n    grid-template-columns: 1fr;\r\n    padding: 0 16px;\r\n    gap: 14px;\r\n  }\r\n}\r\n\r\n// \u2500\u2500\u2500 Menu Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-card {\r\n  position: relative;\r\n  border-radius: var(--card-radius);\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  background: var(--color-card-bg);\r\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);\r\n  outline: none;\r\n\r\n  // Gold border bottom accent on hover\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 3px;\r\n    background: linear-gradient(90deg, var(--color-gold), var(--color-gold-light), var(--color-gold));\r\n    transform: scaleX(0);\r\n    transform-origin: left;\r\n    transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);\r\n    z-index: 5;\r\n  }\r\n\r\n  &:hover::after,\r\n  &:focus-visible::after {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  &:focus-visible {\r\n    box-shadow: 0 0 0 3px var(--color-gold), 0 4px 24px rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  // Lift on hover\r\n  transition: transform var(--transition-base), box-shadow var(--transition-base);\r\n\r\n  &:hover,\r\n  &:focus-visible {\r\n    transform: translateY(-6px) scale(1.015);\r\n    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.65);\r\n  }\r\n}\r\n\r\n// \u2500\u2500\u2500 Card Image Wrapper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-image-wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  aspect-ratio: 4 / 3;\r\n  overflow: hidden;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  display: block;\r\n  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1),\r\n              filter 0.38s ease;\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    transform: scale(1.08);\r\n    filter: brightness(0.6);\r\n  }\r\n}\r\n\r\n// \u2500\u2500\u2500 Overlay (visible on hover) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-overlay {\r\n  position: absolute;\r\n  inset: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-base);\r\n  z-index: 2;\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.explore-btn {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 8px;\r\n  transform: translateY(12px);\r\n  transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.explore-icon {\r\n  font-size: 2rem;\r\n  color: var(--color-gold);\r\n  display: block;\r\n  animation: none;\r\n\r\n  .menu-card:hover & {\r\n    animation: pulseArrow 0.8s ease-in-out infinite alternate;\r\n  }\r\n}\r\n\r\n.explore-text {\r\n  font-family: var(--font-body);\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  letter-spacing: 3px;\r\n  color: var(--color-white);\r\n  text-transform: uppercase;\r\n}\r\n\r\n@keyframes pulseArrow {\r\n  from { transform: translateX(0); }\r\n  to   { transform: translateX(5px); }\r\n}\r\n\r\n// \u2500\u2500\u2500 Shine Sweep Effect \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-shine {\r\n  position: absolute;\r\n  inset: 0;\r\n  z-index: 3;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  border-radius: var(--card-radius);\r\n\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: -60%;\r\n    left: -60%;\r\n    width: 60%;\r\n    height: 220%;\r\n    background: linear-gradient(\r\n      105deg,\r\n      transparent 30%,\r\n      rgba(255, 255, 255, 0.14) 50%,\r\n      transparent 70%\r\n    );\r\n    transform: translateX(-100%) rotate(5deg);\r\n    transition: none;\r\n  }\r\n\r\n  .menu-card:hover &::after {\r\n    transition: transform 0.6s ease;\r\n    transform: translateX(300%) rotate(5deg);\r\n  }\r\n}\r\n\r\n// \u2500\u2500\u2500 Card Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.card-footer {\r\n  background-color: var(--color-footer-bg);\r\n  padding: 14px 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 52px;\r\n  transition: background-color var(--transition-base);\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    background-color: #182845;\r\n  }\r\n}\r\n\r\n.card-name {\r\n  font-family: var(--font-body);\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: var(--color-white);\r\n  text-align: center;\r\n  letter-spacing: 0.3px;\r\n  transition: color var(--transition-base);\r\n\r\n  .menu-card:hover &,\r\n  .menu-card:focus-visible & {\r\n    color: var(--color-gold-light);\r\n  }\r\n}\r\n\r\n// \u2500\u2500\u2500 Download CTA Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\r\n.menu-download-section {\r\n  margin-top: 80px;\r\n  padding: 72px 24px;\r\n  background: linear-gradient(180deg, #07101f 0%, #0d1b33 100%);\r\n  text-align: center;\r\n}\r\n\r\n.download-title {\r\n  font-family: var(--font-display);\r\n  font-size: clamp(2rem, 4vw, 3rem);\r\n  font-weight: 700;\r\n  color: var(--color-gold);\r\n  margin: 0 0 14px;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.download-subtitle {\r\n  font-size: 1rem;\r\n  color: var(--color-muted);\r\n  margin: 0 0 42px;\r\n  letter-spacing: 0.3px;\r\n}\r\n\r\n.download-buttons {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.download-btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background: var(--color-gold);\r\n  color: #0a1020;\r\n  border: none;\r\n  border-radius: 12px;\r\n  padding: 16px 36px;\r\n  font-family: var(--font-body);\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  cursor: pointer;\r\n  transition: background var(--transition-base),\r\n              transform var(--transition-base),\r\n              box-shadow var(--transition-base);\r\n  min-width: 220px;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 18px rgba(201, 168, 76, 0.25);\r\n\r\n  &:hover {\r\n    background: var(--color-gold-light);\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 10px 32px rgba(201, 168, 76, 0.4);\r\n  }\r\n\r\n  &:active {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .dl-icon {\r\n    font-size: 1.2rem;\r\n    font-weight: 900;\r\n  }\r\n\r\n  @media (max-width: 480px) {\r\n    min-width: 100%;\r\n    padding: 14px 24px;\r\n  }\r\n}\r\n\r\n"] }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1.Router }, { type: i2.General }, { type: i3.HttpClient }, { type: i0.ChangeDetectorRef }], { alert: [{
            type: ViewChild,
            args: ['alert']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Menu, { className: "Menu", filePath: "app/pages/menu/menu.ts", lineNumber: 15 }); })();

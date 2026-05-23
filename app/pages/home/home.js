import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LanguageService } from '../../services/language.service';
import { APP_CONFIG } from '../../app.config';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/general";
import * as i2 from "@angular/common";
const _c0 = a0 => ({ "active": a0 });
function Home_ng_container_132_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(2, 2, "1970-01-01T" + day_r1.open, "HH:mm"), " - ", i0.ɵɵpipeBind2(3, 5, "1970-01-01T" + day_r1.close, "HH:mm"), " ");
} }
function Home_ng_container_132_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r1.ClosedMessage, " ");
} }
function Home_ng_container_132_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 80)(2, "span", 81);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, Home_ng_container_132_span_4_Template, 4, 8, "span", 82)(5, Home_ng_container_132_span_5_Template, 2, 1, "span", 82);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, day_r1.activeDay));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", day_r1.languageDay, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !day_r1.isClosed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", day_r1.isClosed);
} }
export class Home {
    config;
    ngZone;
    cdr;
    general;
    dailySchedult = [];
    discountBtnLabel = '';
    route = inject(ActivatedRoute);
    languageService = inject(LanguageService);
    lang = this.languageService.getLangFromRoute(this.route);
    constructor(config, ngZone, cdr, general) {
        this.config = config;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.general = general;
        this.general.setup();
        this.discountBtnLabel = this.config.discountCode;
        const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Oslo' }));
        console.log(today);
        Object.keys(this.config.timeing).forEach((day, index) => {
            let activeDay = false;
            if (today.getDay() == (index + 1)) {
                activeDay = true;
            }
            let timing = this.config.timeing[day];
            let languageDay = this.languageService.t(this.lang, day);
            let isClosed = timing.isClosed;
            let ClosedMessage = timing.ClosedMessage;
            let open = timing.open;
            let close = timing.close;
            let record = {
                languageDay,
                isClosed,
                ClosedMessage,
                open,
                close,
                activeDay
            };
            this.dailySchedult.push(record);
        });
    }
    discountBtnClick(discountCode) {
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
        }
        else {
            // Older browsers / non-HTTPS
            this.fallbackCopyText(discountCode);
        }
    }
    fallbackCopyText(text) {
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
        }
        catch (err) {
            console.error('Copy failed', err);
        }
        document.body.removeChild(textarea);
    }
    static ɵfac = function Home_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Home)(i0.ɵɵdirectiveInject(APP_CONFIG), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.General)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Home, selectors: [["app-home"]], decls: 174, vars: 35, consts: [[1, "banner"], [1, "banner-text"], ["id", "copyBtn", 1, "copy-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "copy-icon"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [1, "hero"], [1, "hero-overlay"], [1, "hero-content"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-buttons"], ["href", "#", "target", "_blank", 1, "btn-primary"], ["href", "https://order.foodsted.com/en/porder/1130/shaahi-mahall-indisk-restaurant/cart?booktable=active", "target", "_blank", 1, "btn-primary"], ["id", "about", 1, "about-section"], [1, "section-title"], [1, "about-container"], [1, "about-image"], ["src", "./images/about.webp", "alt", "Delicious Indian dish"], [1, "about-content"], [1, "about-heading"], [1, "about-text"], ["id", "party-room", 1, "celebrate-section"], [1, "celebrate-header"], [1, "badge"], [1, "celebrate-title"], [1, "celebrate-text"], [1, "celebrate-cards"], [1, "card"], [1, "card-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"], ["d", "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"], ["d", "M2 21h20"], ["d", "M7 8v2"], ["d", "M12 8v2"], ["d", "M17 8v2"], ["d", "M7 4h.01"], ["d", "M12 4h.01"], ["d", "M17 4h.01"], [1, "card-title"], [1, "card-text"], ["d", "M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.9 7.9 7.9-7.9 1-1a5.5 5.5 0 0 0 0-7.8z"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], [1, "celebrate-action"], ["href", "tel:+4751668082", 1, "btn-solid-gold"], ["id", "catering", 1, "catering-section"], [1, "catering-title"], [1, "catering-text"], ["d", "M2 4L3 17H21L22 4L17 9L12 4L7 9L2 4Z"], ["d", "M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"], ["d", "m14.5 13.5-9 9a1.5 1.5 0 0 1-2-2l9-9Z"], ["d", "m11 10.5 2.5-2.5"], ["d", "m13.5 13 2.5-2.5"], ["cx", "20", "cy", "8", "r", ".5"], ["cx", "16", "cy", "4", "r", ".5"], ["cx", "21", "cy", "12", "r", ".5"], ["d", "m18 8-1-1"], [1, "hours-section"], [1, "hours-title"], [1, "hours-container"], [1, "hours-list"], [4, "ngFor", "ngForOf"], ["id", "contact", 1, "contact-section"], [1, "contact-title"], [1, "contact-container"], [1, "contact-info"], [1, "contact-block"], [1, "contact-icon"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "contact-details"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["href", "tel:+4751668082"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["href", "mailto:shahi.mahal2026@hotmail.com"], [1, "contact-map"], ["src", i0.ɵɵtrustConstantResourceUrl `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2060.0528254457636!2d5.733075215904944!3d58.85244588140321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a354b6c310c13%3A0xe510b10ec947dfeb!2sMauritz%20Kartevoldsplass%201%2C%204306%20Sandnes%2C%20Norway!5e0!3m2!1sen!2sus!4v1713532721867!5m2!1sen!2sus`, "width", "100%", "height", "100%", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "hours-item", 3, "ngClass"], [1, "day"], ["class", "time", 4, "ngIf"], [1, "time"]], template: function Home_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-header");
            i0.ɵɵelementStart(1, "main")(2, "div", 0)(3, "div", 1)(4, "p")(5, "b");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "p")(8, "b");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "p")(11, "b");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "button", 2);
            i0.ɵɵlistener("click", function Home_Template_button_click_13_listener() { return ctx.discountBtnClick(ctx.config.discountCode); });
            i0.ɵɵtext(14);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(15, "svg", 3);
            i0.ɵɵelement(16, "rect", 4)(17, "path", 5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "section", 6);
            i0.ɵɵelement(19, "div", 7);
            i0.ɵɵelementStart(20, "div", 8)(21, "h1", 9);
            i0.ɵɵtext(22, "SHAAHI MAHALL INDISK");
            i0.ɵɵelement(23, "br");
            i0.ɵɵtext(24, "RESTAURANT & BAR");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "p", 10);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 11)(28, "a", 12);
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "a", 13);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(32, "section", 14)(33, "h2", 15);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 16)(36, "div", 17);
            i0.ɵɵelement(37, "img", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 19)(39, "h3", 20);
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "p", 21);
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(43, "section", 22)(44, "div", 23)(45, "span", 24);
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "h2", 25);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "p", 26);
            i0.ɵɵtext(50);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "div", 27)(52, "div", 28)(53, "div", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(54, "svg", 30);
            i0.ɵɵelement(55, "path", 31)(56, "path", 32)(57, "path", 33)(58, "path", 34)(59, "path", 35)(60, "path", 36)(61, "path", 37)(62, "path", 38)(63, "path", 39);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(64, "h4", 40);
            i0.ɵɵtext(65);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "p", 41);
            i0.ɵɵtext(67);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "div", 28)(69, "div", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(70, "svg", 30);
            i0.ɵɵelement(71, "path", 42);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(72, "h4", 40);
            i0.ɵɵtext(73);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "p", 41);
            i0.ɵɵtext(75);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 28)(77, "div", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(78, "svg", 30);
            i0.ɵɵelement(79, "rect", 43)(80, "path", 44);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(81, "h4", 40);
            i0.ɵɵtext(82);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "p", 41);
            i0.ɵɵtext(84);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(85, "div", 45)(86, "a", 46);
            i0.ɵɵtext(87);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(88, "section", 47)(89, "div", 23)(90, "span", 24);
            i0.ɵɵtext(91);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "h2", 48);
            i0.ɵɵtext(93);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "p", 49);
            i0.ɵɵtext(95);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "div", 27)(97, "div", 28)(98, "div", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(99, "svg", 30);
            i0.ɵɵelement(100, "path", 50);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(101, "h4", 40);
            i0.ɵɵtext(102);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "p", 41);
            i0.ɵɵtext(104);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(105, "div", 28)(106, "div", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(107, "svg", 30);
            i0.ɵɵelement(108, "path", 51);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(109, "h4", 40);
            i0.ɵɵtext(110);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "p", 41);
            i0.ɵɵtext(112);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(113, "div", 28)(114, "div", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(115, "svg", 30);
            i0.ɵɵelement(116, "path", 52)(117, "path", 53)(118, "path", 54)(119, "circle", 55)(120, "circle", 56)(121, "circle", 57)(122, "path", 58);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(123, "h4", 40);
            i0.ɵɵtext(124);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "p", 41);
            i0.ɵɵtext(126);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(127, "section", 59)(128, "h2", 60);
            i0.ɵɵtext(129);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "div", 61)(131, "ul", 62);
            i0.ɵɵtemplate(132, Home_ng_container_132_Template, 6, 6, "ng-container", 63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(133, "section", 64)(134, "h2", 65);
            i0.ɵɵtext(135);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "div", 66)(137, "div", 67)(138, "div", 68)(139, "div", 69);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(140, "svg", 30);
            i0.ɵɵelement(141, "path", 70)(142, "circle", 71);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(143, "div", 72)(144, "h4");
            i0.ɵɵtext(145);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(146, "p");
            i0.ɵɵtext(147, "Mauritz Kartevoldsplass 1");
            i0.ɵɵelement(148, "br");
            i0.ɵɵtext(149, "4306, Sandnes");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(150, "div", 68)(151, "div", 69);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(152, "svg", 30);
            i0.ɵɵelement(153, "path", 73);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(154, "div", 72)(155, "h4");
            i0.ɵɵtext(156);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(157, "p")(158, "a", 74);
            i0.ɵɵtext(159, "+47 51 66 80 82");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(160, "div", 68)(161, "div", 69);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(162, "svg", 30);
            i0.ɵɵelement(163, "path", 75)(164, "polyline", 76);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(165, "div", 72)(166, "h4");
            i0.ɵɵtext(167);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(168, "p")(169, "a", 77);
            i0.ɵɵtext(170, "shahi.mahal2026@hotmail.com");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(171, "div", 78);
            i0.ɵɵelement(172, "iframe", 79);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelement(173, "app-footer");
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.config.discountMessage[ctx.lang] || ctx.config.discountMessage.en);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.config.OtherMessage1[ctx.lang] || ctx.config.OtherMessage1.en);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.config.OtherMessage2[ctx.lang] || ctx.config.OtherMessage2.en);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.discountBtnLabel, " ");
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "herodescription"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "ordernow"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "booktable"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "aboutitle"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "abouttitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "aboutdescription"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "partyroom"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "partyroomtitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "partyroomdescription"), " ");
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "card1title"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "card1description"), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "card2title"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "card2description"), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "card3title"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "card3description"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "callus"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "catering"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "cateringtitle"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "cateringdescription"), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "cateringcard1title"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "cateringcard1description"), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "cateringcard2title"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "cateringcard2description"), " ");
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "cateringcard3title"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.languageService.t(ctx.lang, "cateringcard3description"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "openhours"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.dailySchedult);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "contactus"));
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "location"));
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "phone"));
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.languageService.t(ctx.lang, "email"));
        } }, dependencies: [Header, Footer, CommonModule, i2.NgClass, i2.NgForOf, i2.NgIf, i2.DatePipe], styles: [".home-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.language-info[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  padding: 1.5rem;\n  border-radius: 8px;\n  margin: 1rem 0;\n\n  p {\n    margin: 0.5rem 0;\n    font-size: 1rem;\n\n    strong {\n      color: #333;\n      margin-right: 0.5rem;\n    }\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Home, [{
        type: Component,
        args: [{ selector: 'app-home', imports: [Header, Footer, CommonModule], template: "<app-header></app-header>\n<main>\n    <div class=\"banner\">\n        <div class=\"banner-text\">\n            <p><b>{{ config.discountMessage[lang] || config.discountMessage.en }}</b></p>\n            <p><b>{{ config.OtherMessage1[lang] || config.OtherMessage1.en }}</b></p>\n            <p><b>{{ config.OtherMessage2[lang] || config.OtherMessage2.en }}</b></p>\n        </div>\n        <button class=\"copy-btn\" id=\"copyBtn\" (click)=\"discountBtnClick(this.config.discountCode)\">\n            {{discountBtnLabel}}\n            <svg class=\"copy-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect>\n                <path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>\n            </svg>\n        </button>\n    </div>\n    <section class=\"hero\">\n        <div class=\"hero-overlay\"></div>\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">SHAAHI MAHALL INDISK<br>RESTAURANT & BAR</h1>\n            <p class=\"hero-subtitle\">\n                {{ languageService.t(lang, 'herodescription') }}\n            </p>\n            <div class=\"hero-buttons\">\n                <a href=\"#\" target=\"_blank\" class=\"btn-primary\">{{ languageService.t(lang, 'ordernow') }}</a>\n                <a href=\"https://order.foodsted.com/en/porder/1130/shaahi-mahall-indisk-restaurant/cart?booktable=active\"\n                    target=\"_blank\" class=\"btn-primary\">{{ languageService.t(lang, 'booktable') }}</a>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"about-section\" id=\"about\">\n        <h2 class=\"section-title\">{{ languageService.t(lang, 'aboutitle') }}</h2>\n        <div class=\"about-container\">\n            <div class=\"about-image\">\n                <img src=\"./images/about.webp\" alt=\"Delicious Indian dish\">\n            </div>\n            <div class=\"about-content\">\n                <h3 class=\"about-heading\">{{ languageService.t(lang, 'abouttitle') }}</h3>\n                <p class=\"about-text\">\n                    {{ languageService.t(lang, 'aboutdescription') }}\n                </p>\n            </div>\n        </div>\n    </section>\n\n\n    <section class=\"celebrate-section\" id=\"party-room\">\n        <div class=\"celebrate-header\">\n            <span class=\"badge\">{{ languageService.t(lang, 'partyroom') }}</span>\n            <h2 class=\"celebrate-title\">{{ languageService.t(lang, 'partyroomtitle') }}</h2>\n            <p class=\"celebrate-text\">\n                {{ languageService.t(lang, 'partyroomdescription') }}\n            </p>\n        </div>\n        <div class=\"celebrate-cards\">\n            <div class=\"card\">\n                <div class=\"card-icon\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\">\n                        <path d=\"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8\"></path>\n                        <path d=\"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1\"></path>\n                        <path d=\"M2 21h20\"></path>\n                        <path d=\"M7 8v2\"></path>\n                        <path d=\"M12 8v2\"></path>\n                        <path d=\"M17 8v2\"></path>\n                        <path d=\"M7 4h.01\"></path>\n                        <path d=\"M12 4h.01\"></path>\n                        <path d=\"M17 4h.01\"></path>\n                    </svg>\n                </div>\n                <h4 class=\"card-title\">{{ languageService.t(lang, 'card1title') }}</h4>\n                <p class=\"card-text\">\n                    {{ languageService.t(lang, 'card1description') }}\n                </p>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-icon\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\">\n                        <path\n                            d=\"M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.9 7.9 7.9-7.9 1-1a5.5 5.5 0 0 0 0-7.8z\">\n                        </path>\n                    </svg>\n                </div>\n                <h4 class=\"card-title\">{{ languageService.t(lang, 'card2title') }}</h4>\n                <p class=\"card-text\">\n                    {{ languageService.t(lang, 'card2description') }}\n                </p>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-icon\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\">\n                        <rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect>\n                        <path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>\n                    </svg>\n                </div>\n                <h4 class=\"card-title\">{{ languageService.t(lang, 'card3title') }}</h4>\n                <p class=\"card-text\">\n                    {{ languageService.t(lang, 'card3description') }}\n                </p>\n            </div>\n        </div>\n        <div class=\"celebrate-action\">\n            <a href=\"tel:+4751668082\" class=\"btn-solid-gold\">{{ languageService.t(lang, 'callus') }}</a>\n        </div>\n    </section>\n\n    <section class=\"catering-section\" id=\"catering\">\n        <div class=\"celebrate-header\">\n            <span class=\"badge\">{{ languageService.t(lang, 'catering') }}</span>\n            <h2 class=\"catering-title\">{{ languageService.t(lang, 'cateringtitle') }}</h2>\n            <p class=\"catering-text\">\n                {{ languageService.t(lang, 'cateringdescription') }}\n            </p>\n        </div>\n        <div class=\"celebrate-cards\">\n            <div class=\"card\">\n                <div class=\"card-icon\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\">\n                        <path d=\"M2 4L3 17H21L22 4L17 9L12 4L7 9L2 4Z\"></path>\n                    </svg>\n                </div>\n                <h4 class=\"card-title\">{{ languageService.t(lang, 'cateringcard1title') }}</h4>\n                <p class=\"card-text\">\n                    {{ languageService.t(lang, 'cateringcard1description') }}\n                </p>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-icon\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\">\n                        <path\n                            d=\"M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z\">\n                        </path>\n                    </svg>\n                </div>\n                <h4 class=\"card-title\">{{ languageService.t(lang, 'cateringcard2title') }}</h4>\n                <p class=\"card-text\">\n                    {{ languageService.t(lang, 'cateringcard2description') }}\n                </p>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-icon\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\">\n                        <path d=\"m14.5 13.5-9 9a1.5 1.5 0 0 1-2-2l9-9Z\"></path>\n                        <path d=\"m11 10.5 2.5-2.5\"></path>\n                        <path d=\"m13.5 13 2.5-2.5\"></path>\n                        <circle cx=\"20\" cy=\"8\" r=\".5\"></circle>\n                        <circle cx=\"16\" cy=\"4\" r=\".5\"></circle>\n                        <circle cx=\"21\" cy=\"12\" r=\".5\"></circle>\n                        <path d=\"m18 8-1-1\"></path>\n                    </svg>\n                </div>\n                <h4 class=\"card-title\">{{ languageService.t(lang, 'cateringcard3title') }}</h4>\n                <p class=\"card-text\">\n                    {{ languageService.t(lang, 'cateringcard3description') }}\n                </p>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"hours-section\">\n        <h2 class=\"hours-title\">{{ languageService.t(lang, 'openhours') }}</h2>\n        <div class=\"hours-container\">\n            <ul class=\"hours-list\">\n                <ng-container *ngFor=\"let day of dailySchedult\">\n                    <li class=\"hours-item\" [ngClass]=\"{ 'active': day.activeDay }\">\n                        <span class=\"day\">\n                            {{ day.languageDay }}\n                        </span>\n                        <span class=\"time\" *ngIf=\"!day.isClosed\">\n                            {{ ('1970-01-01T' + day.open) | date:'HH:mm' }} - {{ ('1970-01-01T' + day.close) | date:'HH:mm'}}\n                        </span>\n                        <span class=\"time\" *ngIf=\"day.isClosed\">\n                            {{ day.ClosedMessage }}\n                        </span>\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n    </section>\n\n\n<section class=\"contact-section\" id=\"contact\">\n        <h2 class=\"contact-title\">{{ languageService.t(lang, 'contactus') }}</h2>\n        <div class=\"contact-container\">\n            <div class=\"contact-info\">\n                <div class=\"contact-block\">\n                    <div class=\"contact-icon\">\n                        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                            stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                            <path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path>\n                            <circle cx=\"12\" cy=\"10\" r=\"3\"></circle>\n                        </svg>\n                    </div>\n                    <div class=\"contact-details\">\n                        <h4>{{ languageService.t(lang, 'location') }}</h4>\n                        <p>Mauritz Kartevoldsplass 1<br>4306, Sandnes</p>\n                    </div>\n                </div>\n                <div class=\"contact-block\">\n                    <div class=\"contact-icon\">\n                        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                            stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                            <path\n                                d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\">\n                            </path>\n                        </svg>\n                    </div>\n                    <div class=\"contact-details\">\n                        <h4>{{ languageService.t(lang, 'phone') }}</h4>\n                        <p><a href=\"tel:+4751668082\">+47 51 66 80 82</a></p>\n                    </div>\n                </div>\n                <div class=\"contact-block\">\n                    <div class=\"contact-icon\">\n                        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                            stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                            <path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\">\n                            </path>\n                            <polyline points=\"22,6 12,13 2,6\"></polyline>\n                        </svg>\n                    </div>\n                    <div class=\"contact-details\">\n                        <h4>{{ languageService.t(lang, 'email') }}</h4>\n                        <p><a href=\"mailto:shahi.mahal2026@hotmail.com\">shahi.mahal2026@hotmail.com</a></p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"contact-map\">\n                <iframe\n                    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2060.0528254457636!2d5.733075215904944!3d58.85244588140321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a354b6c310c13%3A0xe510b10ec947dfeb!2sMauritz%20Kartevoldsplass%201%2C%204306%20Sandnes%2C%20Norway!5e0!3m2!1sen!2sus!4v1713532721867!5m2!1sen!2sus\"\n                    width=\"100%\" height=\"100%\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"\n                    referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n            </div>\n        </div>\n    </section>\n\n\n\n</main>\n<app-footer></app-footer>", styles: [".home-content {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.language-info {\n  background: #f5f5f5;\n  padding: 1.5rem;\n  border-radius: 8px;\n  margin: 1rem 0;\n\n  p {\n    margin: 0.5rem 0;\n    font-size: 1rem;\n\n    strong {\n      color: #333;\n      margin-right: 0.5rem;\n    }\n  }\n}"] }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.General }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Home, { className: "Home", filePath: "app/pages/home/home.ts", lineNumber: 18 }); })();

import { Component, Inject, ViewChild, inject, } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG } from '../../app.config';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/general";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/material/snack-bar";
import * as i5 from "../../services/alert";
import * as i6 from "@angular/cdk/text-field";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/common";
const _c0 = ["alert"];
const _c1 = ["partyDisplayNameInput"];
const _c2 = ["partyMobileInput"];
const _c3 = ["quotationShippingEmailInput"];
const _c4 = a0 => ["/", a0, "menu"];
const _forTrack0 = ($index, $item) => $item.quotationd_id;
function Checkout_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 28);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 29);
    i0.ɵɵelement(3, "path", 14)(4, "line", 15)(5, "path", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "p", 30);
    i0.ɵɵtext(7, "Your cart is empty.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 31);
    i0.ɵɵtext(9, " Go to Menu ");
    i0.ɵɵelementStart(10, "span", 32);
    i0.ɵɵtext(11, "\u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c4, ctx_r0.lang));
} }
function Checkout_Conditional_19_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34)(2, "h2", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 36);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 37);
    i0.ɵɵtext(8, " Total: ");
    i0.ɵɵelementStart(9, "span", 38);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 39)(13, "div", 40)(14, "button", 41);
    i0.ɵɵlistener("click", function Checkout_Conditional_19_For_2_Template_button_click_14_listener() { const record_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.change_cartitemqty(-1, record_r3.qty, record_r3.item_id, record_r3.quotationd_id)); });
    i0.ɵɵtext(15, " \u2212 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 42);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 43);
    i0.ɵɵlistener("click", function Checkout_Conditional_19_For_2_Template_button_click_18_listener() { const record_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.change_cartitemqty(1, record_r3.qty, record_r3.item_id, record_r3.quotationd_id)); });
    i0.ɵɵtext(19, " + ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "button", 44);
    i0.ɵɵlistener("click", function Checkout_Conditional_19_For_2_Template_button_click_20_listener() { const record_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.delete_cartitem(record_r3.quotationd_id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(21, "svg", 45);
    i0.ɵɵelement(22, "polyline", 46)(23, "path", 47)(24, "path", 48)(25, "path", 49);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const record_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(record_r3.item_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" @ ", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.currency_symbol, " ", i0.ɵɵpipeBind2(6, 7, record_r3.fnetprice / record_r3.qty, "1.2-2"), "/", record_r3.item_unit, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.currency_symbol, " ", i0.ɵɵpipeBind2(11, 10, record_r3.fnetprice, "1.2-2"), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(record_r3.qty);
} }
function Checkout_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵrepeaterCreate(1, Checkout_Conditional_19_For_2_Template, 26, 13, "div", 33, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.general.cartitems_list);
} }
function Checkout_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "p");
    i0.ɵɵtext(2, "No items to checkout.");
    i0.ɵɵelementEnd()();
} }
function Checkout_Conditional_30_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "span", 51);
    i0.ɵɵtext(2, "Promo Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 54);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 81)(7, "small");
    i0.ɵɵtext(8, "\u2713 Applied ");
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10, "DISCOUNTS");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.branch_currencysymbol, ". ", i0.ɵɵpipeBind2(5, 2, ctx_r0.pvoucher_paidamount, "1.2-2"), " ");
} }
function Checkout_Conditional_30_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 82)(2, "span", 83);
    i0.ɵɵtext(3, "Estimated Pickup Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 84);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 85);
    i0.ɵɵlistener("click", function Checkout_Conditional_30_Conditional_26_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.defaultTime = !ctx_r0.defaultTime); });
    i0.ɵɵtext(7, "Change");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("About ", ctx_r0.estimated_orderreadytime, " minutes");
} }
function Checkout_Conditional_30_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 82)(2, "span", 83);
    i0.ɵɵtext(3, "Pickup Time");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Date: ");
    i0.ɵɵelementStart(5, "input", 86);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Conditional_27_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.quotation_sdate, $event) || (ctx_r0.quotation_sdate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " Time: ");
    i0.ɵɵelementStart(7, "input", 87);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Conditional_27_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.quotation_stime, $event) || (ctx_r0.quotation_stime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 85);
    i0.ɵɵlistener("click", function Checkout_Conditional_30_Conditional_27_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.defaultTime = !ctx_r0.defaultTime); });
    i0.ɵɵtext(9, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.quotation_sdate);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.quotation_stime);
} }
function Checkout_Conditional_30_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "input", 88);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Conditional_63_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.quotation_mode, $event) || (ctx_r0.quotation_mode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function Checkout_Conditional_30_Conditional_63_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 89);
    i0.ɵɵtext(3, "Pay on Counter");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.quotation_mode);
} }
function Checkout_Conditional_30_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "input", 90);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Conditional_64_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.quotation_mode, $event) || (ctx_r0.quotation_mode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function Checkout_Conditional_30_Conditional_64_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 91);
    i0.ɵɵtext(3, "VIPPS");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.quotation_mode);
} }
function Checkout_Conditional_30_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "input", 92);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Conditional_65_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.quotation_mode, $event) || (ctx_r0.quotation_mode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function Checkout_Conditional_30_Conditional_65_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 93);
    i0.ɵɵtext(3, "Card");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.quotation_mode);
} }
function Checkout_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 50)(2, "span", 51);
    i0.ɵɵtext(3, "Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 52);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "div", 53);
    i0.ɵɵelementStart(7, "div", 50)(8, "span", 51);
    i0.ɵɵtext(9, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 54);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 55)(14, "div", 56);
    i0.ɵɵelement(15, "i", 57);
    i0.ɵɵelementStart(16, "input", 58);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.inputpvoucher_code, $event) || (ctx_r0.inputpvoucher_code = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 59);
    i0.ɵɵlistener("click", function Checkout_Conditional_30_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.applyPromo()); });
    i0.ɵɵtext(18, "Apply");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(19, Checkout_Conditional_30_Conditional_19_Template, 11, 5);
    i0.ɵɵelementStart(20, "div", 60)(21, "span", 51);
    i0.ɵɵtext(22, "Total:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 61);
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(26, Checkout_Conditional_30_Conditional_26_Template, 8, 1, "div", 62);
    i0.ɵɵconditionalCreate(27, Checkout_Conditional_30_Conditional_27_Template, 10, 2, "div", 62);
    i0.ɵɵelementStart(28, "div", 63)(29, "label", 64);
    i0.ɵɵtext(30, "Name");
    i0.ɵɵelementStart(31, "span", 65);
    i0.ɵɵtext(32, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "input", 66, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.party_displayname, $event) || (ctx_r0.party_displayname = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function Checkout_Conditional_30_Template_input_input_33_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); })("ngModelChange", function Checkout_Conditional_30_Template_input_ngModelChange_33_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 63)(36, "label", 67);
    i0.ɵɵtext(37, " Mobile Number ");
    i0.ɵɵelementStart(38, "span", 65);
    i0.ɵɵtext(39, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 68)(41, "span", 69);
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 70, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.party_mobile, $event) || (ctx_r0.party_mobile = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function Checkout_Conditional_30_Template_input_input_43_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); })("ngModelChange", function Checkout_Conditional_30_Template_input_ngModelChange_43_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 63)(46, "label", 71);
    i0.ɵɵtext(47, " Email Address ");
    i0.ɵɵelementStart(48, "span", 65);
    i0.ɵɵtext(49, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "input", 72, 3);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Template_input_ngModelChange_50_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.quotation_shippingemail, $event) || (ctx_r0.quotation_shippingemail = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function Checkout_Conditional_30_Template_input_input_50_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); })("ngModelChange", function Checkout_Conditional_30_Template_input_ngModelChange_50_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.validateOrderBtn()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 63)(53, "label", 73);
    i0.ɵɵtext(54, " Add Comment ");
    i0.ɵɵelementStart(55, "span", 74);
    i0.ɵɵtext(56, "(optional)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "textarea", 75);
    i0.ɵɵtwoWayListener("ngModelChange", function Checkout_Conditional_30_Template_textarea_ngModelChange_57_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.quotation_remarks, $event) || (ctx_r0.quotation_remarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 63)(59, "span", 76);
    i0.ɵɵtext(60, " Payment Method ");
    i0.ɵɵelementStart(61, "span", 65);
    i0.ɵɵtext(62, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(63, Checkout_Conditional_30_Conditional_63_Template, 4, 1, "div", 77);
    i0.ɵɵconditionalCreate(64, Checkout_Conditional_30_Conditional_64_Template, 4, 1, "div", 77);
    i0.ɵɵconditionalCreate(65, Checkout_Conditional_30_Conditional_65_Template, 4, 1, "div", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "div", 78)(67, "button", 79);
    i0.ɵɵlistener("click", function Checkout_Conditional_30_Template_button_click_67_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.placeOrder()); });
    i0.ɵɵtext(68, " Place Order ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "button", 80);
    i0.ɵɵtext(70, " Continue Shopping ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.languageService.t(ctx_r0.lang, "cartbody"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.branch_currencysymbol, ". ", i0.ɵɵpipeBind2(12, 19, ctx_r0.general.calculate_totalcartamount(), "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputpvoucher_code);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.pvoucher_validated === 1 ? 19 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.general.branch_result == null ? null : ctx_r0.general.branch_result.branch_currencysymbol, ". ", i0.ɵɵpipeBind2(25, 22, ctx_r0.general.calculate_totalcartamount() - ctx_r0.pvoucher_paidamount, "1.2-2"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.defaultTime ? 26 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r0.defaultTime ? 27 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.party_displayname);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.quotation_shippingcallingcode);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.party_mobile);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.quotation_shippingemail);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.quotation_remarks);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r0.porder_method_cash === 1 ? 63 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.porder_method_general === 1 ? 64 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.porder_method_card === 1 ? 65 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.isOrderDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(25, _c4, ctx_r0.lang));
} }
function Checkout_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelement(1, "div", 94);
    i0.ɵɵelementEnd();
} }
export class Checkout {
    config;
    router;
    general;
    http;
    cdr;
    snackBar;
    alert;
    autofillMonitor;
    isOrderDisabled = true;
    activeLoader = false;
    alertt;
    set partyDisplayNameInput(input) {
        this.partyDisplayNameInputRef = input;
        this.monitorAutofill(input);
    }
    set partyMobileInput(input) {
        this.partyMobileInputRef = input;
        this.monitorAutofill(input);
    }
    set quotationShippingEmailInput(input) {
        this.quotationShippingEmailInputRef = input;
        this.monitorAutofill(input);
    }
    partyDisplayNameInputRef;
    partyMobileInputRef;
    quotationShippingEmailInputRef;
    autofillSubscriptions = new Subscription();
    monitoredInputs = new WeakSet();
    currentDateTime = new Date();
    route = inject(ActivatedRoute);
    languageService = inject(LanguageService);
    lang = this.languageService.getLangFromRoute(this.route);
    party_displayname = '';
    quotation_shippingcallingcode = '';
    party_mobile = '';
    quotation_shippingemail = '';
    quotation_remarks = '';
    quotation_mode = '';
    porder_method_cash = 0;
    porder_method_general = 0;
    porder_method_card = 0;
    defaultTime = true;
    estimated_orderreadytime = 25;
    quotation_sdate = '';
    quotation_stime = '';
    inputpvoucher_code = '';
    pvoucher_code = '';
    pvoucher_id = 0;
    pvoucher_paidamount = 0;
    pvoucher_validated = 0;
    constructor(config, router, general, http, cdr, snackBar, alert, autofillMonitor) {
        this.config = config;
        this.router = router;
        this.general = general;
        this.http = http;
        this.cdr = cdr;
        this.snackBar = snackBar;
        this.alert = alert;
        this.autofillMonitor = autofillMonitor;
        this.general.setup();
        this.quotation_shippingcallingcode = this.config.defaultcallingcode;
    }
    ngOnInit() {
        this.apiSetup();
    }
    ngOnDestroy() {
        this.autofillSubscriptions.unsubscribe();
        this.stopAutofillMonitor(this.partyDisplayNameInputRef);
        this.stopAutofillMonitor(this.partyMobileInputRef);
        this.stopAutofillMonitor(this.quotationShippingEmailInputRef);
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
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.activeLoader = false;
            this.general.updateReponse(response);
            this.general.setup();
            this.general.menuLoaded();
            this.cdr.detectChanges();
            if (this.general.branch_result) {
                this.estimated_orderreadytime = parseInt(this.general.branch_result.branch_orderreadytime);
                const now = new Date();
                now.setHours(now.getHours() + 1);
                this.quotation_sdate = now.toISOString().substring(0, 10);
                this.quotation_stime = now.toTimeString().substring(0, 5);
            }
            if (this.general.branch_result && this.general.branch_result.branch_configuration) {
                let branch_configuration = JSON.parse(this.general.branch_result.branch_configuration);
                this.porder_method_cash = parseInt(branch_configuration.porder_method_cash);
                this.porder_method_general = parseInt(branch_configuration.porder_method_general);
                this.porder_method_card = parseInt(branch_configuration.porder_method_card);
            }
        }, error => {
            this.activeLoader = false;
            console.log(error);
            console.log(error.error);
            if (error.error.messagedetail == undefined) {
                this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
            }
            else {
                this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
            }
        });
    }
    async change_cartitemqty(_cQty, _aQty, _item_id, _quotationd_id) {
        let _fQty = parseInt(_cQty.toString()) + parseInt(_aQty.toString());
        if (_fQty == 0) {
            this.delete_cartitem(_quotationd_id);
        }
        else {
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
            this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
                this.activeLoader = false;
                this.general.updateReponse(response);
                this.inputpvoucher_code = '';
                this.pvoucher_code = '';
                this.pvoucher_id = 0;
                this.pvoucher_paidamount = 0;
                this.pvoucher_validated = 0;
                this.cdr.detectChanges();
            }, error => {
                this.activeLoader = false;
                console.log(error);
                console.log(error.error);
                if (error.error.messagedetail == undefined) {
                    this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
                }
                else {
                    this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
                }
            });
        }
    }
    delete_cartitem(quotationd_id) {
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
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.activeLoader = false;
            this.general.updateReponse(response);
            this.inputpvoucher_code = '';
            this.pvoucher_code = '';
            this.pvoucher_id = 0;
            this.pvoucher_paidamount = 0;
            this.pvoucher_validated = 0;
            this.cdr.detectChanges();
        }, error => {
            this.activeLoader = false;
            console.log(error);
            console.log(error.error);
            if (error.error.messagedetail == undefined) {
                this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> Connection error.</div>');
            }
            else {
                this.alertt.nativeElement.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Error!</strong> ' + error.error.messagedetail + '</div>');
            }
        });
    }
    validateOrderBtn() {
        this.syncCheckoutInputValues();
        this.isOrderDisabled = !(this.party_displayname.trim() &&
            this.party_mobile.toString().trim() &&
            this.quotation_shippingemail.trim() &&
            this.quotation_mode);
    }
    monitorAutofill(input) {
        if (!input || this.monitoredInputs.has(input.nativeElement)) {
            return;
        }
        this.monitoredInputs.add(input.nativeElement);
        this.autofillSubscriptions.add(this.autofillMonitor.monitor(input).subscribe(() => {
            this.validateOrderBtn();
            this.cdr.detectChanges();
        }));
        setTimeout(() => this.validateOrderBtn());
    }
    stopAutofillMonitor(input) {
        if (input) {
            this.autofillMonitor.stopMonitoring(input);
        }
    }
    syncCheckoutInputValues() {
        this.party_displayname = this.partyDisplayNameInputRef?.nativeElement.value ?? this.party_displayname;
        this.party_mobile = this.partyMobileInputRef?.nativeElement.value ?? this.party_mobile;
        this.quotation_shippingemail =
            this.quotationShippingEmailInputRef?.nativeElement.value ?? this.quotation_shippingemail;
    }
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
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.activeLoader = false;
            this.general.updateReponse(response);
            this.pvoucher_code = this.inputpvoucher_code;
            this.pvoucher_id = parseInt(response['pvoucher_id']);
            this.pvoucher_paidamount = parseInt(response['pvoucher_paidamount']);
            this.pvoucher_validated = parseInt(response['pvoucher_validated']);
            this.cdr.detectChanges();
        }, error => {
            this.activeLoader = false;
            this.pvoucher_code = '';
            this.pvoucher_id = 0;
            this.pvoucher_paidamount = 0;
            this.pvoucher_validated = 0;
            console.log(error);
            console.log(error.error);
            if (error.error.messagedetail == undefined) {
                this.alert.error("Error!", "Connection error.");
            }
            else {
                this.alert.error("Error!", error.error.messagedetail);
            }
        });
    }
    placeOrder() {
        this.validateOrderBtn();
        if (this.isOrderDisabled) {
            return;
        }
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
        formData.append('active_creditcard', this.quotation_mode);
        formData.append('quotation_mode', this.quotation_mode);
        formData.append('muser_placeoder', '1');
        formData.append('active_alldeliverytypeporder', '1');
        if (this.pvoucher_validated === 1) {
            formData.append('active_promobalance', this.pvoucher_paidamount.toString());
            formData.append('active_promocode', this.pvoucher_code);
            formData.append('validate_promocode', '1');
        }
        formData.append('party_displayname', this.party_displayname);
        formData.append('party_mobile', this.party_mobile);
        formData.append('quotation_shippingemail', this.quotation_shippingemail);
        formData.append('quotation_remarks', this.quotation_remarks);
        formData.append('quotation_persons', '2');
        formData.append('walletpaidamount', '0');
        if (!this.defaultTime) {
            formData.append('quotation_sdate', this.quotation_sdate);
            formData.append('quotation_stime', this.quotation_stime);
        }
        this.http.post(this.config.apiUrl + '/api/shop', formData).subscribe((response) => {
            this.general.updateReponse(response);
            console.log(" response ");
            console.log(response);
            let quotation_id = parseInt(response['quotation_id']);
            let quotation_mode = parseInt(this.quotation_mode);
            if (quotation_mode == 0) {
            }
            else {
            }
            this.activeLoader = false;
            // this.general.updateReponse(response);
            // this.pvoucher_code = this.inputpvoucher_code;
            // this.pvoucher_id = parseInt(response['pvoucher_id']);
            // this.pvoucher_paidamount = parseInt(response['pvoucher_paidamount']);
            // this.pvoucher_validated = parseInt(response['pvoucher_validated']);
            // this.cdr.detectChanges();
        }, error => {
            this.activeLoader = false;
            console.log(error);
            console.log(error.error);
            if (error.error.messagedetail == undefined) {
                this.alert.error("Error!", "Connection error.");
            }
            else {
                this.alert.error("Error!", error.error.messagedetail);
            }
        });
    }
    static ɵfac = function Checkout_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Checkout)(i0.ɵɵdirectiveInject(APP_CONFIG), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.General), i0.ɵɵdirectiveInject(i3.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.MatSnackBar), i0.ɵɵdirectiveInject(i5.Alert), i0.ɵɵdirectiveInject(i6.AutofillMonitor)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Checkout, selectors: [["app-checkout"]], viewQuery: function Checkout_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.alertt = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.partyDisplayNameInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.partyMobileInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.quotationShippingEmailInput = _t.first);
        } }, decls: 33, vars: 4, consts: [["alert", ""], ["partyDisplayNameInput", ""], ["partyMobileInput", ""], ["quotationShippingEmailInput", ""], [1, "cart-page"], ["aria-labelledby", "checkout-title", 1, "cart-header"], ["id", "checkout-title", 1, "cart-title"], ["aria-hidden", "true", 1, "cart-divider"], [1, "gInfoBlock"], ["aria-label", "Checkout", 1, "cart-content"], [1, "order-items-panel"], [1, "panel-header"], ["aria-hidden", "true", 1, "panel-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 0 1-8 0"], [1, "panel-title"], [1, "empty-cart"], [1, "items-scroll-container"], ["aria-labelledby", "summary-title", 1, "order-summary-panel"], ["d", "M9 11h6"], ["d", "M9 15h6"], ["d", "M17 3H7a2 2 0 0 0-2 2v16l3-2 3 2 3-2 3 2 3-2V5a2 2 0 0 0-2-2z"], ["id", "summary-title", 1, "panel-title"], [1, "summary-empty"], [1, "summary-details"], ["id", "loaderOverlay", "aria-live", "polite", "aria-label", "Loading", 1, "loader-overlay"], ["aria-hidden", "true", 1, "empty-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "52", "height", "52", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "empty-text"], ["type", "button", 1, "place-order-btn", 3, "routerLink"], ["aria-hidden", "true", 1, "btn-arrow"], [1, "cart-item"], [1, "item-info"], [1, "item-name"], [1, "item-price-per"], [1, "item-total"], [1, "total-amount"], ["aria-label", "Cart item controls", 1, "item-controls"], ["aria-label", "Quantity selector", 1, "qty-control"], ["type", "button", "aria-label", "Decrease quantity", 1, "qty-btn", 3, "click"], ["aria-label", "Quantity", 1, "qty-value"], ["type", "button", "aria-label", "Increase quantity", 1, "qty-btn", 3, "click"], ["type", "button", "aria-label", "Remove item", 1, "delete-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["points", "3 6 5 6 21 6"], ["d", "M19 6 18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "summary-row"], [1, "summary-label"], [1, "summary-value"], [1, "summary-divider"], [1, "summary-value", "gold"], [1, "promo-section"], [1, "promo-box"], [1, "fa-solid", "fa-tag", 2, "color", "#c9a84c"], ["type", "text", "placeholder", "Have a Promo Code?", "autocomplete", "off", 1, "promo-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "promo-apply-btn", 3, "click"], [1, "summary-row", "total-row"], [1, "summary-value", "gold", "large"], [1, "estimate-row"], [1, "form-group"], ["for", "party_displayname", 1, "form-label"], [1, "required"], ["id", "party_displayname", "type", "text", "placeholder", "Full Name", "autocomplete", "name", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], ["for", "party_mobile", 1, "form-label"], [1, "phone-input-wrap"], [1, "phone-prefix"], ["id", "party_mobile", "type", "number", "placeholder", "12345678", "autocomplete", "tel", 1, "form-input", "phone-input", 3, "ngModelChange", "input", "ngModel"], ["for", "quotation_shippingemail", 1, "form-label"], ["id", "quotation_shippingemail", "type", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], ["for", "quotation_remarks", 1, "form-label"], [1, "optional"], ["id", "quotation_remarks", "placeholder", "Any special instructions?", 1, "form-input", "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-label"], [1, "payment-option"], [1, "checkout-buttons"], ["type", "button", 1, "place-order-btn", 3, "click", "disabled"], ["type", "button", 1, "continue-shopping-btn", 3, "routerLink"], [2, "font-size", "17px", "text-align", "center", "color", "green"], [1, "estimate-info"], [1, "estimate-label"], [1, "estimate-value"], ["type", "button", 1, "change-btn", 3, "click"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "time", 3, "ngModelChange", "ngModel"], ["id", "pay_counter", "type", "radio", "name", "quotation_mode", "value", "0", 3, "ngModelChange", "ngModel"], ["for", "pay_counter", 1, "payment-label"], ["id", "pay_vipps", "type", "radio", "name", "quotation_mode", "value", "2", 3, "ngModelChange", "ngModel"], ["for", "pay_vipps", 1, "payment-label"], ["id", "pay_card", "type", "radio", "name", "quotation_mode", "value", "1", 3, "ngModelChange", "ngModel"], ["for", "pay_card", 1, "payment-label"], [1, "loader"]], template: function Checkout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-header");
            i0.ɵɵelementStart(1, "main", 4)(2, "section", 5)(3, "h1", 6);
            i0.ɵɵtext(4, "Your Cart");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 8, 0);
            i0.ɵɵelementStart(8, "section", 9)(9, "article", 10)(10, "header", 11)(11, "span", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(12, "svg", 13);
            i0.ɵɵelement(13, "path", 14)(14, "line", 15)(15, "path", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(16, "span", 17);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(18, Checkout_Conditional_18_Template, 12, 3, "div", 18)(19, Checkout_Conditional_19_Template, 3, 0, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "aside", 20)(21, "header", 11)(22, "span", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(23, "svg", 13);
            i0.ɵɵelement(24, "path", 21)(25, "path", 22)(26, "path", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(27, "span", 24);
            i0.ɵɵtext(28, "Order Summary");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(29, Checkout_Conditional_29_Template, 3, 0, "div", 25)(30, Checkout_Conditional_30_Template, 71, 27, "div", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(31, Checkout_Conditional_31_Template, 2, 0, "div", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(32, "app-footer");
        } if (rf & 2) {
            i0.ɵɵadvance(17);
            i0.ɵɵtextInterpolate1("Order Items (", ctx.general.calculate_totalcartitems(), ")");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.general.cartitems_list.length === 0 ? 18 : 19);
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(ctx.general.cartitems_list.length === 0 ? 29 : 30);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.activeLoader ? 31 : -1);
        } }, dependencies: [CommonModule, RouterModule, i1.RouterLink, FormsModule, i7.DefaultValueAccessor, i7.NumberValueAccessor, i7.RadioControlValueAccessor, i7.NgControlStatus, i7.NgModel, Header, Footer, i8.DecimalPipe], styles: ["//[_ngcontent-%COMP%]   ===========================\r\n//[_ngcontent-%COMP%]   Cart[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\r\n//[_ngcontent-%COMP%]   ===========================\r\n\r\n$bg-dark[_ngcontent-%COMP%]:   #0d1117[_ngcontent-%COMP%];\r\n$bg-panel[_ngcontent-%COMP%]:   #161b27[_ngcontent-%COMP%];\r\n$bg-input[_ngcontent-%COMP%]:   #1c2333[_ngcontent-%COMP%];\r\n$gold[_ngcontent-%COMP%]:   #c9a84c[_ngcontent-%COMP%];\r\n$gold-hover[_ngcontent-%COMP%]:   #e0be6e[_ngcontent-%COMP%];\r\n$text-white[_ngcontent-%COMP%]:   #ffffff[_ngcontent-%COMP%];\r\n$text-muted[_ngcontent-%COMP%]:   #8892a4[_ngcontent-%COMP%];\r\n$text-light[_ngcontent-%COMP%]:   #cdd3dc[_ngcontent-%COMP%];\r\n$border-color[_ngcontent-%COMP%]:   #2a3148[_ngcontent-%COMP%];\r\n$delete-red[_ngcontent-%COMP%]:   #e05252[_ngcontent-%COMP%];\r\n$radius-lg[_ngcontent-%COMP%]:   14px[_ngcontent-%COMP%];\r\n$radius-md[_ngcontent-%COMP%]:   20px[_ngcontent-%COMP%];\r\n$radius-sm[_ngcontent-%COMP%]:   6px[_ngcontent-%COMP%];\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.cart-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background-color: $bg-dark;\r\n  color: $text-white;\r\n  font-family: baloo 2;\r\n  padding: 40px 90px 60px;\r\n\r\n  @media (max-width: 900px) {\r\n    padding: 32px 40px 48px;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    padding: 24px 16px 48px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    padding: 24px 12px 48px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    padding: 16px 12px 40px;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Header[_ngcontent-%COMP%]   ----\r\n.cart-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 36px;\r\n\r\n  @media (max-width: 758px) {\r\n    margin-bottom: 28px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.cart-title[_ngcontent-%COMP%] {\r\n  font-size: clamp(1.8rem, 5vw, 2.6rem);\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  color: $text-white;\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: clamp(1.5rem, 5vw, 2rem);\r\n  }\r\n}\r\n\r\n.cart-divider[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 3px;\r\n  background: $gold;\r\n  margin: 12px auto 0;\r\n  border-radius: 2px;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Layout[_ngcontent-%COMP%]   ----\r\n.cart-content[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 420px;\r\n  gap: 24px;\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n\r\n  @media (max-width: 900px) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    gap: 12px;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Panel[_ngcontent-%COMP%]   Base[_ngcontent-%COMP%]   ----\r\n.order-items-panel[_ngcontent-%COMP%] {\r\n  background: $bg-panel;\r\n  border-radius: $radius-lg;\r\n  border: 1px solid $border-color;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n  max-height: 855px;\r\n  margin-right: -70px;\r\n  align-self: start;\r\n\r\n  @media (max-width: 758px) {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 16px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  .panel-icon {\r\n    color: $gold;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .panel-title {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    max-height: 300px;\r\n    color: $text-white;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Empty[_ngcontent-%COMP%]   Cart[_ngcontent-%COMP%]   ----\r\n.empty-cart[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 60px 24px;\r\n  gap: 16px;\r\n\r\n  .empty-icon {\r\n    color: #3a4460;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .empty-text {\r\n    color: $text-muted;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n.place-order-btn[_ngcontent-%COMP%] {\r\n  background: $gold;\r\n  color: #1a1200;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  padding: 7px 25px;\r\n  border-radius: 15px;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  transition: background 0.2s, transform 0.1s;\r\n\r\n  .btn-arrow {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  &:hover {\r\n    background: $gold-hover;\r\n    transform: translateY(-1px);\r\n  }\r\n\r\n  &:active {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Items[_ngcontent-%COMP%]   Scroll[_ngcontent-%COMP%]   Container[_ngcontent-%COMP%]   ----\r\n.items-scroll-container[_ngcontent-%COMP%] {\r\n  max-height: calc(855px - 57px);\r\n  overflow-y: auto;\r\n  padding: 4px 0;\r\n\r\n  &::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n\r\n  &::-webkit-scrollbar-track {\r\n    background: transparent;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    background: $border-color;\r\n    border-radius: 4px;\r\n\r\n    &:hover {\r\n      background: $gold;\r\n    }\r\n  }\r\n\r\n  scrollbar-width: thin;\r\n  scrollbar-color: $border-color transparent;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Cart[_ngcontent-%COMP%]   Item[_ngcontent-%COMP%]   ----\r\n.cart-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  padding: 16px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n  transition: background 0.15s;\r\n\r\n  &:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n  &:hover {\r\n    background: rgba(255, 255, 255, 0.02);\r\n  }\r\n}\r\n\r\n.item-info[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n\r\n  .item-name {\r\n    font-size: 0.92rem;\r\n    font-weight: 600;\r\n    color: $text-white;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  .item-price-per {\r\n    font-size: 0.8rem;\r\n    color: $text-muted;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  .item-total {\r\n    font-size: 0.82rem;\r\n    color: $text-light;\r\n\r\n    .total-amount {\r\n      color: $gold;\r\n      font-weight: 600;\r\n    }\r\n  }\r\n}\r\n\r\n.item-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  gap: 10px;\r\n  margin-left: 12px;\r\n}\r\n\r\n.qty-control[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-sm;\r\n  padding: 4px 10px;\r\n\r\n  .qty-btn {\r\n    background: none;\r\n    border: none;\r\n    color: $text-white;\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 3px;\r\n    transition: background 0.15s, color 0.15s;\r\n\r\n    &:hover {\r\n      background: $border-color;\r\n      color: $gold;\r\n    }\r\n  }\r\n\r\n  .qty-value {\r\n    font-size: 0.9rem;\r\n    font-weight: 600;\r\n    min-width: 16px;\r\n    text-align: center;\r\n    color: $text-white;\r\n  }\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  color: $delete-red;\r\n  cursor: pointer;\r\n  padding: 4px;\r\n  border-radius: $radius-sm;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: background 0.15s;\r\n\r\n  &:hover {\r\n    background: rgba(224, 82, 82, 0.12);\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Order[_ngcontent-%COMP%]   Summary[_ngcontent-%COMP%]   Panel[_ngcontent-%COMP%]   ----\r\n.order-summary-panel[_ngcontent-%COMP%] {\r\n  background: $bg-panel;\r\n  border-radius: $radius-lg;\r\n  border: 1px solid $border-color;\r\n  overflow: hidden;\r\n  margin-bottom: 80px;\r\n  margin-left: 70px;\r\n\r\n  @media (max-width: 758px) {\r\n    margin-left: 0;\r\n    margin-bottom: 80px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    margin-bottom: 60px;\r\n  }\r\n}\r\n\r\n.summary-empty[_ngcontent-%COMP%] {\r\n  padding: 32px 20px;\r\n  color: $text-muted;\r\n  font-size: 0.9rem;\r\n  text-align: center;\r\n  max-height: 250px;\r\n  overflow: auto;\r\n}\r\n\r\n.summary-details[_ngcontent-%COMP%] {\r\n  padding: 16px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n\r\n  @media (max-width: 758px) {\r\n    padding: 14px 16px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    padding: 12px 14px;\r\n  }\r\n}\r\n\r\n.summary-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  .summary-label {\r\n    font-size: 0.85rem;\r\n    color: $text-muted;\r\n  }\r\n\r\n  .summary-value {\r\n    font-size: 0.85rem;\r\n    color: $text-light;\r\n\r\n    &.gold {\r\n      color: $gold;\r\n      font-weight: 600;\r\n    }\r\n\r\n    &.large {\r\n      font-size: 1.1rem;\r\n    }\r\n  }\r\n\r\n  &.total-row {\r\n    .summary-label {\r\n      font-size: 0.95rem;\r\n      font-weight: 700;\r\n      color: $text-white;\r\n    }\r\n  }\r\n}\r\n\r\n.summary-divider[_ngcontent-%COMP%] {\r\n  height: 1px;\r\n  background: $border-color;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Promo[_ngcontent-%COMP%]   ----\r\n.promo-section[_ngcontent-%COMP%] {\r\n  margin: 4px 0;\r\n}\r\n\r\n.promo-box[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: 10px;\r\n  padding: 8px 12px;\r\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\r\n\r\n  &:focus-within {\r\n    border-color: $gold;\r\n    box-shadow: 0 0 0 3px rgba($gold, 0.08);\r\n  }\r\n\r\n  .promo-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .ticket-svg {\r\n    width: 36px;\r\n    height: 36px;\r\n    filter: drop-shadow(0 0 4px rgba($gold, 0.35));\r\n    transition: filter 0.3s ease, transform 0.3s ease;\r\n  }\r\n\r\n  &:focus-within .ticket-svg,\r\n  &:hover .ticket-svg {\r\n    filter: drop-shadow(0 0 8px rgba($gold, 0.65));\r\n    transform: rotate(-6deg) scale(1.08);\r\n  }\r\n\r\n  .promo-input {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    font-size: 0.85rem;\r\n\r\n    &::placeholder {\r\n      color: $text-muted;\r\n    }\r\n  }\r\n\r\n  .promo-apply-btn {\r\n    background: $gold;\r\n    color: #1a1200;\r\n    border: none;\r\n    border-radius: $radius-sm;\r\n    padding: 5px 14px;\r\n    font-size: 0.82rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: background 0.2s, box-shadow 0.2s;\r\n\r\n    &:hover {\r\n      background: $gold-hover;\r\n      box-shadow: 0 2px 10px rgba($gold, 0.35);\r\n    }\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Estimate[_ngcontent-%COMP%]   ----\r\n.estimate-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  padding: 6px 0;\r\n  border-top: 1px solid $border-color;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  .estimate-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n  }\r\n\r\n  .estimate-label {\r\n    font-size: 0.78rem;\r\n    color: $text-muted;\r\n  }\r\n\r\n  .estimate-value {\r\n    font-size: 0.85rem;\r\n    color: $text-light;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .change-btn {\r\n    background: none;\r\n    border: none;\r\n    color: $gold;\r\n    font-size: 0.82rem;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    padding: 2px 0;\r\n\r\n    &:hover {\r\n      color: $gold-hover;\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Form[_ngcontent-%COMP%]   ----\r\n.form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n\r\n  @media (max-width: 400px) {\r\n    gap: 5px;\r\n  }\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: $text-muted;\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.75rem;\r\n  }\r\n\r\n  .required {\r\n    color: $delete-red;\r\n    margin-left: 2px;\r\n  }\r\n\r\n  .optional {\r\n    color: #5a6480;\r\n    font-size: 0.75rem;\r\n  }\r\n}\r\n\r\n.form-input[_ngcontent-%COMP%] {\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-sm;\r\n  color: $text-white;\r\n  font-size: 0.85rem;\r\n  padding: 9px 12px;\r\n  outline: none;\r\n  transition: border-color 0.15s;\r\n  width: 100%;\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.8rem;\r\n    padding: 8px 10px;\r\n  }\r\n\r\n  &::placeholder {\r\n    color: #4a5370;\r\n  }\r\n\r\n  &:focus {\r\n    border-color: $gold;\r\n  }\r\n}\r\n\r\n.phone-input-wrap[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-sm;\r\n  overflow: hidden;\r\n  transition: border-color 0.15s;\r\n\r\n  &:focus-within {\r\n    border-color: $gold;\r\n  }\r\n\r\n  .phone-prefix {\r\n    padding: 9px 10px;\r\n    font-size: 0.85rem;\r\n    color: $text-muted;\r\n    border-right: 1px solid $border-color;\r\n  }\r\n\r\n  .phone-input {\r\n    border: none;\r\n    border-radius: 0;\r\n    flex: 1;\r\n\r\n    &:focus {\r\n      border-color: transparent;\r\n    }\r\n  }\r\n}\r\n\r\n.form-textarea[_ngcontent-%COMP%] {\r\n  resize: vertical;\r\n  min-height: 70px;\r\n  font-family: baloo 2;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Payment[_ngcontent-%COMP%]   ----\r\n.payment-option[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  input[type=\"radio\"] {\r\n    accent-color: $gold;\r\n    width: 16px;\r\n    height: 16px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .payment-label {\r\n    font-size: 0.88rem;\r\n    color: $text-light;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Checkout[_ngcontent-%COMP%]   Buttons[_ngcontent-%COMP%]   ----\r\n.checkout-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n\r\n  @media (max-width: 758px) {\r\n    gap: 10px;\r\n    margin-top: 16px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    gap: 10px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    gap: 8px;\r\n    margin-top: 12px;\r\n  }\r\n}\r\n\r\n.place-order-btn[_ngcontent-%COMP%] {\r\n  background: $gold;\r\n  color: #1a1200;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  padding: 12px 25px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  transition: background 0.2s, transform 0.1s;\r\n  width: 100%;\r\n\r\n  .btn-arrow {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  &:hover {\r\n    background: $gold-hover;\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  &:disabled {\r\n    background: #999;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    font-size: 0.95rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    font-size: 0.95rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.88rem;\r\n    padding: 10px 16px;\r\n  }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   ----[_ngcontent-%COMP%]   Continue[_ngcontent-%COMP%]   Shopping[_ngcontent-%COMP%]   ----\r\n.continue-shopping-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  color: $text-light;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  padding: 12px 25px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  transition: background 0.2s, border-color 0.2s, color 0.2s;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  &:hover {\r\n    background: $border-color;\r\n    border-color: $gold;\r\n    color: $text-white;\r\n  }\r\n\r\n  &:disabled {\r\n    color: #999;\r\n    background: #333;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    font-size: 0.88rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    font-size: 0.88rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.8rem;\r\n    padding: 10px 16px;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Checkout, [{
        type: Component,
        args: [{ selector: 'app-checkout', imports: [CommonModule, RouterModule, FormsModule, Header, Footer,], template: "<app-header></app-header>\n\n<main class=\"cart-page\">\n  <section class=\"cart-header\" aria-labelledby=\"checkout-title\">\n    <h1 id=\"checkout-title\" class=\"cart-title\">Your Cart</h1>\n    <div class=\"cart-divider\" aria-hidden=\"true\"></div>\n  </section>\n\n  <div class=\"gInfoBlock\" #alert></div>\n\n  <section class=\"cart-content\" aria-label=\"Checkout\">\n    <article class=\"order-items-panel\">\n      <header class=\"panel-header\">\n        <span class=\"panel-icon\" aria-hidden=\"true\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"20\"\n            height=\"20\"\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\">\n            <path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\" />\n            <line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\" />\n            <path d=\"M16 10a4 4 0 0 1-8 0\" />\n          </svg>\n        </span>\n        <span class=\"panel-title\">Order Items ({{ general.calculate_totalcartitems() }})</span>\n      </header>\n\n      @if (general.cartitems_list.length === 0) {\n        <div class=\"empty-cart\">\n          <div class=\"empty-icon\" aria-hidden=\"true\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"52\"\n              height=\"52\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"1.2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\">\n              <path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\" />\n              <line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\" />\n              <path d=\"M16 10a4 4 0 0 1-8 0\" />\n            </svg>\n          </div>\n\n          <p class=\"empty-text\">Your cart is empty.</p>\n\n          <button class=\"place-order-btn\" type=\"button\" [routerLink]=\"['/', lang, 'menu']\">\n            Go to Menu\n            <span class=\"btn-arrow\" aria-hidden=\"true\">\u2192</span>\n          </button>\n        </div>\n      } @else {\n        <div class=\"items-scroll-container\">\n          @for (record of general.cartitems_list; track record.quotationd_id) {\n            <div class=\"cart-item\">\n              <div class=\"item-info\">\n                <h2 class=\"item-name\">{{ record.item_name }}</h2>\n\n                <p class=\"item-price-per\">\n                  @ {{ general.branch_result?.currency_symbol }}\n                  {{ record.fnetprice / record.qty | number:'1.2-2' }}/{{ record.item_unit }}\n                </p>\n\n                <p class=\"item-total\">\n                  Total:\n                  <span class=\"total-amount\">\n                    {{ general.branch_result?.currency_symbol }}\n                    {{ record.fnetprice | number:'1.2-2' }}\n                  </span>\n                </p>\n              </div>\n\n              <div class=\"item-controls\" aria-label=\"Cart item controls\">\n                <div class=\"qty-control\" aria-label=\"Quantity selector\">\n                  <button\n                    class=\"qty-btn\"\n                    type=\"button\"\n                    aria-label=\"Decrease quantity\"\n                    (click)=\"change_cartitemqty(-1, record.qty, record.item_id, record.quotationd_id)\">\n                    \u2212\n                  </button>\n\n                  <span class=\"qty-value\" aria-label=\"Quantity\">{{ record.qty }}</span>\n\n                  <button\n                    class=\"qty-btn\"\n                    type=\"button\"\n                    aria-label=\"Increase quantity\"\n                    (click)=\"change_cartitemqty(1, record.qty, record.item_id, record.quotationd_id)\">\n                    +\n                  </button>\n                </div>\n\n                <button\n                  class=\"delete-btn\"\n                  type=\"button\"\n                  aria-label=\"Remove item\"\n                  (click)=\"delete_cartitem(record.quotationd_id)\">\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"16\"\n                    height=\"16\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    aria-hidden=\"true\">\n                    <polyline points=\"3 6 5 6 21 6\" />\n                    <path d=\"M19 6 18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6\" />\n                    <path d=\"M10 11v6M14 11v6\" />\n                    <path d=\"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2\" />\n                  </svg>\n                </button>\n              </div>\n            </div>\n          }\n        </div>\n      }\n    </article>\n\n    <aside class=\"order-summary-panel\" aria-labelledby=\"summary-title\">\n      <header class=\"panel-header\">\n        <span class=\"panel-icon\" aria-hidden=\"true\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"20\"\n            height=\"20\"\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\">\n            <path d=\"M9 11h6\" />\n            <path d=\"M9 15h6\" />\n            <path d=\"M17 3H7a2 2 0 0 0-2 2v16l3-2 3 2 3-2 3 2 3-2V5a2 2 0 0 0-2-2z\" />\n          </svg>\n        </span>\n        <span id=\"summary-title\" class=\"panel-title\">Order Summary</span>\n      </header>\n\n      @if (general.cartitems_list.length === 0) {\n        <div class=\"summary-empty\">\n          <p>No items to checkout.</p>\n        </div>\n      } @else {\n        <div class=\"summary-details\">\n          <div class=\"summary-row\">\n            <span class=\"summary-label\">Item</span>\n            <span class=\"summary-value\">{{ languageService.t(lang, 'cartbody') }}</span>\n          </div>\n\n          <div class=\"summary-divider\"></div>\n\n          <div class=\"summary-row\">\n            <span class=\"summary-label\">Subtotal</span>\n            <span class=\"summary-value gold\">\n              {{ general.branch_result?.branch_currencysymbol }}.\n              {{ general.calculate_totalcartamount() | number:'1.2-2' }}\n            </span>\n          </div> \n\n          <div class=\"promo-section\">\n            <div class=\"promo-box\">\n              <i class=\"fa-solid fa-tag\" style=\"color:#c9a84c;\"></i>\n              <input\n                class=\"promo-input\"\n                type=\"text\"\n                placeholder=\"Have a Promo Code?\"\n                autocomplete=\"off\"\n                [(ngModel)]=\"inputpvoucher_code\" />\n              <button class=\"promo-apply-btn\" type=\"button\" (click)=\"applyPromo()\">Apply</button>\n            </div>\n          </div>\n\n          @if (pvoucher_validated === 1) {\n            <div class=\"summary-row\">\n              <span class=\"summary-label\">Promo Discount</span>\n              <span class=\"summary-value gold\">\n                {{ general.branch_result?.branch_currencysymbol }}.\n                {{ pvoucher_paidamount | number:'1.2-2' }}\n              </span>\n            </div>\n            <div style=\"font-size: 17px;text-align: center; color: green;\">\n              <small>&#10003; Applied <strong>DISCOUNTS</strong></small>\n            </div>\n          }\n\n          <div class=\"summary-row total-row\">\n            <span class=\"summary-label\">Total:</span>\n            <span class=\"summary-value gold large\">\n              {{ general.branch_result?.branch_currencysymbol }}.\n              {{ (general.calculate_totalcartamount() - this.pvoucher_paidamount) | number:'1.2-2' }}\n            </span>\n          </div>\n\n\n          @if (defaultTime) {\n          <div class=\"estimate-row\">\n            <div class=\"estimate-info\">\n              <span class=\"estimate-label\">Estimated Pickup Time</span>\n              <span class=\"estimate-value\">About {{ estimated_orderreadytime }} minutes</span>\n            </div>\n            <button class=\"change-btn\" type=\"button\" (click)=\"(defaultTime = !defaultTime)\">Change</button>\n          </div>\n          }\n\n          @if (!defaultTime) {\n          <div class=\"estimate-row\">\n            <div class=\"estimate-info\">\n              <span class=\"estimate-label\">Pickup Time</span>\n              Date:\n              <input type=\"date\" [(ngModel)]=\"quotation_sdate\" />\n              Time:\n              <input type=\"time\" [(ngModel)]=\"quotation_stime\" />\n            </div>\n            <button class=\"change-btn\" type=\"button\" (click)=\"(defaultTime = !defaultTime)\">Cancel</button>\n          </div>\n          }\n\n\n\n          <div class=\"form-group\">\n            <label class=\"form-label\" for=\"party_displayname\">Name<span class=\"required\">*</span></label>\n            <input\n              #partyDisplayNameInput\n              id=\"party_displayname\"\n              class=\"form-input\"\n              type=\"text\"\n              placeholder=\"Full Name\"\n              autocomplete=\"name\"\n              [(ngModel)]=\"party_displayname\"\n              (input)=\"validateOrderBtn()\"\n              (ngModelChange)=\"validateOrderBtn()\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"form-label\" for=\"party_mobile\">\n              Mobile Number\n              <span class=\"required\">*</span>\n            </label>\n            <div class=\"phone-input-wrap\">\n              <span class=\"phone-prefix\">{{ quotation_shippingcallingcode }}</span>\n              <input\n                #partyMobileInput\n                id=\"party_mobile\"\n                class=\"form-input phone-input\"\n                type=\"number\"\n                placeholder=\"12345678\"\n                autocomplete=\"tel\"\n                [(ngModel)]=\"party_mobile\"\n                (input)=\"validateOrderBtn()\"\n                (ngModelChange)=\"validateOrderBtn()\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"form-label\" for=\"quotation_shippingemail\">\n              Email Address\n              <span class=\"required\">*</span>\n            </label>\n            <input\n              #quotationShippingEmailInput\n              id=\"quotation_shippingemail\"\n              class=\"form-input\"\n              type=\"email\"\n              placeholder=\"you@example.com\"\n              autocomplete=\"email\"\n              [(ngModel)]=\"quotation_shippingemail\"\n              (input)=\"validateOrderBtn()\"\n              (ngModelChange)=\"validateOrderBtn()\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"form-label\" for=\"quotation_remarks\">\n              Add Comment\n              <span class=\"optional\">(optional)</span>\n            </label>\n            <textarea\n              id=\"quotation_remarks\"\n              class=\"form-input form-textarea\"\n              placeholder=\"Any special instructions?\"\n              [(ngModel)]=\"quotation_remarks\"></textarea>\n          </div>\n\n          <div class=\"form-group\">\n            <span class=\"form-label\">\n              Payment Method\n              <span class=\"required\">*</span>\n            </span>\n\n            @if (porder_method_cash === 1) {\n              <div class=\"payment-option\">\n                <input id=\"pay_counter\" type=\"radio\" name=\"quotation_mode\" value=\"0\" [(ngModel)]=\"quotation_mode\" (ngModelChange)=\"validateOrderBtn()\" />\n                <label for=\"pay_counter\" class=\"payment-label\">Pay on Counter</label>\n              </div>\n            }\n\n            @if (porder_method_general === 1) {\n              <div class=\"payment-option\">\n                <input id=\"pay_vipps\" type=\"radio\" name=\"quotation_mode\" value=\"2\" [(ngModel)]=\"quotation_mode\" (ngModelChange)=\"validateOrderBtn()\" />\n                <label for=\"pay_vipps\" class=\"payment-label\">VIPPS</label>\n              </div>\n            }\n\n            @if (porder_method_card === 1) {\n              <div class=\"payment-option\">\n                <input id=\"pay_card\" type=\"radio\" name=\"quotation_mode\" value=\"1\" [(ngModel)]=\"quotation_mode\" (ngModelChange)=\"validateOrderBtn()\" />\n                <label for=\"pay_card\" class=\"payment-label\">Card</label>\n              </div>\n            }\n          </div>\n\n          <div class=\"checkout-buttons\">\n            <button [disabled]=\"isOrderDisabled\" class=\"place-order-btn\" type=\"button\" (click)=\"placeOrder()\">\n              Place Order\n            </button>\n            <button class=\"continue-shopping-btn\" type=\"button\" [routerLink]=\"['/', lang, 'menu']\">\n              Continue Shopping\n            </button>\n          </div>\n\n\n        </div>\n      }\n    </aside>\n  </section>\n\n  @if (activeLoader) {\n    <div class=\"loader-overlay\" id=\"loaderOverlay\" aria-live=\"polite\" aria-label=\"Loading\">\n      <div class=\"loader\"></div>\n    </div>\n  }\n</main>\n\n<app-footer></app-footer>\n", styles: ["// ===========================\r\n// Cart Component Styles\r\n// ===========================\r\n\r\n$bg-dark: #0d1117;\r\n$bg-panel: #161b27;\r\n$bg-input: #1c2333;\r\n$gold: #c9a84c;\r\n$gold-hover: #e0be6e;\r\n$text-white: #ffffff;\r\n$text-muted: #8892a4;\r\n$text-light: #cdd3dc;\r\n$border-color: #2a3148;\r\n$delete-red: #e05252;\r\n$radius-lg: 14px;\r\n$radius-md: 20px;\r\n$radius-sm: 6px;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.cart-page {\r\n  min-height: 100vh;\r\n  background-color: $bg-dark;\r\n  color: $text-white;\r\n  font-family: baloo 2;\r\n  padding: 40px 90px 60px;\r\n\r\n  @media (max-width: 900px) {\r\n    padding: 32px 40px 48px;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    padding: 24px 16px 48px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    padding: 24px 12px 48px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    padding: 16px 12px 40px;\r\n  }\r\n}\r\n\r\n// ---- Header ----\r\n.cart-header {\r\n  text-align: center;\r\n  margin-bottom: 36px;\r\n\r\n  @media (max-width: 758px) {\r\n    margin-bottom: 28px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.cart-title {\r\n  font-size: clamp(1.8rem, 5vw, 2.6rem);\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  color: $text-white;\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: clamp(1.5rem, 5vw, 2rem);\r\n  }\r\n}\r\n\r\n.cart-divider {\r\n  width: 60px;\r\n  height: 3px;\r\n  background: $gold;\r\n  margin: 12px auto 0;\r\n  border-radius: 2px;\r\n}\r\n\r\n// ---- Layout ----\r\n.cart-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 420px;\r\n  gap: 24px;\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n\r\n  @media (max-width: 900px) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    gap: 12px;\r\n  }\r\n}\r\n\r\n// ---- Panel Base ----\r\n.order-items-panel {\r\n  background: $bg-panel;\r\n  border-radius: $radius-lg;\r\n  border: 1px solid $border-color;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n  max-height: 855px;\r\n  margin-right: -70px;\r\n  align-self: start;\r\n\r\n  @media (max-width: 758px) {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n.panel-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 16px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  .panel-icon {\r\n    color: $gold;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .panel-title {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    max-height: 300px;\r\n    color: $text-white;\r\n  }\r\n}\r\n\r\n// ---- Empty Cart ----\r\n.empty-cart {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 60px 24px;\r\n  gap: 16px;\r\n\r\n  .empty-icon {\r\n    color: #3a4460;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .empty-text {\r\n    color: $text-muted;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n.place-order-btn {\r\n  background: $gold;\r\n  color: #1a1200;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  padding: 7px 25px;\r\n  border-radius: 15px;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  transition: background 0.2s, transform 0.1s;\r\n\r\n  .btn-arrow {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  &:hover {\r\n    background: $gold-hover;\r\n    transform: translateY(-1px);\r\n  }\r\n\r\n  &:active {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n// ---- Items Scroll Container ----\r\n.items-scroll-container {\r\n  max-height: calc(855px - 57px);\r\n  overflow-y: auto;\r\n  padding: 4px 0;\r\n\r\n  &::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n\r\n  &::-webkit-scrollbar-track {\r\n    background: transparent;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    background: $border-color;\r\n    border-radius: 4px;\r\n\r\n    &:hover {\r\n      background: $gold;\r\n    }\r\n  }\r\n\r\n  scrollbar-width: thin;\r\n  scrollbar-color: $border-color transparent;\r\n}\r\n\r\n// ---- Cart Item ----\r\n.cart-item {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  padding: 16px 20px;\r\n  border-bottom: 1px solid $border-color;\r\n  transition: background 0.15s;\r\n\r\n  &:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n  &:hover {\r\n    background: rgba(255, 255, 255, 0.02);\r\n  }\r\n}\r\n\r\n.item-info {\r\n  flex: 1;\r\n\r\n  .item-name {\r\n    font-size: 0.92rem;\r\n    font-weight: 600;\r\n    color: $text-white;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  .item-price-per {\r\n    font-size: 0.8rem;\r\n    color: $text-muted;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  .item-total {\r\n    font-size: 0.82rem;\r\n    color: $text-light;\r\n\r\n    .total-amount {\r\n      color: $gold;\r\n      font-weight: 600;\r\n    }\r\n  }\r\n}\r\n\r\n.item-controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  gap: 10px;\r\n  margin-left: 12px;\r\n}\r\n\r\n.qty-control {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-sm;\r\n  padding: 4px 10px;\r\n\r\n  .qty-btn {\r\n    background: none;\r\n    border: none;\r\n    color: $text-white;\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 3px;\r\n    transition: background 0.15s, color 0.15s;\r\n\r\n    &:hover {\r\n      background: $border-color;\r\n      color: $gold;\r\n    }\r\n  }\r\n\r\n  .qty-value {\r\n    font-size: 0.9rem;\r\n    font-weight: 600;\r\n    min-width: 16px;\r\n    text-align: center;\r\n    color: $text-white;\r\n  }\r\n}\r\n\r\n.delete-btn {\r\n  background: none;\r\n  border: none;\r\n  color: $delete-red;\r\n  cursor: pointer;\r\n  padding: 4px;\r\n  border-radius: $radius-sm;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: background 0.15s;\r\n\r\n  &:hover {\r\n    background: rgba(224, 82, 82, 0.12);\r\n  }\r\n}\r\n\r\n// ---- Order Summary Panel ----\r\n.order-summary-panel {\r\n  background: $bg-panel;\r\n  border-radius: $radius-lg;\r\n  border: 1px solid $border-color;\r\n  overflow: hidden;\r\n  margin-bottom: 80px;\r\n  margin-left: 70px;\r\n\r\n  @media (max-width: 758px) {\r\n    margin-left: 0;\r\n    margin-bottom: 80px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    margin-bottom: 60px;\r\n  }\r\n}\r\n\r\n.summary-empty {\r\n  padding: 32px 20px;\r\n  color: $text-muted;\r\n  font-size: 0.9rem;\r\n  text-align: center;\r\n  max-height: 250px;\r\n  overflow: auto;\r\n}\r\n\r\n.summary-details {\r\n  padding: 16px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n\r\n  @media (max-width: 758px) {\r\n    padding: 14px 16px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    padding: 12px 14px;\r\n  }\r\n}\r\n\r\n.summary-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  .summary-label {\r\n    font-size: 0.85rem;\r\n    color: $text-muted;\r\n  }\r\n\r\n  .summary-value {\r\n    font-size: 0.85rem;\r\n    color: $text-light;\r\n\r\n    &.gold {\r\n      color: $gold;\r\n      font-weight: 600;\r\n    }\r\n\r\n    &.large {\r\n      font-size: 1.1rem;\r\n    }\r\n  }\r\n\r\n  &.total-row {\r\n    .summary-label {\r\n      font-size: 0.95rem;\r\n      font-weight: 700;\r\n      color: $text-white;\r\n    }\r\n  }\r\n}\r\n\r\n.summary-divider {\r\n  height: 1px;\r\n  background: $border-color;\r\n}\r\n\r\n// ---- Promo ----\r\n.promo-section {\r\n  margin: 4px 0;\r\n}\r\n\r\n.promo-box {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: 10px;\r\n  padding: 8px 12px;\r\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\r\n\r\n  &:focus-within {\r\n    border-color: $gold;\r\n    box-shadow: 0 0 0 3px rgba($gold, 0.08);\r\n  }\r\n\r\n  .promo-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .ticket-svg {\r\n    width: 36px;\r\n    height: 36px;\r\n    filter: drop-shadow(0 0 4px rgba($gold, 0.35));\r\n    transition: filter 0.3s ease, transform 0.3s ease;\r\n  }\r\n\r\n  &:focus-within .ticket-svg,\r\n  &:hover .ticket-svg {\r\n    filter: drop-shadow(0 0 8px rgba($gold, 0.65));\r\n    transform: rotate(-6deg) scale(1.08);\r\n  }\r\n\r\n  .promo-input {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    font-size: 0.85rem;\r\n\r\n    &::placeholder {\r\n      color: $text-muted;\r\n    }\r\n  }\r\n\r\n  .promo-apply-btn {\r\n    background: $gold;\r\n    color: #1a1200;\r\n    border: none;\r\n    border-radius: $radius-sm;\r\n    padding: 5px 14px;\r\n    font-size: 0.82rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: background 0.2s, box-shadow 0.2s;\r\n\r\n    &:hover {\r\n      background: $gold-hover;\r\n      box-shadow: 0 2px 10px rgba($gold, 0.35);\r\n    }\r\n  }\r\n}\r\n\r\n// ---- Estimate ----\r\n.estimate-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  padding: 6px 0;\r\n  border-top: 1px solid $border-color;\r\n  border-bottom: 1px solid $border-color;\r\n\r\n  .estimate-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n  }\r\n\r\n  .estimate-label {\r\n    font-size: 0.78rem;\r\n    color: $text-muted;\r\n  }\r\n\r\n  .estimate-value {\r\n    font-size: 0.85rem;\r\n    color: $text-light;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .change-btn {\r\n    background: none;\r\n    border: none;\r\n    color: $gold;\r\n    font-size: 0.82rem;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    padding: 2px 0;\r\n\r\n    &:hover {\r\n      color: $gold-hover;\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n}\r\n\r\n// ---- Form ----\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n\r\n  @media (max-width: 400px) {\r\n    gap: 5px;\r\n  }\r\n}\r\n\r\n.form-label {\r\n  font-size: 0.8rem;\r\n  color: $text-muted;\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.75rem;\r\n  }\r\n\r\n  .required {\r\n    color: $delete-red;\r\n    margin-left: 2px;\r\n  }\r\n\r\n  .optional {\r\n    color: #5a6480;\r\n    font-size: 0.75rem;\r\n  }\r\n}\r\n\r\n.form-input {\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-sm;\r\n  color: $text-white;\r\n  font-size: 0.85rem;\r\n  padding: 9px 12px;\r\n  outline: none;\r\n  transition: border-color 0.15s;\r\n  width: 100%;\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.8rem;\r\n    padding: 8px 10px;\r\n  }\r\n\r\n  &::placeholder {\r\n    color: #4a5370;\r\n  }\r\n\r\n  &:focus {\r\n    border-color: $gold;\r\n  }\r\n}\r\n\r\n.phone-input-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  border-radius: $radius-sm;\r\n  overflow: hidden;\r\n  transition: border-color 0.15s;\r\n\r\n  &:focus-within {\r\n    border-color: $gold;\r\n  }\r\n\r\n  .phone-prefix {\r\n    padding: 9px 10px;\r\n    font-size: 0.85rem;\r\n    color: $text-muted;\r\n    border-right: 1px solid $border-color;\r\n  }\r\n\r\n  .phone-input {\r\n    border: none;\r\n    border-radius: 0;\r\n    flex: 1;\r\n\r\n    &:focus {\r\n      border-color: transparent;\r\n    }\r\n  }\r\n}\r\n\r\n.form-textarea {\r\n  resize: vertical;\r\n  min-height: 70px;\r\n  font-family: baloo 2;\r\n}\r\n\r\n// ---- Payment ----\r\n.payment-option {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  input[type=\"radio\"] {\r\n    accent-color: $gold;\r\n    width: 16px;\r\n    height: 16px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .payment-label {\r\n    font-size: 0.88rem;\r\n    color: $text-light;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n// ---- Checkout Buttons ----\r\n.checkout-buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n\r\n  @media (max-width: 758px) {\r\n    gap: 10px;\r\n    margin-top: 16px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    gap: 10px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    gap: 8px;\r\n    margin-top: 12px;\r\n  }\r\n}\r\n\r\n.place-order-btn {\r\n  background: $gold;\r\n  color: #1a1200;\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n  padding: 12px 25px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  transition: background 0.2s, transform 0.1s;\r\n  width: 100%;\r\n\r\n  .btn-arrow {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  &:hover {\r\n    background: $gold-hover;\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  &:disabled {\r\n    background: #999;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    font-size: 0.95rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    font-size: 0.95rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.88rem;\r\n    padding: 10px 16px;\r\n  }\r\n}\r\n\r\n// ---- Continue Shopping ----\r\n.continue-shopping-btn {\r\n  width: 100%;\r\n  background: $bg-input;\r\n  border: 1px solid $border-color;\r\n  color: $text-light;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  padding: 12px 25px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  transition: background 0.2s, border-color 0.2s, color 0.2s;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  &:hover {\r\n    background: $border-color;\r\n    border-color: $gold;\r\n    color: $text-white;\r\n  }\r\n\r\n  &:disabled {\r\n    color: #999;\r\n    background: #333;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n  }\r\n\r\n  @media (max-width: 758px) {\r\n    font-size: 0.88rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    font-size: 0.88rem;\r\n    padding: 11px 20px;\r\n  }\r\n\r\n  @media (max-width: 400px) {\r\n    font-size: 0.8rem;\r\n    padding: 10px 16px;\r\n  }\r\n}"] }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [APP_CONFIG]
            }] }, { type: i1.Router }, { type: i2.General }, { type: i3.HttpClient }, { type: i0.ChangeDetectorRef }, { type: i4.MatSnackBar }, { type: i5.Alert }, { type: i6.AutofillMonitor }], { alertt: [{
            type: ViewChild,
            args: ['alert']
        }], partyDisplayNameInput: [{
            type: ViewChild,
            args: ['partyDisplayNameInput']
        }], partyMobileInput: [{
            type: ViewChild,
            args: ['partyMobileInput']
        }], quotationShippingEmailInput: [{
            type: ViewChild,
            args: ['quotationShippingEmailInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Checkout, { className: "Checkout", filePath: "app/pages/checkout/checkout.ts", lineNumber: 31 }); })();

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/button";
function AlertSnack_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "check_circle");
    i0.ɵɵelementEnd();
} }
function AlertSnack_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "error");
    i0.ɵɵelementEnd();
} }
function AlertSnack_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "warning");
    i0.ɵɵelementEnd();
} }
function AlertSnack_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "info");
    i0.ɵɵelementEnd();
} }
function AlertSnack_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function AlertSnack_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵlistener("click", function AlertSnack_a_12_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.snackRef.dismissWithAction()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.data.action, " ");
} }
export class AlertSnack {
    data;
    snackRef;
    constructor(data, snackRef) {
        this.data = data;
        this.snackRef = snackRef;
    }
    static ɵfac = function AlertSnack_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertSnack)(i0.ɵɵdirectiveInject(MAT_SNACK_BAR_DATA), i0.ɵɵdirectiveInject(i1.MatSnackBarRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertSnack, selectors: [["app-alert-snack"]], decls: 18, vars: 11, consts: [[1, "snack-wrapper"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "spinner", 4, "ngSwitchCase"], [1, "snack-body"], [1, "snack-title"], [1, "snack-msg"], ["class", "snack-action", 3, "click", 4, "ngIf"], [1, "progress-bar"], [1, "progress-inner"], ["mat-icon-button", "", 3, "click"], [1, "spinner"], [1, "snack-action", 3, "click"]], template: function AlertSnack_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, AlertSnack_mat_icon_2_Template, 2, 0, "mat-icon", 2)(3, AlertSnack_mat_icon_3_Template, 2, 0, "mat-icon", 2)(4, AlertSnack_mat_icon_4_Template, 2, 0, "mat-icon", 2)(5, AlertSnack_mat_icon_5_Template, 2, 0, "mat-icon", 2)(6, AlertSnack_div_6_Template, 1, 0, "div", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementStart(7, "div", 4)(8, "p", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 6);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, AlertSnack_a_12_Template, 2, 1, "a", 7);
            i0.ɵɵelementStart(13, "div", 8);
            i0.ɵɵelement(14, "div", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "button", 10);
            i0.ɵɵlistener("click", function AlertSnack_Template_button_click_15_listener() { return ctx.snackRef.dismiss(); });
            i0.ɵɵelementStart(16, "mat-icon");
            i0.ɵɵtext(17, "close");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassMap("snack-" + ctx.data.type);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitch", ctx.data.type);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", "success");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", "error");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", "warning");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", "info");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", "loading");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.data.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.data.message);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.data.action);
        } }, dependencies: [CommonModule, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, MatIconModule, i3.MatIcon, MatButtonModule, i4.MatIconButton], styles: ["$types[_ngcontent-%COMP%]:   (\n    success[_ngcontent-%COMP%]: (#0F6E56, #084d3b, #5DCAA5),\n    error: (#A32D2D, #6a1b1b, #F09595),\n    warning: (#854F0B, #5d3606, #EF9F27),\n    info: (#185FA5, #3f83c2, #85B7EB),\n    loading: (#3C3489, #221c5b, #AFA9EC),\n); \n@each $type, $colors in $types {\n    .snack-#{$type} {\n        background: nth($colors, 2) !important;\n        border-left: 4px solid nth($colors, 3) !important;\n\n        .snack-title {\n            color: nth($colors, 1);\n        }\n\n        .snack-action {\n            color: nth($colors, 1);\n        }\n\n        .progress-inner {\n            background: nth($colors, 3);\n            animation-duration: var(--snack-duration, 5s);\n        }\n\n        mat-icon {\n            color: nth($colors, 1);\n            font-size: 20px;\n        }\n    }\n}\n\n.mat-mdc-snack-bar-container[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    border-radius: 12px !important;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;\n    min-width: 320px !important;\n    max-width: 440px !important;\n}\n\n.snack-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 12px;\n    padding: 14px 16px;\n    border-radius: 12px;\n}\n\n.snack-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n}\n\n.snack-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.snack-msg[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-top: 2px;\n    opacity: 0.85;\n}\n\n.snack-action[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    text-decoration: underline;\n    text-underline-offset: 2px;\n    margin-top: 6px;\n    display: inline-block;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n    height: 3px;\n    border-radius: 2px;\n    background: rgba(0, 0, 0, 0.08);\n    margin-top: 8px;\n    overflow: hidden;\n}\n\n.progress-inner[_ngcontent-%COMP%] {\n    height: 100%;\n    border-radius: 2px;\n    animation: _ngcontent-%COMP%_shrink linear forwards;\n}\n\n@keyframes _ngcontent-%COMP%_shrink {\n    from {\n        width: 100%;\n    }\n\n    to {\n        width: 0%;\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertSnack, [{
        type: Component,
        args: [{ selector: 'app-alert-snack', standalone: true, imports: [CommonModule, MatIconModule, MatButtonModule], template: "<div class=\"snack-wrapper\" [class]=\"'snack-' + data.type\">\n\n    <ng-container [ngSwitch]=\"data.type\">\n        <mat-icon *ngSwitchCase=\"'success'\">check_circle</mat-icon>\n        <mat-icon *ngSwitchCase=\"'error'\">error</mat-icon>\n        <mat-icon *ngSwitchCase=\"'warning'\">warning</mat-icon>\n        <mat-icon *ngSwitchCase=\"'info'\">info</mat-icon>\n        <div *ngSwitchCase=\"'loading'\" class=\"spinner\"></div>\n    </ng-container>\n\n    <div class=\"snack-body\">\n        <p class=\"snack-title\">{{ data.title }}</p>\n        <p class=\"snack-msg\">{{ data.message }}</p>\n        <a *ngIf=\"data.action\" class=\"snack-action\" (click)=\"snackRef.dismissWithAction()\">\n            {{ data.action }}\n        </a>\n        <div class=\"progress-bar\">\n            <div class=\"progress-inner\"></div>\n        </div>\n    </div>\n\n    <button mat-icon-button (click)=\"snackRef.dismiss()\">\n        <mat-icon>close</mat-icon>\n    </button>\n\n</div>", styles: ["$types: (\n    success: (#0F6E56, #084d3b, #5DCAA5),\n    error: (#A32D2D, #6a1b1b, #F09595),\n    warning: (#854F0B, #5d3606, #EF9F27),\n    info: (#185FA5, #3f83c2, #85B7EB),\n    loading: (#3C3489, #221c5b, #AFA9EC),\n); \n@each $type, $colors in $types {\n    .snack-#{$type} {\n        background: nth($colors, 2) !important;\n        border-left: 4px solid nth($colors, 3) !important;\n\n        .snack-title {\n            color: nth($colors, 1);\n        }\n\n        .snack-action {\n            color: nth($colors, 1);\n        }\n\n        .progress-inner {\n            background: nth($colors, 3);\n            animation-duration: var(--snack-duration, 5s);\n        }\n\n        mat-icon {\n            color: nth($colors, 1);\n            font-size: 20px;\n        }\n    }\n}\n\n.mat-mdc-snack-bar-container {\n    padding: 0 !important;\n    border-radius: 12px !important;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;\n    min-width: 320px !important;\n    max-width: 440px !important;\n}\n\n.snack-wrapper {\n    display: flex;\n    align-items: flex-start;\n    gap: 12px;\n    padding: 14px 16px;\n    border-radius: 12px;\n}\n\n.snack-body {\n    flex: 1;\n    min-width: 0;\n}\n\n.snack-title {\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.snack-msg {\n    font-size: 13px;\n    margin-top: 2px;\n    opacity: 0.85;\n}\n\n.snack-action {\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    text-decoration: underline;\n    text-underline-offset: 2px;\n    margin-top: 6px;\n    display: inline-block;\n}\n\n.progress-bar {\n    height: 3px;\n    border-radius: 2px;\n    background: rgba(0, 0, 0, 0.08);\n    margin-top: 8px;\n    overflow: hidden;\n}\n\n.progress-inner {\n    height: 100%;\n    border-radius: 2px;\n    animation: shrink linear forwards;\n}\n\n@keyframes shrink {\n    from {\n        width: 100%;\n    }\n\n    to {\n        width: 0%;\n    }\n}"] }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DATA]
            }] }, { type: i1.MatSnackBarRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertSnack, { className: "AlertSnack", filePath: "app/components/alert-snack/alert-snack.ts", lineNumber: 23 }); })();

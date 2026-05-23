import { Injectable } from '@angular/core';
import { AlertSnack } from '../components/alert-snack/alert-snack';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export class Alert {
    snackBar;
    duration = 5000;
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    show(data, duration = this.duration) {
        return this.snackBar.openFromComponent(AlertSnack, {
            data,
            duration: data.type === 'loading' ? 0 : duration,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: [`snack-${data.type}`],
        });
    }
    success(title, message, action) {
        return this.show({ type: 'success', title, message, action }, 70000);
    }
    error(title, message, action) {
        return this.show({ type: 'error', title, message, action }, 7000);
    }
    warning(title, message, action) {
        return this.show({ type: 'warning', title, message, action }, 6000);
    }
    info(title, message, action) {
        return this.show({ type: 'info', title, message, action });
    }
    loading(title, message) {
        return this.show({ type: 'loading', title, message });
    }
    static ɵfac = function Alert_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Alert)(i0.ɵɵinject(i1.MatSnackBar)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Alert, factory: Alert.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Alert, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.MatSnackBar }], null); })();

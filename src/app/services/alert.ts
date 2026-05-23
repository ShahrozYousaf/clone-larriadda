import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { AlertSnack, SnackData } from '../components/alert-snack/alert-snack';


@Injectable({
  providedIn: 'root',
})
export class Alert {
  private duration = 5000;
    constructor(private snackBar: MatSnackBar) {}


  show(data: SnackData, duration = this.duration): MatSnackBarRef<AlertSnack> {
    return this.snackBar.openFromComponent(AlertSnack, {
      data,
      duration: data.type === 'loading' ? 0 : duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [`snack-${data.type}`],
    });
  }

  success(title: string, message: string, action?: string) {
    return this.show({ type: 'success', title, message, action }, 70000);
  }

  error(title: string, message: string, action?: string) {
    return this.show({ type: 'error', title, message, action }, 7000);
  }

  warning(title: string, message: string, action?: string) {
    return this.show({ type: 'warning', title, message, action }, 6000);
  }

  info(title: string, message: string, action?: string) {
    return this.show({ type: 'info', title, message, action });
  }

  loading(title: string, message: string): MatSnackBarRef<AlertSnack> {
    return this.show({ type: 'loading', title, message });
  }
}

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

export type SnackType = 'success' | 'error' | 'warning' | 'info' | 'loading';

export interface SnackData {
  type: SnackType;
  title: string;
  message: string;
  action?: string;
}

@Component({
  selector: 'app-alert-snack',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './alert-snack.html',
  styleUrl: './alert-snack.scss',
})
export class AlertSnack {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackData,
    public snackRef: MatSnackBarRef<AlertSnack>
  ) {}
}

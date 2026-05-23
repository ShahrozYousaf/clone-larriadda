import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shaahimahall');

  private router = inject(Router);

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          document.documentElement.scrollTop = 0; // ✅ most compatible
          document.body.scrollTop = 0;            // ✅ Safari fallback
        }, 50);
      });
  }




}

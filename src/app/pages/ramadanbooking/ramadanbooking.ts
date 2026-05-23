import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { APP_CONFIG } from '../../app.config';

@Component({
  selector: 'app-ramadanbooking',
  imports: [CommonModule, RouterModule],
  templateUrl: './ramadanbooking.html',
  styleUrl: './ramadanbooking.scss',
})
export class Ramadanbooking implements OnInit {

  private readonly route = inject(ActivatedRoute);       // ✅ ActivatedRoute, not Router
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);

  constructor(
    @Inject(APP_CONFIG) public config: any,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {   // ✅ this.route, not this.router
      const quotation_id = params['quotation_id'];
      if (quotation_id) {
        this.router.navigate([this.lang, 'order', quotation_id], {
          replaceUrl: true    // ✅ no back button to this page
        });
      }
    });
  }

}
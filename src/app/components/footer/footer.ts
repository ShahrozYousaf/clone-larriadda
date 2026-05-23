import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,RouterLinkActive,],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly route = inject(ActivatedRoute);
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);

  scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

}

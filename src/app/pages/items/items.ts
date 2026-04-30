import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { General } from '../../services/general';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
export interface Allergen {
  code: string;
  label: string;
}
@Component({
  selector: 'app-items',
  imports: [CommonModule, Header, Footer, RouterLink],
  templateUrl: './items.html',
  styleUrl: './items.scss',
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class Items {
  activeLoader: boolean = false;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  public readonly languageService = inject(LanguageService);
  public readonly general = inject(General);
  public lang = this.languageService.getLangFromRoute(this.route);
  public item_gcategory = '';
  public item_gcategory_title = '';
  public category_itemlist: any = undefined;

  /* Item Detail */
  public itemPopup: boolean = false;
  public itemDetail: any = undefined;
  public itemSpecification: any = undefined;

  /* Item Detail */

  constructor() {
    if (this.general && !this.general.latestmenu_loaded) {
      // this.router.navigate(['/', this.lang, 'menu'], { replaceUrl: true });
    }
  }
  allergens: Allergen[] = [
    { code: 'CR', label: 'Shellfish' },
    { code: 'E',  label: 'Egg' },
    { code: 'F',  label: 'Fish' },
    { code: 'G',  label: 'Gluten' },
    { code: 'M',  label: 'Milk' },
    { code: 'N',  label: 'Nuts' },
    { code: 'SE', label: 'Sesame' },
    { code: 'SF', label: 'Shellfish' },
    { code: 'MU', label: 'Mustard' },
    { code: 'SY', label: 'Soya' }
  ];
  ngOnInit(): void {
    this.general.setup();
    this.route.paramMap.subscribe(params => {
      this.item_gcategory = params.get('item_gcategory') ?? '';
      this.item_gcategory_title =
        this.general.categories_list.find(category => category.item_gcategory === this.item_gcategory)?.item_gcategory_title ?? '';
    });
    this.category_itemlist = this.general.items_list.filter((item:any) => item.item_gcategory === this.item_gcategory);

    console.log(" category_itemlist ");
    console.log( this.category_itemlist );
  }
  getAllergenString(): string {
    return this.allergens.map(a => `${a.code} - ${a.label}`).join(', ');
  }
  detail(item:any) {
    //this.activeLoader = true;
    this.itemPopup = true;
  }

  

}

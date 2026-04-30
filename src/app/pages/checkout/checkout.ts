import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CartItem {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
}


@Component({
  selector: 'app-checkout',
  imports: [CommonModule, RouterModule, FormsModule, Header, Footer,],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout implements OnInit {

  private readonly route = inject(ActivatedRoute);
  public readonly languageService = inject(LanguageService);
  public lang = this.languageService.getLangFromRoute(this.route);

  // Cart items - empty by default
  cartItems: CartItem[] = [];
 
  // Form fields
  customerName = '';
  mobileNumber = '';
  email = '';
  comment = '';
  promoCode = '';
  paymentMethod = 'counter';
 
  // Sample items pool for demo purposes
  private sampleItems: Omit<CartItem, 'quantity'>[] = [
    { id: 75, name: 'Fish Tikka Masala (F, M)', unitPrice: 269 },
    { id: 76, name: 'Goan Fish Curry (F, M)', unitPrice: 269 },
    { id: 79, name: 'Prawn (Jhinga) Saag Wala (CR, M)', unitPrice: 259 },
    { id: 82, name: 'Butter Chicken (CR, M)', unitPrice: 279 },
    { id: 90, name: 'Lamb Rogan Josh (CR, M)', unitPrice: 289 },
    { id: 101, name: 'Paneer Tikka Masala (V, M)', unitPrice: 249 },
    { id: 112, name: 'Dal Makhani (V, M)', unitPrice: 229 },
  ];
 
  private sampleIndex = 0;
 
  ngOnInit(): void {
    // Cart starts empty — no items loaded
  }
 
  getSubtotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0
    );
  }
 
  increaseQty(index: number): void {
    this.cartItems[index].quantity++;
  }
 
  decreaseQty(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.removeItem(index);
    }
  }
 
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }
 
  applyPromo(): void {
    if (!this.promoCode.trim()) {
      alert('Please enter a promo code.');
      return;
    }
    alert(`Promo code "${this.promoCode}" applied!`);
  }
 
  changeTime(): void {
    alert('Time change feature coming soon!');
  }
 
  placeOrder(): void {
    alert('Redirecting to menu to add items...');
  }
 
  continueShopping(): void {
    alert('Continuing shopping...');
  }
 
  // Demo helper: cycles through sample items
  addSampleItem(): void {
    const sample = this.sampleItems[this.sampleIndex % this.sampleItems.length];
    const existing = this.cartItems.find((i) => i.id === sample.id);
 
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...sample, quantity: 1 });
    }
 
    this.sampleIndex++;
  }
}
 
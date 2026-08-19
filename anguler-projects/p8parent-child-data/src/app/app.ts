import { Component, signal } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('p8parent-child-data');
  selectedProduct: Product | null = null;
  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }
}

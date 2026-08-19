import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Output() productSelected = new EventEmitter<any>();
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 700 },
    { id: 3, name: 'Tablet', price: 500 }
  ];
  selectProduct(product: Product) {
    this.productSelected.emit(product);
  }
}

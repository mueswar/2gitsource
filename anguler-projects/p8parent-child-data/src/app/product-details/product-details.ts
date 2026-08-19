import { Component, Input } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input() product: Product | null = null;
}

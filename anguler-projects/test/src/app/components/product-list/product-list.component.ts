import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: false
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() filter: string = 'all';

  products: Product[] = [];
  selectedProduct: Product | null = null;
  showModal: boolean = false;
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('ProductListComponent initialized');
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Filter changed:', changes['filter']?.currentValue);
    if (changes['filter'] && !changes['filter'].firstChange) {
      this.loadProducts();
    }
  }

  loadProducts() {
    this.isLoading = true;
    this.products = [];
    console.log('Loading products with filter:', this.filter);
    this.productService.getFilteredProducts(this.filter).subscribe({
      next: (data) => {
        console.log('Products received:', data);
        console.log('Number of products:', data.length);
        this.products = data;
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log('Products assigned to component:', this.products);
      },
      error: (error) => {
        console.error('Error loading products:', error);
        console.error('Error details:', error.message, error.status);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  openProductDetails(productId: number) {
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        if (product) {
          this.selectedProduct = product;
          this.showModal = true;
          this.cdr.detectChanges();
        }
      },
      error: (error) => {
        console.error('Error loading product details:', error);
      }
    });
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }
}

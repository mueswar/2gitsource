import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
  standalone: false
})
export class ProductFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  selectedFilter: string = 'all';

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    this.filterChanged.emit(filter);
  }
}

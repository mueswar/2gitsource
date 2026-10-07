import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/getProducts';
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();
  private products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(data => {
        this.products = data;
        this.productsSubject.next(data);
        return data;
      }),
      catchError(error => {
        console.error('Error fetching products:', error);
        return of([]);
      })
    );
  }

  getFilteredProducts(filter: string): Observable<Product[]> {
    console.log('API Call: GET', this.apiUrl);
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(data => {
        console.log('API Response received:', data);
        console.log('Total products:', data ? data.length : 0);
        let filtered: Product[] = data;
        if (filter === 'available') {
          filtered = data.filter(p => p.availability===true);
        } else if (filter === 'unavailable') {
          filtered = data.filter(p => p.availability===false);
        }
        console.log('Filtered products:', filtered);
        return filtered;
      }),
      catchError(error => {
        console.error('API Error:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        return of([]);
      })
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(data => data.find(p => p.id === id)),
      catchError(error => {
        console.error('Error fetching product:', error);
        return of(undefined);
      })
    );
  }
}

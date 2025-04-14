import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  product ={
    name : 'pone',
    price: 200,
    discount :5
  }
  active = false;
  totalPrice(){
    return this.product.price - (this.product.price*this.product.discount/100);
  }
}

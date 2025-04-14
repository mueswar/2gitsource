import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<h3>Header component header {{title}}</h3>'
})
export class HeaderComponent {
  title = 'Header title property';
}
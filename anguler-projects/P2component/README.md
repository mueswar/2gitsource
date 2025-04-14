ng new P2component --no-standalone


<app-header></app-header>

folder header in app folder

create header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<h3>Header component header </h3>'
})
export class HeaderComponent {
  title = 'Headercomponent';
}


import in app.module.ts
import { HeaderComponent } from './header/header.component';
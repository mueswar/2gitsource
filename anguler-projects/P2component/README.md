ng new P2component --no-standalone

problem: create new component and display content in app html

in app html
  <app-header></app-header>

create folder header in app folder

create header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<h3>Header component header </h3>'
})
export class HeaderComponent {
  title = 'Headercomponent';
}

in app module file
  import in app.module.ts
  import { HeaderComponent } from './header/header.component';
  add header component in declarations
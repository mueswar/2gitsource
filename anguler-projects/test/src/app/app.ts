import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  currentFilter: string = 'all';

  onFilterChanged(filter: string) {
    this.currentFilter = filter;
  }
}

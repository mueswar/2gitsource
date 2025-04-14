ng new pr1route --no-standalone
cd pr1route

ng generate component header
ng generate component footer
ng generate component home
ng generate component about
ng generate component contact

    RouterModule.forRoot([
      { path: '', component: HomeComponent },  // Default route
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ])

app.html
-----------
<div>
<header></header>

<router-outlet></router-outlet>

<app-footer></app-footer>
</div>

heade.thml
-------------
<nav>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/contact">Contact</a></li>
      <li><a routerLink="/create">Create</a></li>
    </ul>
  </nav>
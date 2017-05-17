import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <ul class="nav nav-tabs navigation">
      <li class="nav-item">
        <a class="home" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  name = 'Angular!';
}

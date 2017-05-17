import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  name = 'Angular!';
}

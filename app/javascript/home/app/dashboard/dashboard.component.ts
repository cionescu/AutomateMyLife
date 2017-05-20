import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <div class="row">
      <div class="col-6">
        <a class="btn btn-info craving-card-link" routerLink="/card">Craving Cards</a>
      </div>
      <div class="col-6">
        <notification></notification>
      </div>
    </div>
  `
})
export class DashboardComponent {
  constructor() {
  }
}

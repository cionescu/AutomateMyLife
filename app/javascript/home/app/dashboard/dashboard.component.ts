import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <div class="row">
      <div class="col-6">
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

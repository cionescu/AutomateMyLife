import { Component } from '@angular/core';

@Component({
  selector: 'notification',
  template: `
    <div (click)="notification()"></div>
  `
})
export class NotificationComponent {
  constructor() {
  }

  notification(): void {
    console.log("Notification");
  }
}

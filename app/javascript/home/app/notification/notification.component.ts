import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'notification',
  template: `
    <div (click)="notification()"></div>
  `
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {
  }

  notification(): void {
    this.notificationService.create().then(() => {
      console.log("Created");
    });
  }
}

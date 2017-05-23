import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-card',
  template: `
    <div class="card craving-card">
      <p class="text-muted text-center">
        Adauga un Craving Card. Orice iti doresti, la orice ora. Livrat special si exclusiv de {{user.partner_name}}.
      </p>
      <input [(ngModel)]="request" placeholder="Scrie aici.." class="form-control text-center card-form" type="text" />
      <button class="btn btn-success" (click)="create()">Cere si ti se va da!</button>
    </div>
  `
})
export class CreateCardComponent {
  @Input() user: any;
  public request: string;

  constructor() {
  }

  create(): void {
    console.log(this.request);
  }
}

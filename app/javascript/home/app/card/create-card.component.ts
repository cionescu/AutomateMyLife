import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-card',
  template: `
    <div class="card craving-card">
      <p class="text-muted text-center">
        Adauga un Craving Card. Orice iti doresti, la orice ora. Livrat special si exclusiv de {{user.partner_name}}.
      </p>
      <input [(ngModel)]="request.text" placeholder="Scrie aici.." class="form-control text-center card-form" type="text" />
      <button class="btn btn-success" (click)="create()" [disabled]="formDisabled()">Cere si ti se va da!</button>
    </div>
  `
})
export class CreateCardComponent {
  @Input() user: any;
  @Output() newCard = new EventEmitter();
  public request: any;

  constructor() {
    this.request = {
      "text": null
    };
  }

  create(): void {
    this.newCard.emit(this.request);
  }

  formDisabled(): boolean {
    return !this.request.text;
  }
}

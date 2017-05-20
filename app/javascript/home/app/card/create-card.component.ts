import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-card',
  template: `
    <div class="card">
      <p class="text-muted text-center">
        Adauga un Craving Card. Orice iti doresti, la orice ora. Livrat special si exclusiv de Cata.
      </p>
      <button class="btn btn-success" (click)="create()">Cere si ti se va da!</button>
    </div>
  `
})
export class CreateCardComponent {
  @Input() user: any;
  public craving: any;

  constructor() {
  }

  create(): void {
    console.log(this.craving);
  }
}

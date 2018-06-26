import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'marks',
  template: `
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Materia</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr table-row *ngFor="let row of marks" [entry]="row"></tr>
            <tr total [marks]="marks"></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AppComponent {
  public marks: any;

  constructor() {
    this.marks = (<any>window).marks
  }
}

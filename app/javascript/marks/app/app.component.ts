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
              <th>Credite</th>
              <th>Nota</th>
              <th>Dupa Mariri</th>
            </tr>
          </thead>
          <tbody>
            <tr table-row *ngFor="let row of marks" [entry]="row" (markChanged)="handleMarkChanged($event)"></tr>
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
    for (let i = 0; i < this.marks.length; i++) {
      this.marks[i][3] = 0
    }
  }

  handleMarkChanged({entry, value}) {
    const id = this.marks.findIndex((item) => item[0] === entry)
    this.marks[id][3] = parseInt(value, 10)
    console.log(this.marks)
  }
}

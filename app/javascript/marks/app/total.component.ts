import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges, IterableDiffers } from '@angular/core';

@Component({
  selector: '[total]',
  template: `
    <th>Total</th>
    <td></td>
    <td>{{total}}</td>
    <td>{{totalWithImprovements}}
  `
})
export class TotalComponent {
  @Input() marks: any;
  public total: number;
  public totalWithImprovements: number;
  public iterableDiffer: any;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.buildMarks()
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.marks);
    if (changes) {
      console.log('Changes detected!');
    }
    this.buildMarks()
  }

  buildMarks() {
    if (!this.marks) {
      return
    }
    console.log(this.marks)
    const marks = this.marks.map((item) => item[1] * item[2])
    const weightedMarks = this.marks.map( (item) => (item[3] || item[1]) * item[2] )

    this.total = marks.reduce((a, b) => a+b, 0) / this.marks.map((item) => item[2]).reduce((a,b) => a+b, 0)
    this.totalWithImprovements = weightedMarks.reduce((a, b) => a+b, 0) / this.marks.map((item) => item[2]).reduce((a,b) => a+b, 0)
  }
}

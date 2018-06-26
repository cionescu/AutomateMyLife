import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: '[total]',
  template: `
    <th>Total</th>
    <td></td>
  `
})
export class TotalComponent implements OnInit {
  @Input() marks: any;

  ngOnInit() {
    console.log(this.marks)
    debugger
  }
}

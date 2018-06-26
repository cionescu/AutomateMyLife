import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: '[table-row]',
  template: `
    <td>{{entry[0]}}</td>
    <td>{{entry[1]}}</td>
  `
})
export class RowComponent implements OnInit {
  @Input() entry: any;

  ngOnInit() {
    console.log(this.entry)
  }
}

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[table-row]',
  template: `
    <td>{{entry[0]}}</td>
    <td>{{entry[2]}}</td>
    <td>{{entry[1]}}</td>
    <td><input type="number" class="form-control" (input)="onInputChange($event.target.value)" value="{{entry[3]}}"></td>
  `
})
export class RowComponent implements OnInit {
  @Input() entry: any;
  @Output() markChanged = new EventEmitter();

  ngOnInit() {
  }

  onInputChange(value) {
    this.markChanged.emit({entry: this.entry[0], value});
  }
}

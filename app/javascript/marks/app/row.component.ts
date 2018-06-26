import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';

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

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onInputChange(value) {
    this.markChanged.emit({entry: this.entry[0], value});
  }

  update(body): Promise<any> {
    return this.http
      .put('localhost:3000/api/marks', body)
      .toPromise()
      .then( (response) => response.json() )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}

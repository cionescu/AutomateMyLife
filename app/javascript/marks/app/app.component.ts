import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'marks',
  template: `
    <h1>Trivia</h1>
  `
})
export class AppComponent {
  @Input() data: any;

  constructor() {
    console.log(this.data)
    console.log((<any>window).marks)
  }
}

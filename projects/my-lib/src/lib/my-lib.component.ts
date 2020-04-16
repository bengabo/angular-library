import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'nk-my-lib',
  template: `
    <h2>my-lib works well!</h2>
  `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

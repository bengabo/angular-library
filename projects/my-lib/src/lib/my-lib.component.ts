import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-my-lib',
  template: `
    <p>
      my-lib works well again!!!
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

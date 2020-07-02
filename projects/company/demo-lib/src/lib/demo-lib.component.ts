import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-lib',
  template: `
    <p>
      demo-lib works!
    </p>
  `,
  styles: []
})
export class DemoLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

// Common spinner component which can be used throughout the application with unique names.

export class SpinnerComponent implements OnInit {

  @Input() show : string = 'n';
  @Input() name : string;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){  //Toggle state based on show property
    this.show = this.show === 'y' ? 'n' : 'y';
  }

}

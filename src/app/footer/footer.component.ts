import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

//Common Footer component
export class FooterComponent implements OnInit {

  developerName: string = 'Snigdho B';

  constructor() { }

  ngOnInit(): void {
  }

}

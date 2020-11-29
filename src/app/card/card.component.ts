import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../model/launch';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() launchDetails: Launch;

  constructor() { }

  ngOnInit(): void {    
  }

}

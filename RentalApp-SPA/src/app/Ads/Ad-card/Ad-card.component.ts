import { Component, OnInit, Input } from '@angular/core';
import { Ad } from 'src/app/_models/Ad';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Ad-card',
  templateUrl: './Ad-card.component.html',
  styleUrls: ['./Ad-card.component.css']
})
export class AdCardComponent implements OnInit {
  @Input() ad: Ad;
  constructor() { }

  ngOnInit() {
  }

}

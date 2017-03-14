import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wishes-card',
  templateUrl: './wishes-card.component.html',
  styleUrls: ['./wishes-card.component.css']
})
export class WishesCardComponent implements OnInit {
  @Input()
  person:any;

  @Input()
  i:number;
  
  constructor() { }

  ngOnInit() {
  }

}

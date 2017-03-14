import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
    providers: [{provide: CarouselConfig, useValue: {interval: 50000, noPause: true}}]
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

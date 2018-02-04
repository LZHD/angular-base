import { Component, OnInit } from '@angular/core';
import {MapOptions} from "angular2-baidu-map";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  options: MapOptions;
  constructor() {
    this.options = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true
    };
  }

  ngOnInit() {
  }

}

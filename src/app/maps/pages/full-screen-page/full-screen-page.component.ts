import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
// La importación del token está en MAPS MODULE

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'Elemento HTML no encontrado.';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-80.6869149, -5.1760181], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });
  }

}

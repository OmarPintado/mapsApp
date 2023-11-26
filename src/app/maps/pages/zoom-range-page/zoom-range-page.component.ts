import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {LngLat, Map} from "mapbox-gl";

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-80.6869149, -5.1760181)

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'Elemento HTML no encontrado.';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners()
  }

  ngOnDestroy() :void {
    this.map?.remove();
  }

  mapListeners(): void {
    if (!this.map) throw 'Mapa no inicializado.';

    this.map.on('zoom', (ev): void => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev): void => {
      if ( this.map!.getZoom() >= 18 ) {
        this.map!.zoomTo(18);
      }
    });

    this.map.on('move', ():void => {
      this.currentLngLat = this.map!.getCenter();
    })
  }

  zoomIn(): void {
    this.map?.zoomIn()
  }

  zoomOut(): void {
    this.map?.zoomOut()
  }

  zoomChanged(value: string):void {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}

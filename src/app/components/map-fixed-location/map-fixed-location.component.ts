import { Component, AfterViewInit } from '@angular/core';
import * as consts from '../../utils/consts';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-fixed-location',
  templateUrl: './map-fixed-location.component.html',
  styleUrls: ['./map-fixed-location.component.scss']
})
export class MapFixedLocationComponent implements AfterViewInit {

  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [31.312583, 34.620854],
      zoom: 8,
      dragging: !L.Browser.mobile
      // attributionControl: false,
    });

    //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    const tiles = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 7,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'


    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    const marker = L.marker([31.312583, 34.620854], { icon: L.icon(consts.Marker_Icon) });
    marker.addTo(this.map);
  }

}

import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = L.map('map').setView([9.145, 40.489673], 6); // Set the initial map center and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for Ethiopia
    L.marker([9.145, 40.489673]).addTo(map)
      .bindPopup('Ethiopia');

    // You can add more features, layers, or customize the map as needed.
  }
}

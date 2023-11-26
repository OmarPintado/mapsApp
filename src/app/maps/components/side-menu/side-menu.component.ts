import { Component } from '@angular/core';

interface MenuItem {
  route:string;
  name:string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Fullscreen' },
    { route: '/maps/zoom-range', name: 'Zoom Range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
  ]
}

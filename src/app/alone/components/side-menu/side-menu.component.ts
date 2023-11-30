import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

interface MenuItem {
  route:string;
  name:string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Fullscreen' },
    { route: '/maps/zoom-range', name: 'Zoom Range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
    { route: '/alone', name: 'Standalone' },
  ]
}

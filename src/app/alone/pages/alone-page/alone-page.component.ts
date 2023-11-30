import { Component } from '@angular/core';
import { CounterAloneComponent } from "../counter-alone/counter-alone/counter-alone.component";
import {SideMenuComponent} from "../../components/side-menu/side-menu.component";

@Component({
  standalone: true,
  imports: [ CounterAloneComponent, SideMenuComponent ],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

}

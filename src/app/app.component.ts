import { Component } from '@angular/core';
import {cap} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hi-app';

  capacities = cap.data.capacities;
}

import { Component } from '@angular/core';
import {getData} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hi-app';
  indexSent = "";
  capacities = [];

  async ngOnInit() {
    //console.log(await getData());
    let {data} = await getData();
    this.capacities = data.data.capacities;
  }
}

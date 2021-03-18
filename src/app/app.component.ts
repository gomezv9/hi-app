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
  selectedQuantity= "Select";
  options= [
      "Select",
      "Succeded Value",
      "Alphabetical"
  ]

  changeFilter (){
      console.log(this.selectedQuantity);
      if (this.selectedQuantity === "Succeded Value"){
        this.capacities.sort(function (a, b){
            return a.succeeded.per - b.succeeded.per;
        })
      } 
      if (this.selectedQuantity === "Alphabetical"){
        this.capacities.sort(function (a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
      } 
  }

  async ngOnInit() {
    //console.log(await getData());
    let {data} = await getData();
    let dataTemp = data.data.capacities;
    //sort default overall true first
    dataTemp.sort(function(x, y) {
        return (x.overall === y.overall) ? 0 : x ? -1 : 1;
    });
    this.capacities = dataTemp.reverse();

    
  }
}

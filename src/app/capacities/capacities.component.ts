import { Component, OnInit, Input } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-capacities',
  templateUrl: './capacities.component.html',
  styleUrls: ['./capacities.component.scss']
})
export class CapacitiesComponent implements OnInit {
  @Input() indexSent: Number;
  @Input() lastCap: Number;
  @Input() capacity: Object;
  
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.indexSent, this.lastCap);
    
  }

}

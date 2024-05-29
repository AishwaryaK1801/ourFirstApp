import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})
export class TabComponent implements OnInit {
  selectedFramewok : string ="Angular"
  constructor() { }

  ngOnInit(): void {
  }
  
  onTabClick(val : string){
    this.selectedFramewok = val
  }
}

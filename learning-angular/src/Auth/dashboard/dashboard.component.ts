import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../assets/angular-authentication1-default-rtdb-export.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 constructor() { }
  // s:any=JSON.stringify(data)

  ngOnInit(): void {
    
  }

}

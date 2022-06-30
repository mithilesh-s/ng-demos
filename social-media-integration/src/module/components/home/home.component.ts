import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _utilityService:UtilityService) { }
  exclusive:boolean=false;

  ngOnInit(): void {
    this._utilityService.exclusive.subscribe(res=>{
      this.exclusive=res;
    })
    
  }


}

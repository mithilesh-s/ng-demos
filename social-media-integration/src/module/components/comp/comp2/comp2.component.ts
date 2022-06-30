import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private _utilityService: UtilityService) { }
  userName:string

  ngOnInit(): void {
    this._utilityService.name.subscribe(res=>{
      this.userName=res;
    })
  }
  
  onChange(userName){
    this._utilityService.name.next(userName.value)
  }

}

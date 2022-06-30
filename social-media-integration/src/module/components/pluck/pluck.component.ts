import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }

  users=[
    {
      name:'mithilesh',
      designation:'Software Engineer',
      job:{
        company:'Code Store',
        experience:'1 year'
      }
    },
    {
      name:'Subham',
      designation:'.net Developer',
      job:{
        company:'Code Store Solutions',
        experience:'2 year'
      }
    },
    {
      name:'Divya',
      designation:'Angular Developer',
      job:{
        company:'Code Store Solutions Noida',
        experience:'10 year'
      }
    }
  ]

  ngOnInit(): void {
    from(this.users).pipe(
      // map(data=>data.name),
      pluck('name')
      ).subscribe(res=>{
     this._utilityService.print(res,'elContainer3')
    })
    from(this.users).pipe(
      // map(data=>data.name),
      pluck('job','experience')
      ).subscribe(res=>{
     this._utilityService.print(res,'elContainer4')
    })
  }

}

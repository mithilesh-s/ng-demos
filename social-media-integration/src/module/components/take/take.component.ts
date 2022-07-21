import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private _utilityService:UtilityService) { }
  nameArr=['mithilesh', 'subham', 'tushar', 'mahaveer', 'rajesh', 'suresh', 'ramesh', 'priyanshu', 'ramesh', 'mahesh'];

  ngOnInit(): void {
    let source=interval(1000)
    let condition1=timer(6000)
    let condition2=fromEvent(document,'click')
    from(this.nameArr).pipe(take(5)).subscribe(res=>{
      this._utilityService.print(res,'elContainer1')
    })
    from(this.nameArr).pipe(takeLast(5)).subscribe(res=>{
      this._utilityService.print(res,'elContainer2')
    })
    source.pipe(takeUntil(condition2)).subscribe(res=>{

      this._utilityService.print(res,'elContainer3')
    })

  }

}

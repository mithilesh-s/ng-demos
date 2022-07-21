import { Component, OnInit } from '@angular/core';
import { count, interval, map, Subscription, tap } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }

  nameArr = ['mithilesh', 'subham', 'tushar', 'mahaveer', 'rajesh', 'suresh', 'ramesh', 'priyanshu', 'ramesh', 'mahesh'];
  colorArr=['red','yellow','pink','green','purple','blue','black']
  subscription1: Subscription;
  subscription2: Subscription;
  color:string;
  ngOnInit(): void {
    let source = interval(1000);
    this.subscription1 = source.pipe(
      tap(count => {
        if (count == 4) {
          this.subscription1.unsubscribe()
        }
        console.log('tap before=>' + count);
      }),
      map(data => this.nameArr[data]),
      tap(res => {
        console.log('tap after=>' + res)
      })).subscribe(res => {

        this._utilityService.print(res, 'elContainer1')

      })
    this.subscription2 = source.pipe(
      tap(count => {
        if (count == 7) {
          this.subscription2.unsubscribe()
        }
        this.color=this.colorArr[count]
      }),
      map(data => this.colorArr[data]),
      tap(res => {
        console.log('tap after=>' + res)
      })).subscribe(res => {

        this._utilityService.print(res, 'elContainer2')

      })
  }

}

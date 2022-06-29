import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.scss']
})
export class IntervalAndTimerComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }
  response: any
  videoSubscription: Subscription;

  ngOnInit(): void {
    // const bradcastVideo = interval(1000);
    //timer(kitne time baad start karna hai, interval)
    const bradcastVideo = timer(5000, 1000);

    this.videoSubscription = bradcastVideo.subscribe(res => {
      this.response = 'Video ' + res
      this._utilityService.print(this.response, 'elContainer1')
      this._utilityService.print(this.response, 'elContainer2')
      this._utilityService.print(this.response, 'elContainer3')

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }

  user1VideoList = [
    'Angular 1',
    'Angular 2'
  ]
  user2VideoList = []
  user3VideoList = []

  user2SubscribeMode: boolean = false;
  user3SubscribeMode: boolean = false;

  user2Subscription: Subscription
  user3Subscription: Subscription
  methodIntervalSubscription: Subscription

  methodInterval: boolean = false;
  intervalValue: string;



  ngOnInit(): void {
    this._utilityService.videoEmit.subscribe(res => {
      this.user1VideoList.push(res)
    })

    
  }

  onVideoAdd(video) {
    this._utilityService.videoEmit.next(video)
  }

  user2Subscribe() {
    if (this.user2SubscribeMode) {
      this.user2Subscription.unsubscribe();
    }
    else {
      this.user2Subscription = this._utilityService.videoEmit.subscribe(res => {
        this.user2VideoList.push(res)
      })
    }
    this.user2SubscribeMode = !this.user2SubscribeMode;
  }
  user3Subscribe() {
    if (this.user3SubscribeMode) {
      this.user3Subscription.unsubscribe();
    }
    else {
      this.user3Subscription = this._utilityService.videoEmit.subscribe(res => {
        this.user3VideoList.push(res)
      })
    }
    this.user3SubscribeMode = !this.user3SubscribeMode;
  }
  toggleMethod() {
    this.methodInterval = !this.methodInterval;
    const braodcastVideo = interval(1000)
    if(this.methodInterval){
      this.methodIntervalSubscription=braodcastVideo.subscribe(res => {
        this._utilityService.videoEmit.next('Video ' + res)
      })
    }
    else{
      this.methodIntervalSubscription.unsubscribe();
    }
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  constructor(private loadingBar: LoadingBarService) { }
  @ViewChild('myInput1') myInput1: ElementRef
  reqData1 = null;
  @ViewChild('myInput2') myInput2: ElementRef
  reqData2 = null;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const searchTerm1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500)
    )
    searchTerm1.subscribe(res => {
      console.log(res);
      this.reqData1 = res;
      this.loadingBar.start();
      setTimeout(() => {
        this.reqData1 = null;
        this.loadingBar.stop();
      }, 1000)
    })
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )
    searchTerm2.subscribe(res => {
      console.log(res);
      this.reqData2 = res;
      this.loadingBar.start();
      setTimeout(() => {
        this.reqData2 = null;
        this.loadingBar.stop();
      }, 2000)
    })
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private _utilityService: UtilityService) { }
  @ViewChild('addBtn') addBtn:ElementRef

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count=0;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      let value="video "+count++
      this._utilityService.print(value,'elContainer')
    })
  }

}

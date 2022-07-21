import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private _utilityService: UtilityService, private cdr:ChangeDetectorRef) { }
  userName:string

  ngOnInit(): void {
    this._utilityService.exclusive.next(true)
    this._utilityService.name.subscribe(res=>{
      this.userName=res;
    })
  }
  ngOnDestroy(): void {
    
  }
  ngAfterViewChecked() {
   this.cdr.detectChanges();
   this._utilityService.exclusive.next(false)
  }

}

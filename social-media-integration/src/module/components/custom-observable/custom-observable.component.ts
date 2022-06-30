import { Component, OnInit } from '@angular/core';
import { Observable, toArray } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  constructor(private _utilityService:UtilityService) { }
  techStatus1:string;
  techStatus2:string;

  ngOnInit(): void {
    const customObservable1=Observable.create(observer=>{
      setTimeout(()=>{
        observer.next("Angular")
      },1000)

      setTimeout(()=>{
        observer.next("React")
      },2000)

      setTimeout(()=>{
        observer.next("Java")
      },3000)

      setTimeout(()=>{
        observer.next("Node")
      },4000)

      setTimeout(()=>{
       observer.next("Python")
       observer.complete();
      },5000)
    })
    
    customObservable1.subscribe(res=>{
      this._utilityService.print(res,'elContainer1')
    },
    error=>{
      this.techStatus1='error';
    },
    ()=>{
      this.techStatus1='complete';
    })
    
    const customObservable2=Observable.create(observer=>{
      setTimeout(()=>{
        observer.next("Angular")
      },1000)

      setTimeout(()=>{
        observer.next("React")
      },2000)

      setTimeout(()=>{
        observer.next("Java")
      },3000)

      setTimeout(()=>{
        observer.next("Node")
        observer.error(new Error('Limit exceed'))
      },4000)

      setTimeout(()=>{
       observer.next("Python")
       observer.complete();
      },5000)
    })

    customObservable2.subscribe(res=>{
      this._utilityService.print(res,'elContainer2')
    },
    error=>{
      this.techStatus2='error';
    },
    ()=>{
      this.techStatus2='complete';
    })
  }

}

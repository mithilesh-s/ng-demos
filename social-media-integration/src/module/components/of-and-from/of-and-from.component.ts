import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.scss']
})
export class OfAndFromComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }
  message:any

  ngOnInit(): void {
    // OF Example
    const obs1=of('Mithilesh','Kumar','Shah');
    obs1.subscribe(res=>{
      this._utilityService.print(res,'elContainer1')
      
    })

    const obs2=of({firstName:'Mithilesh',middleName:'Kumar',lastName:'Shah'});
    obs2.subscribe(res=>{
    this.message=res;
      
    })
  
    //FROM Example--Array
    const obs3=from(['India', 'USA', 'UK']);
    obs3.subscribe(res=>{
      this._utilityService.print(res,'elContainer3')
    })

    const promise=new Promise(resolve=>{
      setTimeout(()=>{
        resolve('promise is resolved....')
      },3000)
    })

     //FROM Example--Promise
     const obs4=from(promise);
     obs4.subscribe(res=>{
       this._utilityService.print(res,'elContainer4')
     })
     //FROM Example--String
     const obs5=from('Welcome to codestore');
     obs5.subscribe(res=>{
       this._utilityService.print(res,'elContainer5')
     })


  }

}

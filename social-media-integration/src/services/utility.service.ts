import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }


  exclusive=new Subject<boolean>();
  // name=new Subject<string>();
  name=new BehaviorSubject<string>('mithilesh');
  videoEmit=new ReplaySubject<string>(3,5000);


  print(value, containerId) {
    let el = document.createElement('li');
    el.innerHTML = value
    document.getElementById(containerId).appendChild(el);
  }



}

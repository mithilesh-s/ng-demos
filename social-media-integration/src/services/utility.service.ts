import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private authService:SocialAuthService,private router:Router) { }


  exclusive=new Subject<boolean>();
  // name=new Subject<string>();
  name=new BehaviorSubject<string>('mithilesh');
  videoEmit=new ReplaySubject<string>(3,5000);


  print(value, containerId) {
    let el = document.createElement('li');
    el.innerHTML = value
    document.getElementById(containerId).appendChild(el);
  }
  logout(){
    this.authService.signOut();
    localStorage.clear();
    this.router.navigate(['/signup'])
  }


}

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {
  // private auth2: gapi.auth2.GoogleAuth
  // private subject=new ReplaySubject<gapi.auth2.GoogleUser>(1)

  // constructor(){
  //   gapi.load('auth2',()=>{
  //     this.auth2=gapi.auth2.init({
  //       client_id:'43789109407-5ignecjg1m4thnt7chm4p5o3mglpv78v.apps.googleusercontent.com',
  //       cookie_policy:'single_host_origin',
  //       scope:'https://www.googleapis.com/auth/gmail.readonly'
  //        })
  //   })
  // }

  // public signIn(){
  //   this.auth2.signIn().then(user=>{
  //     this.subject.next(user)
  //   }).catch(()=>{
  //     this.subject.next(null)
  //   })
  // }

  // public signOut(){
  //   this.auth2.signOut().then(()=>{
  //     this.subject.next(null)
  //   })
  // }

  // public observable():Observable<gapi.auth2.GoogleUser>{
  //   return this.subject.asObservable();
  // }
  
}

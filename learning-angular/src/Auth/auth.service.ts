import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import {config} from './config'
import { ResponseInterface } from './Response';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  //  user=new BehaviorSubject<User>(null);
     user = new BehaviorSubject<User|null>(null);
  signUp(name:string,email:string,password:string)
  {
    return this.http.post<ResponseInterface>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,
    {email:email,
    password:password,
    returnSucureToken:true
    }).pipe(tap(res=>{
      this.authenticatedUser(res.email,res.localId,res.idToken);
    }))
  }
  signIn(email:string,password:string)
  {
   
    return this.http.post<ResponseInterface>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`,
    {email:email,
    password:password,
    returnSucureToken:true
    }).pipe(tap(res=>{
      this.authenticatedUser(res.email,res.localId,res.idToken);
    }))
  }

  signOut()
  {
    this.user.next(null);
    this.router.navigate(['']);
  }

  private authenticatedUser(email:string,userId:string,token:string)
  {
     const expirationDate:Date=new Date(new Date().getTime()+ (3600*1000));
    
     const user=new User(email,userId,token,expirationDate);
     this.user.next(user);
     console.log('user =>',user)
  }
}

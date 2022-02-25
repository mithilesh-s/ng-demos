import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from './config'
import { ResponseInterface } from './Response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(name:string,email:string,password:string)
  {
    return this.http.post<ResponseInterface>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,
    {email:email,
    password:password,
    returnSucureToken:true
    })
  }
  signIn(email:string,password:string)
  {
   
    return this.http.post<ResponseInterface>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`,
    {email:email,
    password:password,
    returnSucureToken:true
    })
  }
}

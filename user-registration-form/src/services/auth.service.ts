import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serviceEmail:string = '';
  servicePassword:string = '';
  serviceDob:string = '';

  constructor(private router: Router,private toasterService:ToastrService) { }

// method for set token in the local storage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // method for get token from the local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }



// method for checking either user is logged in or not
  isLoggedIn() {
    return this.getToken() !== null;
  }

  // method for getting data from the local storage
  getDataFromLocalStorage(email: string, password: string, dob: string) {
    this.serviceEmail = email;
    this.servicePassword = password;
    this.serviceDob = dob;
  }


  // method for login
  login(userName:string, password : string): Observable<any> {
    if ((userName == this.serviceEmail && password == this.servicePassword) || (userName === this.serviceDob && password === this.servicePassword)) {
      this.setToken('mithilesh ka token');
      this.toasterService.success("Successfully Logged in")

      return of({ email: this.serviceEmail, password: this.servicePassword });
    }
    console.log(userName,password)
    return throwError(new Error('Invalid credentials, Please try again!'));
    
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _fireAuth: AngularFireAuth, private router: Router) { }

  //  login method
  login(email: string, password: string) {
    this._fireAuth.signInWithEmailAndPassword(email, password).then(res => {

      localStorage.setItem('token', 'true');
      if(res.user?.emailVerified==true)
      {
        this.router.navigate(['/dashboard'])
      }
      else{
        this.router.navigate(['/verify-email'])
      }

    }, err => {
      alert(err.message)
      this.router.navigate(['/login'])

    })
  }

  // register method
  register(email:string,password:string)
  {
    this._fireAuth.createUserWithEmailAndPassword(email,password).then(res=>{
     alert("registration successfully")
    
     this.router.navigate(['/login'])
     this.sendEmailForVefication(res.user);
    
    },err=>{
     alert(err.message);
     this.router.navigate(['/register'])
    })
  }

//  logout method

logout()
{
  this._fireAuth.signOut().then(res=>{
    localStorage.removeItem('token')
    this.router.navigate(['/login'])

  },err=>{
    alert(err.message)
  })
}

// forgot password

forgotPassword(email:string)
{
  this._fireAuth.sendPasswordResetEmail(email).then(res=>{
    this.router.navigate(['/login'])
  },err=>{
  alert(err.message)
  })
}


//email-verification-method
sendEmailForVefication(user:any)
{
  user.sendEmailVerification().then((res:any)=>{
    this.router.navigate(['/verify-email'])
    

  },(err:any)=>{
  alert(err.message)
  })
}



}

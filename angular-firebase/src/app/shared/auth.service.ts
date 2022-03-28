
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth"
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any
  constructor(private _fireAuth: AngularFireAuth, private router: Router) {


  }


  //  login method
  login(email: string, password: string) {
    this._fireAuth.signInWithEmailAndPassword(email, password).then(res => {

      localStorage.setItem('token', 'true');
      if (res.user?.emailVerified == true) {
        this.router.navigate(['/dashboard'])
      }
      else {
        this.router.navigate(['/verify-email'])
      }

    }, err => {
      alert(err.message)
      this.router.navigate(['/login'])

    })
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  // register method
  register(email: string, password: string) {
    this._fireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      alert("registration successfully")
      this.sendEmailForVefication(res.user);

    }, err => {
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }

  //  logout method

  logout() {
    this._fireAuth.signOut().then(res => {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])

    }, err => {
      alert(err.message)
    })
  }

  // forgot password

  forgotPassword(email: string) {
    this._fireAuth.sendPasswordResetEmail(email).then(res => {
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message)
    })
  }


  //email-verification-method
  sendEmailForVefication(user: any) {
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/verify-email'])


    }, (err: any) => {
      alert(err.message)
    })
  }


  // cnange password method

  changePassword(newPassword: string) {

    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
      this.changedPassword(user,newPassword);
    });

    
  }

  

  changedPassword(user:any,newPassword:any){
    this.user.updatePassword(newPassword).then((res: any) => {
      alert("successfullly updated")
      this.router.navigate(['/login'])
    }, (err: any) => {
      alert(err.message)
    })
    
  }



}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ResponseInterface } from '../Response';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private _snackBar:MatSnackBar,private router:Router) { }
  signInForm!:FormGroup;
  error:any
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;

  ngOnInit(): void {
    this.signInForm=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],
      }
    )
  }
  onSubmit()
  {
    if(this.signInForm.valid)
    {
       console.log(this.signInForm.value)
       let email=this.signInForm.value.email;
       let password=this.signInForm.value.password;
       let authObservable:Observable<ResponseInterface>;
       authObservable=this.authService.signIn(email,password)
        

     authObservable.subscribe(
       res=>{
        console.log(res)
        this.openSnackBarSuccessSignIn();
        this.router.navigate(['dashboard'])
        
        },
       err=>{
        console.log(err)
        switch (err.error.error.message) {
          case 'UNKNOWN':
            this.openSnackBarUnknown();
            break;
          case 'EMAIL_NOT_FOUND':
            this.openSnackBarEmailNotFound();
            break;
          case 'INVALID_PASSWORD':
            this.openSnackBarInvalidPassword();
            break;
          case 'USER_DISABLED':
            this.openSnackBarUserDisabled()
            break;
        
          default:
            this.openSnackBarDefault()
            break;
        }  
      })


    }
    
  }
  openSnackBarEmailNotFound() {
    this._snackBar.open('There is no user coresponding to this email. !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}
openSnackBarInvalidPassword() {
    this._snackBar.open('Invalid password !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}
openSnackBarUserDisabled() {
    this._snackBar.open('Your account has been disabled by the administrator. !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}
openSnackBarDefault() {
    this._snackBar.open('Default error message..... !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}
openSnackBarUnknown() {
    this._snackBar.open('An unknown error occured. !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}
openSnackBarSuccessSignIn() {
    this._snackBar.open('You are successfully Logged in !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}

}

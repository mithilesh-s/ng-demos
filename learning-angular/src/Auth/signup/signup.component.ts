import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ErrorService } from '../error.service';
import { ResponseInterface } from '../Response';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _authService:AuthService,private _errorService:ErrorService,private _snackBar:MatSnackBar ) { }
  signUpForm!:FormGroup;
  error!:string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;
  // errorMessages=this._errorService.errorMessages;
 


  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group(
      {
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],
      }
    )
  }
  onSubmit()
  {
    if(this.signUpForm.valid)
    {
       console.log(this.signUpForm.value)
       let name=this.signUpForm.value.name;
       let email=this.signUpForm.value.email;
       let password=this.signUpForm.value.password;
       let authObservable:Observable<ResponseInterface>;
       authObservable=this._authService.signUp(name,email,password)
        
       authObservable.subscribe(
       res=>{
        console.log(res)
        this.openSnackBarSuccessSignUp()
        },
       err=>{
        console.log(err)
        switch (err.error.error.message) {
          case 'UNKNOWN':
            this.openSnackBarUnknown()
            break;
          case 'EMAIL_EXISTS':
            this.openSnackBarEmailExists();
            break;
        
            default:
              this.openSnackBarDefault()
              break;
    
        }  

      })

    }
    
  }
  openSnackBarEmailExists() {
    this._snackBar.open('This email is already exist. !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}

openSnackBarUnknown() {
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
openSnackBarSuccessSignUp() {
  this._snackBar.open('You are successfully registered !!', 'OK', {
  horizontalPosition: this.horizontalPosition,
  verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
});
}

}

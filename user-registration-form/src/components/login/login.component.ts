import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router,private toasterService:ToastrService) { }

  loginFormGroup!:FormGroup
  loginEmail:string="";
  loginPassword:string="";
  loginDob:string="";
  



  ngOnInit(): void {
    this.loginFormGroup=this.formBuilder.group({
      userName:['',[Validators.required]],
      loginPassword:['',[Validators.required]]
    })

    const loginData=JSON.parse(localStorage.getItem('register-form-data') ||"{}")
    this.loginEmail = loginData.email
    this.loginPassword = loginData.password
    this.loginDob = loginData.dob
    this.authService.getDataFromLocalStorage(this.loginEmail, this.loginPassword,this.loginDob);
    console.log( this.loginEmail,this.loginPassword,this.loginDob )
  }

  submitLoginForm(){

    console.log(this.loginFormGroup.value);
    this.authService.login(this.loginFormGroup.value.userName,this.loginFormGroup.value.loginPassword).subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (err)=>{
        this.toasterService.error(err.message,"Hello",{positionClass: 'toast-top-center'} );
      }
    )
  }

  }



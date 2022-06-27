import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private formBuilder:FormBuilder) { }
  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  submitLoginForm(){
    if(this.loginForm.invalid){
      alert('please fill out the required fields')
    }
    if(this.loginForm.valid && (this.loginForm.value.email==localStorage.getItem('email') && this.loginForm.value.password==localStorage.getItem('password'))){
      this.router.navigate(['/dashboard'])
      localStorage.setItem('token','mytoken')
    }
  
    
  }

}

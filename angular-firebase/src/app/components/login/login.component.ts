import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _authService:AuthService) { }

  loginFormGroup!:FormGroup

  ngOnInit(): void {
    this.loginFormGroup=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  submitLoginForm()
  {
      this._authService.login(this.loginFormGroup.value.email,this.loginFormGroup.value.password);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _authService:AuthService) { }

  forgotPasswordFormGroup!:FormGroup

  ngOnInit(): void {
    this.forgotPasswordFormGroup=this.formBuilder.group({
      email:['',[Validators.required]],
    })
  }

  submitForgotPasswordForm()
  {
      this._authService.forgotPassword(this.forgotPasswordFormGroup.value.email)
  }
}

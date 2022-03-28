import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _authService:AuthService) { }
  changePasswordFormGroup!:FormGroup;
 


  ngOnInit(): void {
    this.changePasswordFormGroup=this.formBuilder.group({
      changePassword:['',[Validators.required]]
    })
  }

  submitChangePasswordForm()
  {
       
  this._authService.changePassword(this.changePasswordFormGroup.value.changePassword);
  
        
  }

}



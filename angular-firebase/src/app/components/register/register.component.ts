import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _authService:AuthService) { }

  registerFormGroup!:FormGroup

  ngOnInit(): void {
    this.registerFormGroup=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  submitRegisterForm()
  {
      this._authService.register(this.registerFormGroup.value.email,this.registerFormGroup.value.password);
  }
}

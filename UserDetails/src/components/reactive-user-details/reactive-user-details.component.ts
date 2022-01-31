import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { forbiddenUserNameValidator } from 'src/shared/customeUserValidation';


@Component({
  selector: 'app-reactive-user-details',
  templateUrl: './reactive-user-details.component.html',
  styleUrls: ['./reactive-user-details.component.css']
})
export class ReactiveUserDetailsComponent implements OnInit {


  userForm!:FormGroup
  data:any

  constructor(private fb:FormBuilder) { }

  get userName(){
    return this.userForm.get('userName')
  }

  get userEmail(){
    return this.userForm.get('userEmail')
  }
  get userPassword(){
    return this.userForm.get('userPassword')
  }
  get userPhone(){
    return this.userForm.get('userPhone')
  }

  ngOnInit(): void {

    this.userForm=this.fb.group({
      userName:['',[Validators.required,Validators.pattern("[a-zA-Z]+( {1}.[a-zA-Z]*)*"),Validators.minLength(4),forbiddenUserNameValidator(/admin/)]],
      userEmail:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$"),forbiddenUserNameValidator(/admin@gmail.com/)]],
      userPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),forbiddenUserNameValidator(/Password@123/)]],
      userPhone:['',[,Validators.required,Validators.pattern("^[2-9]{1}[0-9]{9}$"),forbiddenUserNameValidator(/2345678900/)]]
    });
   

  }

  onSubmit(){
    
    this.data=this.userForm.value;

  }

  isDisabled()
  {
    if(this.userForm.invalid){
      return true;
    }
    else
    {
      return false;
    }
  }

}

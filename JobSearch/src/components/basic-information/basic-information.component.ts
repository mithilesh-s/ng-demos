import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenUserValidator } from 'src/shared/customUserValidator';
import { passwordValidator } from 'src/shared/passwordValidator';

@Component({
  selector: 'basic-information-page',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  // basicInformation!:FormGroup;

  @Input() basicInformation!:FormGroup

  constructor() { }

  get email(){
    return this.basicInformation.get('email');
  }
  get password(){
    return this.basicInformation.get('password');
  }
  get firstName(){
    return this.basicInformation.get('firstName');
  }
  get lastName(){
    return this.basicInformation.get('lastName');
  }
  get phone(){
    return this.basicInformation.get('phone');
  }
  get address(){
    return this.basicInformation.get('address');
  }
  get city(){
    return this.basicInformation.get('city');
  }
  get province(){
    return this.basicInformation.get('province');
  }
  get country(){
    return this.basicInformation.get('country');
  }

  // textRegex=/^[a-zA-Z ]*[a-zA-Z]{1,60}$/
  // phoneRegex=/^[6-9][0-9]{9}$/;
  // emailRegex=/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}([.][A-za-z]{2,6})?$/;
  // passwordRegex='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])(?=\\S+$)[A-Za-z\d$@$!%*?&].{8,}'
  // pincodeRegex=/^[1-9][0-9]{5}$/
  // percentageRegex=/^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?((?<=\.)\d*)?%?)$/

  ngOnInit() {
    // this.basicInformation=this.formBuilder.group({

    //  email:['',[Validators.required,Validators.pattern(this.emailRegex),forbiddenUserValidator(/admin@gmail.com/)]],
    //  password:['',[Validators.required,Validators.pattern(this.passwordRegex)]],
    //  retypePassword:['',[Validators.required]],
    //  firstName:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
    //  lastName:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
    //  phone:['',[Validators.required,Validators.pattern(this.phoneRegex)]],
    //  address:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
    //  city:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
    //  province:['',[Validators.required]],
    //  country:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
    // },{ validator: passwordValidator });
  }

}

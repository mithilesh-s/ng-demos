import { passwordValidator } from 'src/shared/passwordValidator';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { forbiddenUserValidator } from 'src/shared/customUserValidator';


@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],


})
export class StepperComponent  {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!:FormGroup
  isEditable = false;

  minDate: Date;
  maxDate: Date;
  isSubmit:boolean=false;
  data1:any
  data2:any
  data3:any


 // getting userName from userForm
 get userName(){
  return this.firstFormGroup.get('userName');
}

 // getting userEmail from firstFormGroup
get userEmail(){
  return this.firstFormGroup.get('userEmail');
}

 // getting userPassword from firstFormGroup
get userPassword(){
  return this.firstFormGroup.get('userPassword');
}

 // getting userConfirmPassword from firstFormGroup
get userConfirmPassword(){
  return this.firstFormGroup.get('userConfirmPassword');
}

// getting userPhone from firstFormGroup
get userPhone(){
  return this.firstFormGroup.get('userPhone')
}
// getting gender from firstFormGroup
get gender(){
  return this.firstFormGroup.get('gender')
}



// getting userCity from firstFormGroup
get userCity(){
  return this.secondFormGroup.get('userCity')
}
// getting userDistrict from secondFormGroup
get userDistrict(){
  return this.secondFormGroup.get('userDistrict')
}
// getting userPincode from secondFormGroup
get userPincode(){
  return this.secondFormGroup.get('userPincode')
}
// getting userState from secondFormGroup
get userState(){
  return this.secondFormGroup.get('userState')
}


// getting user10thPercentage from secondFormGroup
get user10thPercentage(){
  return this.thirdFormGroup.get('user10thPercentage')
}
// getting user12thPercentage from thirdFormGroup
get user12thPercentage(){
  return this.thirdFormGroup.get('user12thPercentage')
}
// getting graduationPercentage from thirdFormGroup
get graduationPercentage(){
  return this.thirdFormGroup.get('graduationPercentage')
}



  constructor(private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();
  }

  textRegex=/^[a-zA-Z ]*[a-zA-Z]{1,60}$/
  phoneRegex=/^[6-9][0-9]{9}$/;
  emailRegex=/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}([.][A-za-z]{2,6})?$/;
  passwordRegex='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])(?=\\S+$)[A-Za-z\d$@$!%*?&].{8,}'
  pincodeRegex=/^[1-9][0-9]{5}$/
  percentageRegex=/^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?((?<=\.)\d*)?%?)$/

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      userName: ['',[Validators.required,Validators.minLength(4),Validators.pattern(this.textRegex),forbiddenUserValidator(/admin/)]],
      userEmail: ['',[Validators.required,Validators.pattern(this.emailRegex),forbiddenUserValidator(/admin@gmail.com/)]] ,
      userPassword: ['',[Validators.required, Validators.pattern(this.passwordRegex),forbiddenUserValidator(/Password@123/)]],
      userConfirmPassword: ['',Validators.required ],
      userPhone:['',[Validators.required,Validators.pattern(this.phoneRegex),forbiddenUserValidator(/2345678900/)]],
      gender:['',[Validators.required]],
      dropdown:['',[Validators.required]],
      datePicker:['',[Validators.required]],

    }, { validator: passwordValidator });

    this.secondFormGroup = this.formBuilder.group({
      userCity: ['',[Validators.required,Validators.minLength(4),Validators.pattern(this.textRegex)] ],
      userDistrict: ['',[Validators.required,Validators.minLength(4),Validators.pattern(this.textRegex)] ],
      userPincode: ['',[Validators.required,Validators.pattern(this.pincodeRegex),forbiddenUserValidator(/000000/)] ],
      userState: ['',[Validators.required,Validators.minLength(4),Validators.pattern(this.textRegex)] ],

    });

    this.thirdFormGroup = this.formBuilder.group({
      user10thPercentage: ['',[Validators.required,Validators.pattern(this.percentageRegex)] ],
      user12thPercentage: ['', [Validators.required,Validators.pattern(this.percentageRegex)]],
      graduationPercentage: ['',[Validators.required,Validators.pattern(this.percentageRegex)] ],

    });
  }

  states: string[] = [
    'UP',
    'DELHI',
    'MP',
    'HARIYANA',

  ];



  firstFormSubmit(){
    this.data1=this.firstFormGroup.value
    console.log(this.data1)
    this.isSubmit=true;
  }
  secondFormSubmit(){
    this.data2=this.secondFormGroup.value
    console.log(this.data2)
  }
  thirdFormSubmit(){
    this.data3=this.thirdFormGroup.value
    console.log(this.data3)
  }

}

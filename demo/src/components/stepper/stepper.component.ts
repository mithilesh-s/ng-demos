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

  // userName:['',[Validators.required,Validators.pattern("[a-zA-Z]+( {1}.[a-zA-Z]*)*"),Validators.minLength(4),forbiddenUserNameValidator(/admin/)]],
  //     userEmail:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$"),forbiddenUserNameValidator(/admin@gmail.com/)]],
  //     userPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),forbiddenUserNameValidator(/Password@123/)]],
  //     userPhone:['',[,Validators.required,Validators.pattern("^[2-9]{1}[0-9]{9}$"),forbiddenUserNameValidator(/2345678900/)]]

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      userName: ['',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z]+( {1}.[a-zA-Z]*)*"),forbiddenUserValidator(/admin/)]],
      userEmail: ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$"),forbiddenUserValidator(/admin@gmail.com/)]] ,
      userPassword: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8}'),forbiddenUserValidator(/Password@123/)]],
      userConfirmPassword: ['',Validators.required ],
      userPhone:['',[Validators.required,Validators.pattern("^[2-9]{1}[0-9]{9}$"),forbiddenUserValidator(/2345678900/)]],
      gender:['',[Validators.required]],

    }, { validator: passwordValidator });

    this.secondFormGroup = this.formBuilder.group({
      userCity: ['',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z]+( {1}.[a-zA-Z]*)*")] ],
      userDistrict: ['',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z]+( {1}.[a-zA-Z]*)*")] ],
      userPincode: ['',[Validators.required,Validators.maxLength(6), Validators.minLength(6),forbiddenUserValidator(/000000/)] ],
      userState: ['',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z]+( {1}.[a-zA-Z]*)*")] ],

    });

    this.thirdFormGroup = this.formBuilder.group({
      user10thPercentage: ['',[Validators.required] ],
      user12thPercentage: ['', [Validators.required]],
      graduationPercentage: ['',[Validators.required] ],

    });
  }

  states: string[] = [
    'UP',
    'DELHI',
    'MP',
    'HARIYANA',

  ];

  firstFormSubmit(){
    this.isSubmit=true;
  }

}

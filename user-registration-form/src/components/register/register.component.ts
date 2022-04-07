
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownDataService } from 'src/services/dropdown-data.service';
import { passwordValidator } from 'src/shared/PasswordValidator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { City, Country, State } from 'src/interfaces/DropdownDataInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private _dropdownDataService: DropdownDataService,
    private toasterService:ToastrService,private router:Router) { }

  // all the variables are declared  here

  registerFormGroup!: FormGroup
  editableRegisterFormGroup!: FormGroup
  countries!: Country
  states!: State
  cities!: City
  editableCountries!:Country
  editableStates!: State
  editableCities!: City
  isInvalidRegisterForm:boolean = false
  isInvalidEditableRegisterForm:boolean = false
  hiddenPassword: boolean = true;
  hiddenConfirmPassword: boolean = true;
  isEditable:boolean=false;
  isFullNameEditable:boolean=false;
  showUpdatedData:boolean=false;
  date:Date = new Date();  


  // regex for the fields
 
  // textRegex: RegExp = /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/
  textRegex: RegExp = /^([A-Za-z]+)$/
  emailRegex: RegExp = /^[A-Za-z._]{3,}@[A-Za-z]{3,5}[.]{1}[A-Za-z]{1,3}$/
  pincodeRegex: RegExp = /^[4-9][0-9]{5}$/  
  addressRegex: RegExp = /^([a-zA-Z0-9,.'-]+ )+[a-zA-Z0-9,.'-]+$|^[a-zA-Z0-9,.'-]+$/
  passwordRegex: string = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}"



  ngOnInit(): void {

    // formgroup for register form

    this.registerFormGroup = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.textRegex)]],
      lastName: ['', [Validators.required, Validators.pattern(this.textRegex)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      confirmPassword: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address1: ['', [Validators.required, Validators.pattern(this.addressRegex)]],
      address2: ['', [Validators.pattern(this.addressRegex)]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern(this.pincodeRegex)]],
    },{ validator: passwordValidator })



  //  formgroup for editable form

  this.editableRegisterFormGroup=this.formbuilder.group({
       editableFirstName:['',[Validators.required,Validators.pattern(this.textRegex)]],
       editableLastName:['',[Validators.required,Validators.pattern(this.textRegex)]],
       editableEmail:['',[Validators.required,Validators.pattern(this.emailRegex)]],
       editableDob:['',[Validators.required]],
       editableAddress1:['',[Validators.required,Validators.pattern(this.addressRegex)]],
       editableAddress2:['',[Validators.pattern(this.addressRegex)]],
       editableCountry:['',[Validators.required]],
       editableState:['',[Validators.required]],
       editableCity:['',[Validators.required]],
       editablePincode:['',[Validators.required, Validators.pattern(this.pincodeRegex)]]
  })

    // getting the country data from the dropdown data service
    this.countries = this._dropdownDataService.getCountries();
    this.editableCountries = this._dropdownDataService.getCountries();
  
   }

  // submitting the register form

  submitRegisterForm() {
    if (this.registerFormGroup.invalid) {
      this.isInvalidRegisterForm = true;
      this.toasterService.error("Please fill out the required fields.")
      // this.openModal()
    
    }
    if(this.registerFormGroup.valid){
      this.openModal()
      
      this.editableRegisterFormGroup.patchValue({
        editableFirstName:this.registerFormGroup.value.firstName,
        editableLastName:this.registerFormGroup.value.lastName,
        editableEmail:this.registerFormGroup.value.email,
        editableDob:this.registerFormGroup.value.dob,
        editableAddress1:this.registerFormGroup.value.address1,
        editableAddress2:this.registerFormGroup.value.address2,
        editableCountry:this.registerFormGroup.value.country,
        editableState:this.registerFormGroup.value.state,
        editableCity:this.registerFormGroup.value.city,
        editablePincode:this.registerFormGroup.value.pincode

      })
    }

  }

  // submitting model editable register form

  submitEditableRegisterForm(){
    if(this.editableRegisterFormGroup.invalid)
    {
      this.isInvalidEditableRegisterForm=true;
      this.toasterService.error("Please fill out the required fields.")
    } 
    if(this.editableRegisterFormGroup.valid)
    {
      this.showUpdatedData=true;
      this.isFullNameEditable=true;
      this.isEditable=false

      this.registerFormGroup.value.firstName=this.editableRegisterFormGroup.value.editableFirstName;
      this.registerFormGroup.value.lastName=this.editableRegisterFormGroup.value.editableLastName;
      this.registerFormGroup.value.email=this.editableRegisterFormGroup.value.editableEmail;
      this.registerFormGroup.value.dob=this.editableRegisterFormGroup.value.editableDob;
      this.registerFormGroup.value.address1=this.editableRegisterFormGroup.value.editableAddress1;
      this.registerFormGroup.value.address2=this.editableRegisterFormGroup.value.editableAddress2;
      this.registerFormGroup.value.country=this.editableRegisterFormGroup.value.editableCountry;
      this.registerFormGroup.value.state=this.editableRegisterFormGroup.value.editableState;
      this.registerFormGroup.value.city=this.editableRegisterFormGroup.value.editableCity;
      this.registerFormGroup.value.pincode=this.editableRegisterFormGroup.value.editablePincode;
  }

  }



  // getting the dropdown data from the dropdown data service for register form

  onCountryChange(country: any) {
 
    this.states = this._dropdownDataService.getStates().filter((x) => x.country_name == country.target.value);
    this.cities = []
    
    if(country.target.value==this.countries[country.target["selectedIndex"] - 1].name){
        this.registerFormGroup.patchValue({
          state:'',
          city:''
        })
      }
  }

  onStateChange(state: any) {
      this.cities = this._dropdownDataService.getCities().filter((x) => x.state_name == state.target.value);
  }


    // getting the dropdown data from the dropdown data service for editable register form

  onEditableCountryChange(country: any) {
   
    this.editableStates = this._dropdownDataService.getStates().filter((x) => x.country_name == country.target.value);
    this.editableCities = []
    if(country.target.value==this.editableCountries[country.target["selectedIndex"] - 1].name){
      this.editableRegisterFormGroup.patchValue({
        editableState:'',
        editableCity:''
      
      })
    }
 
  }

  onEditableStateChange(state: any) {

    this.editableCities = this._dropdownDataService.getCities().filter((x) => x.state_name == state.target.value);
   

  }


// methods for eye icon in the password to show and hide the password
  showPassword() {
    this.hiddenPassword = false;
  }
  hidePassword() {
    this.hiddenPassword = true;
  }
  showConfirmPassword() {
    this.hiddenConfirmPassword = false;
  }
  hideConfirmPassword() {
    this.hiddenConfirmPassword = true;
  }

//  methods for showing and hiding model

  display = "none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    this.registerFormGroup.reset();
    this.str=''
  }


  // method for making editable form fields except full name and password
  editForm(){
    this.isEditable=true;
  }

// method for making editable full name in the model

  editFullName(){
    this.isFullNameEditable=true;
  }




  // method for getting current date for the calender
  changeDateFormatToCurrentDate(){
      let month=(this.date.getMonth()+1).toString();
      let date=(this.date.getDate()).toString();
      if(month.length<2) month="0"+month
      if(date.length<2) date="0"+date
      return (this.date.getFullYear()+"-"+month+"-"+date);
    }



// this is for change password type bullet to asterisk

    str:any=''
    originalPassword:string=''
    replacedPassword:string=''
    star:string='*'
    strConfirm:any=''
    originalConfirmPassword:string=''
    replacedConfirmPassword:string=''
    starConfirm:string='*'

    changePasswordInAsterisk(item: any) {

      if (item.inputType == 'insertText'){
        if (this.originalPassword.length == 0)
           this.str = '';
            this.str = this.str + item.data;
            this.originalPassword = this.str
            this.replacedPassword = this.originalPassword.replace(/./gi, '*');
          
        }
  
      if (item.inputType == 'deleteContentBackward') {
        this.str = this.str.slice(0,-1);
        this.replacedPassword = this.replacedPassword.slice(0, -1);
        this.originalPassword = this.originalPassword.slice(0, -1);
     }
   this.registerFormGroup.patchValue({password: this.originalPassword});
  
    }
    changeConfirmPasswordInAsterisk(item: any) {

      if (item.inputType == 'insertText'){
        if (this.originalConfirmPassword.length == 0)
           this.strConfirm = '';
            this.strConfirm = this.strConfirm + item.data;
            this.originalConfirmPassword = this.strConfirm
            this.replacedConfirmPassword = this.originalConfirmPassword.replace(/./gi, '*');
          
        }
  
      if (item.inputType == 'deleteContentBackward') {
        this.strConfirm = this.strConfirm.slice(0,-1);
        this.replacedConfirmPassword = this.replacedConfirmPassword.slice(0, -1);
        this.originalConfirmPassword = this.originalConfirmPassword.slice(0, -1);
     }
   this.registerFormGroup.patchValue({confirmPassword: this.originalConfirmPassword});
  
    }

  // setting the email ,dob and password in the local storage on the confirm button

    onConfirmRegistrationFormButton(){

    localStorage.setItem('register-form-data',JSON.stringify(this.registerFormGroup.value))
      this.toasterService.success('Successfully Registerd.')
      this.router.navigate(['/login'])

    }
     // updating the email ,dob and password in the local storage on the confirm button after editing the date in the model
    onconfirmEditableRegistrationForm(){
      localStorage.setItem('register-form-data',JSON.stringify(this.registerFormGroup.value))
      this.toasterService.success('Successfully Updated.')
      this.router.navigate(['/login'])

    }

   


    
   

}

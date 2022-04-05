
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownDataService } from 'src/services/dropdown-data.service';
import { passwordValidator } from 'src/shared/PasswordValidator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  countries!: { id: number, name: string }[]
  states!: { id: number, country_name: string, name: string }[]
  cities!: { id: number, state_name: string,country_name:string, name: string }[]
  editableContries!: { id: number, name: string }[]
  editableStates!: { id: number, country_name: string, name: string }[]
  editableCities!: { id: number, state_name: string,country_name:string, name: string }[]
  isInvalidRegisterForm = false
  isInvalidEditableRegisterForm = false
  hiddenPassword: boolean = true;
  hiddenConfirmPassword: boolean = true;
  isEditable:boolean=false;
  isFullNameEditable:boolean=false;
  showUpdatedData:boolean=false;
  date:Date = new Date();  


  // regex for the fields
 
  textRegex: RegExp = /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/
  emailRegex: RegExp = /^[A-Za-z._]{3,}@[A-Za-z]{3,5}[.]{1}[A-Za-z]{1,3}$/
  pincodeRegex: RegExp = /^[4-9][0-9]{5}$/  
  addressRegex: RegExp = /^([a-zA-Z0-9,.'-]+ )+[a-zA-Z0-9,.'-]+$|^[a-zA-Z0-9,.'-]+$/
  passwordRegex: string = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}"


  // all the getters method for register form

  get firstName() {
    return this.registerFormGroup.get('firstName')
  }
  get lastName() {
    return this.registerFormGroup.get('lastName')
  }
  get email() {
    return this.registerFormGroup.get('email')
  }
  get password() {
    return this.registerFormGroup.get('password')
  }
  get confirmPassword() {
    return this.registerFormGroup.get('confirmPassword')
  }
  get dob() {
    return this.registerFormGroup.get('dob')
  }
  get address1() {
    return this.registerFormGroup.get('address1')
  }
  get address2() {
    return this.registerFormGroup.get('address2')
  }
  get country() {
    return this.registerFormGroup.get('country')
  }
  get state() {
    return this.registerFormGroup.get('state')
  }
  get city() {
    return this.registerFormGroup.get('city')
  }
  get pincode() {
    return this.registerFormGroup.get('pincode')
  }


  // all the getters for editable register form
  get editableFirstName(){
    return this.editableRegisterFormGroup.get('editableFirstName')
  }
  get editableLastName(){
    return this.editableRegisterFormGroup.get('editableLastName')
  }

  get editableEmail(){
    return this.editableRegisterFormGroup.get('editableEmail')
  }
  get editableDob(){
    return this.editableRegisterFormGroup.get('editableDob')
  }
  get editableAddress1(){
    return this.editableRegisterFormGroup.get('editableAddress1')
  }
  get editableAddress2(){
    return this.editableRegisterFormGroup.get('editableAddress2')
  }
  get editableCountry(){
    return this.editableRegisterFormGroup.get('editableCountry')
  }
  get editableState(){
    return this.editableRegisterFormGroup.get('editableState')
  }
  get editableCity(){
    return this.editableRegisterFormGroup.get('editableCity')
  }
  get editablePincode(){
    return this.editableRegisterFormGroup.get('editablePincode')
  }


  

 

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
  
   }

  submitRegisterForm() {
    if (this.registerFormGroup.invalid) {
      this.isInvalidRegisterForm = true;
    
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


  submitEditableRegisterForm(){
    if(this.editableRegisterFormGroup.invalid)
    {
      this.isInvalidEditableRegisterForm=true;
    } 
    if(this.editableRegisterFormGroup.valid)
    {
      console.log(this.editableRegisterFormGroup.value)
      this.showUpdatedData=true;
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
    console.log("Print")
    this.states = this._dropdownDataService.getStates().filter((x) => x.country_name == country.target.value);
    this.cities = this._dropdownDataService.getCities().filter((x) => x.country_name == country.target.value);
   

  

  }

  onStateChange(state: any) {
      this.cities = this._dropdownDataService.getCities().filter((x) => x.state_name == state.target.value);
  }


    // getting the dropdown data from the dropdown data service for editable register form

  onEditableCountryChange(country: any) {
   
    this.states = this._dropdownDataService.getStates().filter((x) => x.country_name == country.target.value);
    this.cities = this._dropdownDataService.getCities().filter((x) => x.country_name == country.target.value);
 
  }

  onEditableStateChange(state: any) {

    this.cities = this._dropdownDataService.getCities().filter((x) => x.state_name == state.target.value);
   

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
      localStorage.setItem('email',this.registerFormGroup.value.email)
      localStorage.setItem('dob',this.registerFormGroup.value.dob)
      localStorage.setItem('password',this.registerFormGroup.value.password)
      this.toasterService.success('Successfully Registerd.')
      this.router.navigate(['/login'])

    }
     // updating the email ,dob and password in the local storage on the confirm button after editing the date in the model
    onconfirmEditableRegistrationForm(){
      localStorage.setItem('email',this.registerFormGroup.value.email)
      localStorage.setItem('dob',this.registerFormGroup.value.dob)
      localStorage.setItem('password',this.registerFormGroup.value.password)
      this.toasterService.success('Successfully Updated.')
      this.router.navigate(['/login'])

    }

}

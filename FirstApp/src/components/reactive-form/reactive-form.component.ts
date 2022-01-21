import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { forbiddenNameValidator1 } from 'src/shared/email.validator';
import { forbiddenNameValidator2 } from 'src/shared/email.validator';
import { passwordValidator } from 'src/shared/password.validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  //this is the first way to declare a formgroup using FormControl and FormGroup
  // userForm=new FormGroup({
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required]),
  //   currentAddress: new FormControl('',[Validators.required]),
  //   nativeAddress: new FormControl('',[Validators.required]),
  //   address: new FormGroup({
  //     city: new FormControl('',[Validators.required]),
  //     state: new FormControl('',[Validators.required]),
  //     zip: new FormControl('',[Validators.required])
  //   })
  // })

  // this is alternative method to declare a form group using form builder
   
  userForm!:FormGroup;

  get email() {
    return this.userForm.get('email')
  }

  get password() {
    return this.userForm.get('password')
  }

  get name(){
    return this.userForm.get('name')
  }

  // get alternateEmails()
  // {
  //      return this.userForm.get('alternateEmails') as FormArray;
  // }

  // addAlternateEmail()
  // {
  //   this.alternateEmails.push(this.fb.control(''))
  // }

  ngOnInit(): void {

    

    this.userForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]*')]],
      // email: ['', [Validators.required, Validators.email, Validators.minLength(4), forbiddenNameValidator1]], //for first custom validation
      email: ['', [Validators.required, Validators.email, Validators.minLength(4), forbiddenNameValidator1, forbiddenNameValidator2(/password/)]],//for second custom validation
      // subscribe:['true'],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required]],
      currentAddress: ['', [Validators.required]],
      nativeAddress: ['', [Validators.required]],
      address: this.fb.group({
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required]]
      }),
      dateAndInput:this.fb.group({
        datePicker:['',[Validators.required]],
        fileInput:['',[Validators.required]]
      })
      // alternateEmails:this.fb.array([])
    }, { validator: passwordValidator });

    // this.userForm.get('subscribe')?.valueChanges.subscribe(checkedValue =>{
    //   const emali=this.userForm.get('email');
    //   if(checkedValue)
    //   {
    //     emali?.setValidators(Validators.required);
    //   }
    //   else{
    //     this.email?.clearValidators();
    //   }
    //   this.email?.updateValueAndValidity();
    // })
  }

  constructor(private fb: FormBuilder, private router:Router,
    private route:ActivatedRoute) {
    //ngOnInit() method ke andar ka part ham is constructor me bhi likh sakte hai
   }



  



  onSubmit() {
    console.log(this.userForm.value)
  }

  loadAPIData() {
    this.userForm.patchValue({
      email: "mithileshkshah@gmail.com",
      password: "Hello@123",
      currentAddress: "NOIDA",
      nativeAddress: "Singrauli",

    })

  }

  saveCall()
  {
    let data:any=this.userForm.value;
    this.router.navigate(['/dashboard'],{
      queryParams:{data:JSON.stringify(data)},
      
      
    })
  }

data=0; 




}

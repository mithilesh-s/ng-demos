import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _snackBar: MatSnackBar) { }
   userForm!:FormGroup;
   invalidField!:boolean;
    textRegex=/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/
    emailRegex=/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}([.][A-za-z]{2,6})?$/;
    pincodeRegex=/^[1-9][0-9]{5}$/
    addressRegex=/^[a-zA-Z0-9\s,.'-]{3,}$/


    get name(){
      return this.userForm.get('name')
    }
    get email(){
      return this.userForm.get('email')
    }
    get address(){
      return this.userForm.get('address')
    }
    get zipCode(){
      return this.userForm.get('zipCode')
    }
    get city(){
      return this.userForm.get('city')
    }
    get state(){
      return this.userForm.get('state')
    }
    get country(){
      return this.userForm.get('country')
    }

  ngOnInit() {
    this.userForm=this.formBuilder.group({
       name:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
       email:['',[Validators.required,Validators.pattern(this.emailRegex)]],
       address:['',[Validators.required,Validators.pattern(this.addressRegex)]],
       address2:[''],
       zipCode:['',[Validators.required,Validators.pattern(this.pincodeRegex)]],
       city:['',[Validators.required,Validators.pattern(this.textRegex)]],
       state:['',[Validators.required,Validators.pattern(this.textRegex)]],
       country:['',[Validators.required,Validators.pattern(this.textRegex)]],
    });
  }


  reactiveFormSubmit(){
    if(this.userForm.valid)
    {
       this.invalidField=false;
      console.log(this.userForm.value)
    }
    if(this.userForm.invalid)
    {
      this.invalidField=true;
    }
}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;
  openSnackBar() {
    if(this.userForm.valid)
    {
      this._snackBar.open('Your form is successfully submitted !!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
      });
    }
  }

  }





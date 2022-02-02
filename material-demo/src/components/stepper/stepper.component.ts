import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
  data1:any;
  data2:any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      village: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
    });
  }

  doSubmit1(){
    this.data1=this.firstFormGroup.value;
   
  }
  doSubmit2(){
    
    this.data2=this.secondFormGroup.value;
  }

}

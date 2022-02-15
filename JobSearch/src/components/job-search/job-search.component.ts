import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { passwordValidator } from 'src/shared/passwordValidator';
import { forbiddenUserValidator } from 'src/shared/customUserValidator';

@Component({
  selector: 'job-search-page',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  jobSearchFormGroup!:FormGroup



  textRegex=/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/
  phoneRegex=/^[6-9][0-9]{9}$/;
  emailRegex=/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}([.][A-za-z]{2,6})?$/;
  passwordRegex='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])(?=\\S+$)[A-Za-z\d$@$!%*?&].{8,}'
  pincodeRegex=/^[1-9][0-9]{5}$/
  percentageRegex=/^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?((?<=\.)\d*)?%?)$/
  addressRegex=/^[a-zA-Z0-9\s,.'-]{3,}$/
  schoolRegex=/[A-Za-z.]{1,30}/

  ngOnInit() {
     this.jobSearchFormGroup=this.formBuilder.group({

       basicInformation:this.formBuilder.group({

        email:['',[Validators.required,Validators.pattern(this.emailRegex),forbiddenUserValidator(/admin@gmail.com/)]],
        password:['',[Validators.required,Validators.pattern(this.passwordRegex)]],
        retypePassword:['',[Validators.required]],
        firstName:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
        lastName:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
        phone:['',[Validators.required,Validators.pattern(this.phoneRegex)]],
        address:['',[Validators.required,Validators.pattern(this.addressRegex)]],
        city:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
        province:['',[Validators.required]],
        country:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
       },{ validator: passwordValidator }),

        education:this.formBuilder.group({

          school:['',[Validators.required,Validators.pattern(this.schoolRegex)]],
          program:['',[Validators.required,Validators.pattern(this.textRegex),Validators.minLength(4)]],
          educationLevel:['',[Validators.required]],
          educationStatus:['',[Validators.required]],
          graduDate:['',[Validators.required]]
        }),

        workExperience:this.formBuilder.group({
          employer:[''],
          jobTitle:[''],
          jobDuty:[''],
          workedYear:[''],
        }),

        attachments:this.formBuilder.group({
          attachments:['']
        })


       })
     }

     get basicInformation(){
       return this.jobSearchFormGroup.get('basicInformation') as FormGroup;
     }
     get education(){
       return this.jobSearchFormGroup.get('education') as FormGroup;
     }
     get workExperience(){
       return this.jobSearchFormGroup.get('workExperience') as FormGroup;
     }
     get attachments(){
       return this.jobSearchFormGroup.get('attachments') as FormGroup;
     }

     jobSearchSubmit(){
       console.log(this.basicInformation.value)
       console.log(this.education.value)
       console.log(this.workExperience.value)
       console.log(this.attachments.value)
     }

    //  doReset(){
    //   this.jobSearchFormGroup.reset();
    //  }

  }




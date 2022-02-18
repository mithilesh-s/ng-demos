import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tdfFormSubmit(value:any){
    console.log(value)
}

  textRegex=/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/
  phoneRegex=/^[6-9][0-9]{9}$/;
  emailRegex=/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}([.][A-za-z]{2,6})?$/;
  passwordRegex='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])(?=\\S+$)[A-Za-z\d$@$!%*?&].{8,}'
  pincodeRegex=/^[1-9][0-9]{5}$/
  percentageRegex=/^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?((?<=\.)\d*)?%?)$/
  addressRegex=/^[a-zA-Z0-9\s,.'-]{3,}$/
  schoolRegex=/[A-Za-z.]{1,30}/

}

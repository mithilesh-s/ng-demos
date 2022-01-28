import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:JSON | undefined
  infos:any
  

 submitForm(data:any){
 
  this.data=data;
  

 }


 isDisabled(info:any)
 {
   if (info.trim()!==info) {
    return true;
    }
    return false
    
 }

}

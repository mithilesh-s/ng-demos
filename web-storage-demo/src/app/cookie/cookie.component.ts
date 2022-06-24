import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
  title = 'web-storage-demo';
  data: any
  data1: any
  cookieValue: any
  cookieValue1: any
  company = {
    name: "code store",
    tech: ["angular", ".net", "react", "react-native", "devops"],
    employee: 70,
    location: 'noida',
    time: new Date().getMinutes()
  }
 person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  constructor(private cookieService: CookieService, private Router:Router) {

  }
  ngOnInit() {
   
    let company1 = {
      name: "code store",
      tech: ["angular", ".net", "react", "react-native", "devops"],
      employee: 70,
      location: 'noida',
      time: new Date().getMinutes()
    }
    
   console.log(new Date().getMinutes());
   

    
    const cookieExists: boolean = this.cookieService.check('Test');

    

    // if(cookieExists){
    //   this.cookieValue = this.cookieService.get('Test');
    // }
    // this.cookieValue1=JSON.parse(this.cookieService.get('Test1') ||" ")



    // localStorage.setItem("myCompany", JSON.stringify(this.company))
    // this.data = JSON.parse(localStorage.getItem("myCompany") || " ")
    // console.log(this.data);

    // let allCookies = this.cookieService.getAll();
    // if(!allCookies){
      
    // }

  }
  
// =new Date().getMinutes()

  
    expiryTime=new Date().getMinutes();

    newO={
      "id": 104,
      "name": "name4",
      "job" : "job name4"
    }
    newO1={
      "id": 105,
      "name": "name5",
      "job" : "job name5"
    }
  
    user=[
        {
            "id": 101,
            "name": "name1",
            "job" : "job name1"

        },
        {
            "id": 101,
            "name": "name2",
            "job" : "job name2"

        },
        
        {
            "id": 103,
            "name": "name3",
            "job" : "job name3"

        },
        {
          "ExpiryTime":this.expiryTime
        }
    ]
  
    addToCart(){
      this.setCookie1(this.newO)
    }

 setCookie1(newO:any){
   this.user.push(newO)
  this.cookieService.set('Test1', JSON.stringify(this.user),0.0007);
  // window.location.reload();
 }
//  setCookie2(){
//   this.cookieService.set('Test2', JSON.stringify(this.person),0.0007);
//   // window.location.reload();
//  }



}

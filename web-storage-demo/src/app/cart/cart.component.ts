import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cookieService: CookieService,private Router:Router) { }
  cookieValue1: any
  cookieValue2: any
  cookies:any
  cookieExists1: boolean=false 
  i:number=3;
 

  
  ngOnInit(): void {
    this.cookieExists1= this.cookieService.check('Test1');
    
    // =JSON.parse(this.cookieService.get('Test1'));
    // let allCookies = this.cookieService.getAll();
   
    // this.cookieValue2=this.cookieService.get('Test1')
  
    // if(!this.cookieExists1){
    //   this.Router.navigateByUrl("/")
    // }

    // if(cookieExists2){
    //   this.cookieValue2 = this.cookieService.get('Test2');
    // }
  //  this.cookieValue1= this.allCookies.Test1;
  //  this.cookies=Object.values(this.allCookies)
  //  console.log(this.cookies[0]);


  if(this.cookieExists1){
    this.cookies=JSON.parse(this.cookieService.get('Test1'));
  }
  // console.log(this.cookies[3].expiryTime);


  


  }

  // let cookieExists2: boolean = this.cookieService.check('Test2');

  ngAfterViewChecked(): void{
 
   
    // if(this.cookies[3].expiryTime==(new Date().getMinutes()+1)){
    //   location.reload();
    // }
   
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _utilityService:UtilityService,private router:Router) { }
  exclusive:boolean=false;

  techList=[
  {tabName:'Promise',route:'promise'},
  {tabName:'Async/Await',route:'async-await'},
  {tabName:'From Event',route:'from-event'},
  {tabName:'Interval And Timer',route:'interval-and-timer'},
  {tabName:'Of And From',route:'of-and-from'},
  {tabName:'Subject',route:'subject'},
  {tabName:'Replay Subject',route:'replay-subject'},
  {tabName:'Custom Observable',route:'custom-observable'},
  {tabName:'Map',route:'map'},
  {tabName:'Pluck',route:'pluck'},
  {tabName:'Filter',route:'filter'},
  {tabName:'Tap',route:'tap'},
  ]
  fullName:string;
  photoUrl:string;
  email:string;

  ngOnInit(): void {
    this._utilityService.exclusive.subscribe(res=>{
      this.exclusive=res;
    })

    this.fullName=localStorage.getItem('firstName')+" "+localStorage.getItem('lastName')
    this.photoUrl=localStorage.getItem('photoUrl')
    this.email=localStorage.getItem('email')
    
  }

 logout(){
  this._utilityService.logout();
 }


}

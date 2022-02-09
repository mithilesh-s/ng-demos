import { InformationInterface, ProjectStatusInterface } from './../../interfaces/interfaces';
import { AboutInterface } from 'src/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { SocialMediaInterface } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-u-profile',
  templateUrl: './u-profile.component.html',
  styleUrls: ['./u-profile.component.css']
})
export class UProfileComponent implements OnInit {

  constructor() { }

  aboutPageData:AboutInterface={
      imgSrc:"assets/avatar.png",
      name:"John Doe",
      role:"Full Stack Developer",
      address:"Bay Area, San Francisco, CA"
    }

  socialMediaPageData:SocialMediaInterface=[

    {socialMediaValue:"https://bootdey.com"},
    {socialMediaValue:"bootday"},
    {socialMediaValue:"@bootday"},
    {socialMediaValue:"bootday"},
    {socialMediaValue:"bootday"},

  ]

  informationPageData:InformationInterface={
    fullName:"Kenneth Valdez",
    email:"fip@jukmun.al",
    phone:"(239) 816-9029",
    mobile:"(320) 380-4539",
    address:"Bay Area, San Francisco, CA"
  }

  projectStatusPageData:ProjectStatusInterface=[

    {
     label:"Web Design",
     progressValue:75
    },

    {
      label:"Website Markup",
      progressValue:70
    },

    {
      label:"One Page",
      progressValue:80
    },

    {
      label:"Mobile Tempate",
      progressValue:50
    },

    {
      label:"Backend API",
      progressValue:60
    }

  ]


  ngOnInit() {
  }

}

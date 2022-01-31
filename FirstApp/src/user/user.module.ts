import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './user-components/login/login.component';
import { SignupComponent } from './user-components/signup/signup.component';
import { Navbar2Component } from './user-components/navbar2/navbar2.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule, Routes } from '@angular/router';


const userRoutes:Routes=[

  {path:'signup',component:SignupComponent},
  {path:"login",component:LoginComponent}

];





@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    Navbar2Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule.forChild(userRoutes)
  ],

  exports: [
    LoginComponent,
    SignupComponent,
    Navbar2Component
  ]
})
export class UserModule { }

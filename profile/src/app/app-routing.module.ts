import { UProfileComponent } from './../components/u-profile/u-profile.component';
import { UserComponent } from './../components/user/user.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'user',component:UserComponent},
{path:'user-profile',component:UProfileComponent},
{path:"",redirectTo:"/home" ,pathMatch:"full"},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

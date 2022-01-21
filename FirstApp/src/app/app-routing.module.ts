import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from 'src/components/form/form.component';
import { HeadingComponent } from 'src/components/heading/heading.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ReactiveFormComponent } from 'src/components/reactive-form/reactive-form.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { HeroesComponent } from 'src/components/heroes/heroes.component';
import { Dashboard1Component } from 'src/components/dashboard1/dashboard1.component';
import { HeroesDetailsComponent } from 'src/components/heroes-details/heroes-details.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  // {
  //     path:'',
  //     redirectTo:'home',
  //     pathMatch:'full'
  // },
  {
    path:'form',
    component:ReactiveFormComponent
  },
  {
    path:'heading',
    component:HeadingComponent
  },
  {
     path:"navbar",
     component:NavbarComponent
  },
  {
     path:"dashboard",
     component:DashboardComponent
  },
  {
    path:"heroes",
    component:HeroesComponent
  },
  {
    path:"dashboard1",
    component:Dashboard1Component
  },
  { path: '', redirectTo: '/dashboard1', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

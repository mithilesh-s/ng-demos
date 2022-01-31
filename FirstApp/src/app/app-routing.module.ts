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
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { DepartmentListComponent } from 'src/components/department-list/department-list.component';
import { DepartmentDetailsComponent } from 'src/components/department-details/department-details.component';


const routes: Routes = [
    // { path:"home", component:HomeComponent },
    // { path:'form', component:ReactiveFormComponent },
    // { path:'heading', component:HeadingComponent },
    // { path:"navbar", component:NavbarComponent },
    // { path:"dashboard", component:DashboardComponent },
    // { path: '', redirectTo: '/show-department', pathMatch: 'full' },

    // // beblow routes are for task 2

    // { path:"heroes", component:HeroesComponent },
    // { path:"dashboard1", component:Dashboard1Component },
    // // { path: '', redirectTo: '/dashboard1', pathMatch: 'full' },//default route or landing page route
    // { path: 'detail/:id', component: HeroesDetailsComponent },
    //      //this is wild card route when url does not match to any route then this component will execute

    // {path:'show-department',component:DepartmentListComponent},
    // {path:'show-department/:id',component:DepartmentDetailsComponent},
    // { path:"**", component:PageNotFoundComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

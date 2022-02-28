import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/Auth/auth.guard';
import { DashboardComponent } from 'src/Auth/dashboard/dashboard.component';
import { SigninComponent } from 'src/Auth/signin/signin.component';
import { SignupComponent } from 'src/Auth/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

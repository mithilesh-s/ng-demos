import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { SignupComponent } from 'src/components/signup/signup.component';
import { AuthGuard } from 'src/guard/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

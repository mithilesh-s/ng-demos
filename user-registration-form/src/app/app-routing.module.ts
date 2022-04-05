import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path: 'dashboard',canActivate: [AuthGuard],component: DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

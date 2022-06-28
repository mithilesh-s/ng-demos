import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { GreetingComponent } from 'src/components/greeting/greeting.component';
import { LoginComponent } from 'src/components/login/login.component';
import { SignupComponent } from 'src/components/signup/signup.component';
import { AuthGuard } from 'src/guard/auth.guard';
import { AddressComponent } from './address/address.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'navigation',component:NavigationComponent,
   children:[
    {path:'',component:GreetingComponent},
    {path:'address',component:AddressComponent},
    {path:'table',component:TableComponent},
    {path:'dashboard1',component:Dashboard1Component},
    {path:'tree',component:TreeComponent},
    {path:'drag-and-drop',component:DragAndDropComponent},
   ]},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

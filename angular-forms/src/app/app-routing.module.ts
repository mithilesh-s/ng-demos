import { TdfFormComponent } from './../components/tdf-form/tdf-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from 'src/components/reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'template-driven-form',component:TdfFormComponent},
  {path:'reactive-form',component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

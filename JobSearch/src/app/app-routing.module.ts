import { MultiLevelDropdownComponent } from './../Filter/multi-level-dropdown/multi-level-dropdown.component';
import { ClassesComponent } from './../Filter/classes/classes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'classes',component:MultiLevelDropdownComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

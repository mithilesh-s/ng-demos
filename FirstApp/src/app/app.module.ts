import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeadingComponent} from "../components/heading/heading.component";
import {APP_BASE_HREF} from '@angular/common';
import { FormComponent } from 'src/components/form/form.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/components/header/header.component';
import { FormsModule} from '@angular/forms';
import { Task1Component } from 'src/components/task1/task1.component';
import { SignupFormComponent } from 'src/components/signup-form/signup-form.component';
import { DatabindingComponent } from 'src/components/databinding/databinding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from 'src/components/reactive-form/reactive-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { PipesComponent } from 'src/components/pipes/pipes.component';
import { EmployeeDetailsComponent } from 'src/components/employee-details/employee-details.component';
import {HttpClientModule} from '@angular/common/http'
import { HeroesComponent } from 'src/components/heroes/heroes.component';
import { Task2Component } from 'src/components/task2/task2.component';
import { HeroesDetailsComponent } from 'src/components/heroes-details/heroes-details.component';
import { MessageComponent } from 'src/components/message/message.component';
import { Dashboard1Component } from 'src/components/dashboard1/dashboard1.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/services/in-meomory-data.service';
import { HeroSearchComponent } from 'src/components/hero-search/hero-search.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from 'src/components/department-details/department-details.component';
import { DepartmentListComponent } from 'src/components/department-list/department-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    Task1Component,
    SignupFormComponent,
    DatabindingComponent,
    ReactiveFormComponent,
    DashboardComponent,
    PipesComponent,
    EmployeeDetailsComponent,
    HeroesComponent,
    Task2Component,
    HeroesDetailsComponent,
    MessageComponent,
    Dashboard1Component,
    HeroSearchComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent,
    DepartmentListComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation:false}
    )
  
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

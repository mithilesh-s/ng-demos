import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from 'src/components/card/card.component';
import { CardParentComponent } from 'src/components/card-parent/card-parent.component';
import { ViewChildDemoComponent } from 'src/components/view-child-demo/view-child-demo.component';
import { ParentComponent } from 'src/components/parent/parent.component';
import { ChildComponent } from 'src/components/child/child.component';
import { HostListenerDemoComponent } from 'src/components/host-listener-demo/host-listener-demo.component';
import { UserComponent } from 'src/Auth/user/user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from 'src/Auth/signup/signup.component';
import { SigninComponent } from 'src/Auth/signin/signin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from 'src/Auth/dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardParentComponent,
    ViewChildDemoComponent,
    ParentComponent,
    ChildComponent,
    HostListenerDemoComponent,
    UserComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

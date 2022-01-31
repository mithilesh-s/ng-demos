import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from 'src/components/user-details/user-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactiveUserDetailsComponent } from 'src/components/reactive-user-details/reactive-user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ReactiveUserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

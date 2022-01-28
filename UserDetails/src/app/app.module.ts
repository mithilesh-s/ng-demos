import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from 'src/components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
// import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    // NgModel
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

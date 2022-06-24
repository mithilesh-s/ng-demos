import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CookieComponent } from './cookie/cookie.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

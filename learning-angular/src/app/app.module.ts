import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from 'src/components/card/card.component';
import { CardParentComponent } from 'src/components/card-parent/card-parent.component';
import { ViewChildDemoComponent } from 'src/components/view-child-demo/view-child-demo.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardParentComponent,
    ViewChildDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

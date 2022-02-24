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




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardParentComponent,
    ViewChildDemoComponent,
    ParentComponent,
    ChildComponent,
    HostListenerDemoComponent
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

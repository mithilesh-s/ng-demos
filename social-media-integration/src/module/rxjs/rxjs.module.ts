import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { PromiseComponent } from '../components/promise/promise.component';
import { AsyncAwaitComponent } from '../components/async-await/async-await.component';
import { FromEventComponent } from '../components/from-event/from-event.component';
import { IntervalAndTimerComponent } from '../components/interval-and-timer/interval-and-timer.component';
import { OfAndFromComponent } from '../components/of-and-from/of-and-from.component';
import { ToArrayComponent } from '../components/to-array/to-array.component';
import { SubjectComponent } from '../components/subject/subject.component';
import { Comp1Component } from '../components/comp/comp1/comp1.component';
import { Comp2Component } from '../components/comp/comp2/comp2.component';
import { Comp3Component } from '../components/comp/comp3/comp3.component';
import { ReplaySubjectComponent } from '../components/replay-subject/replay-subject.component';
import { CustomObservableComponent } from '../components/custom-observable/custom-observable.component';
import { MapComponent } from '../components/map/map.component';
import { PluckComponent } from '../components/pluck/pluck.component';
import { FilterComponent } from '../components/filter/filter.component';
import { TapComponent } from '../components/tap/tap.component';
import { TechListComponent } from '../components/tech-list/tech-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { TakeComponent } from '../components/take/take.component';
import { RetryComponent } from '../components/retry/retry.component';
import { DebounceTimeComponent } from '../components/debounce-time/debounce-time.component';


@NgModule({
  declarations: [
    HomeComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    IntervalAndTimerComponent,
    OfAndFromComponent,
    ToArrayComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TechListComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,  ]
})
export class RxjsModule { 
  constructor(){
    console.log("this is rxjs module");
    
  }  
}

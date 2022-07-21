import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBotRoutingModule } from './angular-bot-routing.module';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from '../components/chat/chat.component';
import { ChatService } from 'src/app/services/chat.service';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    AngularBotRoutingModule,
    FormsModule
  ],
  providers: [ChatService]
})
export class AngularBotModule {
 

 }

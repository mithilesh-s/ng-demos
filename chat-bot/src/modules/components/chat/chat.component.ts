import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService, Message } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  messages: Message[] = [];
  initialMessage: string
  value: string;
  progress: boolean = false;
  isValid:boolean=true;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(public chatService: ChatService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.chatService.conversation.subscribe(res => {
      setTimeout(()=>{
        this.progress=false
      },710)
      this.messages = this.messages.concat(res);
    });

    setTimeout(() => {
      this.initialMessage = "Hello, How can I help you?"
    }, 1000);

    
  }

  sendMessage() {
    if (!!this.value) {
      this.progress = true;
      this.chatService.getBotAnswer(this.value);
      this.value = '';
      this.isValid=true;
    }
    else{
      this.isValid=false;
    }
  }
  
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  
  ngAfterViewChecked(): void {
    this.scrollToBottom();
    this.cdr.detectChanges();
  }

}

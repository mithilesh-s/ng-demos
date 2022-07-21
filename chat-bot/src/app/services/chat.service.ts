import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }
  conversation = new Subject<Message[]>();
  
  getBotAnswer(msg: string) {

    this.sendUserMessageToBackend(msg);
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    this.getBotMessageFromBackend()
    
   }

  
  sendUserMessageToBackend(value){
    this.http.post(`http://localhost:8000/sendUserMessage`, {userValue: value}).subscribe()
  }
  getBotMessageFromBackend(){
    this.http.get(`http://localhost:8000/getBotMessage`, {responseType: 'text'}).subscribe(res=>{
      const botMessage = new Message('bot', res);
      // if(!!res)
        this.conversation.next([botMessage]);
  
      
  })
   
  }
}

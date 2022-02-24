import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  constructor(private renderer:Renderer2){}

//  @Output() data=new EventEmitter<string>();    these 2 lines are for sending data from child to parent component..
//  message:string="Message from child component"
 @ContentChild('contentChild') contentChild!:ElementRef
 ngOnInit(): void {
  // this.data.emit(this.message);
 }
 
 ngAfterViewInit()
 {
   this.renderer.setStyle(this.contentChild.nativeElement,'color','red')
 }


}

import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'attachment-page',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {

@Input() attachments:FormGroup

  constructor() { }

  ngOnInit() {
  }
get attachment(){
  return this.attachments.get('attachments');
}
}

import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  {
 
  message1:string=""
  messageFromChild(message:string)
  {
      this.message1=message;
      console.log(message)
  }
 
  
}

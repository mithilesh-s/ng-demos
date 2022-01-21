import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{
  
  name="mithilesh kumar shah"
  company="codestore"
  person={
    name:"mithilesh",
    company:"codestore",
    address:"singrauli MP"
  }

  date=new Date();

}

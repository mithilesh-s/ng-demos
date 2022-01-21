import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

  userData={

    email:"mithileshkshah@gmail.com",
    address:"singrauli MP",
    mobile:"8305990103"

  }

  onSubmit(data:any)
  {
      console.log(data)
  }

}

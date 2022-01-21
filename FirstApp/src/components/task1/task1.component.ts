import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {

  List: string[] = [];
 
  addList(data: string) {
    if (data.trim() === '') {
      alert("first enter the text");

    }
    else {
      this.List.push(data);
    }

  }

  removeList(id: number) {
    this.List = this.List.filter((v, i) => i !== id)
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() {}
  response:any

  ngOnInit(): void {
   this.getData();
  }

  promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Data is received...")
    },3000)
  })

  async getData(){
      this.response=await this.promise;
      // if this is returning something then we have to use then at the time of calling..........
  }

}

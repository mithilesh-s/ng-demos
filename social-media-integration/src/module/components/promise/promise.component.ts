import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }
   dell={
    brand:'Dell',
    storage:'2 TB',
    color:'Black'
  }
   hp={
    brand:'HP',
    storage:'1 TB',
    color:'Silver'
  }
  NA={
    brand:'NA',
    storage:'00',
    color:'NA'
  }
  promiseValue:any

  ngOnInit(): void {
    let buyLeptop=new Promise((resolve, reject)=>{
      // resolve("yes leptop is purchased....")
      // reject("no leptop is not purchased....")
      // if(this.isDellAvailable){
      //   resolve("Dell is available...")
      // }
      // else if(this.isHpAvailable){
      //   resolve("HP is available...")
      // }
      // else{
      //   reject("None of the leptop is availble in the store")
      // }
      if(this.isDellAvailable()){
        return setTimeout(()=>{
          resolve(this.dell)
        },3000)
      }
      else if(this.isHpAvailable()){
        return setTimeout(()=>{
          resolve(this.hp)
        },3000)
      }
      else{
        return setTimeout(()=>{
          reject(this.NA)
        },3000)
      }
    });

    buyLeptop.then(res=>{
      console.log(res);
      this.promiseValue=res;
      
    }).catch(error=>{
      console.log(error);
      this.promiseValue=error;
    })
  }
  isDellAvailable(){
      return false;
  }
  isHpAvailable(){
      return true;
  }

}

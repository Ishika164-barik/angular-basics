import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-comp-a',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
})
export class CompA {
    // $event 

  eventHandle(event : any){
    console.log(event.target.value);
    
  }

handleEvent(eventName:string){
  console.log(eventName);
  
}
//Disable
btnDisable= false;
inputReadonly=false;
}

import { Component, signal ,effect, computed } from '@angular/core';

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

//signal()
data = 10;
count =signal(100);
// constructor(){   // a class can contain only one cunstructor()
//   effect(()=>{
//    //console.log("data is updated", this.data);
//     console.log("count is updated",this.count()); //it will give use signai inside inspect when ever value update
//     if(this.count() == 110){
//       this.count.set(0)   //it will set count value 0
//     }
    
//   })
// }
updateData(){
  this.data++;
  
}
updateCount(){
    this.count.set(this.count()+1);
}

//Computed Signall
height = signal(20);
width = signal(33);
area = computed (()=> this.height()*this.width());// copmuted //call back function 
constructor(){
  effect (()=>{
  console.log("area is : ", this.area());
   if(this.height() == 200){
      this.height.set(0)   //it will set count value 0
    }
  
})
}

CompSignalVal(){
   this.height.set(this.height()+10)
}

  }

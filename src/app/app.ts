import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompA  } from './comp-a/comp-a';

@Component({
  imports: [RouterOutlet,CompA ],
  selector: 'app-root',
  styleUrl: './app.css',
   templateUrl: './app.html',
  // template:`<h1>inline templet {{projectName}}</h1>` // you can use INLINE TEMPLET
})
export class App {
  protected readonly title = signal('my-app');

  projectName = "ANGULAR"

   getNumber(a:number,b:number):number{
    return a+b;
  }

   count =0;
    counter(action : string){
      if(action === 'add'){
      this.count++;
    }
    else{
      if(this.count>0)  // so that it will not goes on -1,-2,-3...... it will stop when it reach 0
        this.count--;
    }
    this.showUserName();
  }
  //calling one function inside another function
        showUserName(){
          alert('Ishika');
        }

}



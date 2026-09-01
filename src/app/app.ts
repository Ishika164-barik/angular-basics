import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
   templateUrl: './app.html',
  // template:`<h1>inline templet {{projectName}}</h1>` // you can use INLINE TEMPLET
})
export class App {
  protected readonly title = signal('my-app');

  projectName = "ANGULAR"
<<<<<<< HEAD
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
=======

  getNumber(a:number,b:number){
    return a+b;
  }
}
>>>>>>> c928e1ba4c2b49103ccf778ca4964da1c38e1874

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
   getNumber(a:number,b:number):number{
    return a+b;
  }
}

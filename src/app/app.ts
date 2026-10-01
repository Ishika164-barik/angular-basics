import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Emp } from './emp/emp';

@Component({
  imports: [RouterOutlet, Emp],
  selector: 'app-root',
  styleUrl: './app.css',
   templateUrl: './app.html',
 
})
export class App {
}
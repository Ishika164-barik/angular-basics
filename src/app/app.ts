import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewChiDem } from './view-chi-dem/view-chi-dem';

@Component({
  imports: [RouterOutlet,ViewChiDem ],
  selector: 'app-root',
  styleUrl: './app.css',
   templateUrl: './app.html',
  
})
export class App {


}



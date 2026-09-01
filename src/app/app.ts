import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  imports: [CommonModule],// formsModule use for two way databinding in ngmodel
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
divBGColor ='Green';
divColor ='red';

isSuccess=false;
divClassSuccess='success';
divClassFailuer='failuer';

// ngIf
isStudentPass ='pass';
}

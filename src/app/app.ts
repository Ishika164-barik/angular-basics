import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; //this one is use for *ngFor (also we can import NgFor insted of commonModule)

@Component({
  imports: [RouterOutlet,CommonModule ],
  selector: 'app-root',
  styleUrl: './app.css',
   templateUrl: './app.html',
 
})
export class App {
//  ngFor

Student =['Subhi','Ruhi','DC','Sorav','Jagruti'];  //Array of string

Employees =[                                 //Array of Object
       {
        name:"Arohi",
        age :20,
        id  :101
       },
       {
        name:"Ruchika",
        age :22,
        id  :102
       },
       {
        name:"Surbhi",
        age :23,
        id  :103
       },
];
//ngSwitch ngSwitchCase ngSwitchDefault

customerId =102;

//Insted of *ngStyle and *ng class you can use new syntax
bgColSafe =true;
message= 'you are safe';
iSEmployeeGetHike =false;
//Angular control flow
//@if  @else if @else(insted of ngIf wecan use this , These are angular new symtax)

myBtechCGPA=8.7;

//@for

// *ngIf + else
isLoggedIn = false;
}

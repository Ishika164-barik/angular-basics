import { getLocaleEraNames } from '@angular/common';
import { LocationUpgradeModule } from '@angular/common/upgrade';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,FormsModule],// formsModule use for two way databinding in ngmodel
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //String interpolation {{}}  one way data binding (component(TS) ---> view(HTML))
  protected readonly title = signal('my-app');

  projectName = "ANGULAR"

  getCustumerName(){
    return "Ishika";
  }
//property data binding []  one way data binding (component ---> view)

custumerRole ="Admin";

message = "hi how are you, it is 9.30 pm rightnow in USA . where are you from"
//Event data Binding () one way data binding (component <--- view)

btnClick (){
  console.log("Butten click ! ....");
}

placeHolderMessage ="Please enter your valid Name";
captureData(){
  console.log("you enter somr cherector");
  
}

//ngmodel (use for 2 way data binding)

customerLocation="India"
 customerLocationChange (customerName: any){
this.customerLocation= customerName;
  
}
// customerLocationChange ($event : any){
//   console.log($event);
  
// }
}

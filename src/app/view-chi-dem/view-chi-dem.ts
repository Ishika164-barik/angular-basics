import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-chi-dem',
  styleUrl: './view-chi-dem.css',
  templateUrl: './view-chi-dem.html',
})
export class ViewChiDem {
@ViewChild('empName') eName !: ElementRef<HTMLInputElement>;
sideView=""
shoeEmp(){
//  console.log(this.eName.nativeElement.value);
this.sideView = this.eName.nativeElement.value;
}
}

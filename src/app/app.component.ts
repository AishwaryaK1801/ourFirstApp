import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isBoxVisible = true;
  // showHide(){
  //   this.isBoxVisible =!this.isBoxVisible;
  // }

  title = 'ourFirstApp';
  skills : Array<string> = ["Js", "Ts", "Angular", "Node"];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo_pro';

rcvMsg:any;

constructor(){

}
  sendMsg(val:any){
this.rcvMsg=val
  }
}

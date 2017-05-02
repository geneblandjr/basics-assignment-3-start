import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-button-log',
  templateUrl: './app-button-log.component.html',
  styleUrls: ['./app-button-log.component.css']
})
export class AppButtonLogComponent implements OnInit {

  @Input() logmsg;
  @Input() buttonclickedCnt;
    today = new Date();
    overLimit = false;
    h = this.today.getHours();
    m = 0;
    s = 0;
    sPad = '';
    mPad = '';
    color = '';
    constructor() { }

  ngOnInit() {
  }

   getBackgroundColor() {
        this.color = this.buttonclickedCnt < 5 ? '' : 'blue';
        this.overLimit = this.buttonclickedCnt < 5 ? true : false;
        return this.color;
    }
}

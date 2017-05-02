import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    displayDetails = false;
    buttonclickedCnt = 0;
    buttonLogMsgs = [];
    buttonLogMsg = '';
    today = new Date();
    overLimit = false;
    h = this.today.getHours();
    m = 0;
    s = 0;
    sPad = '';
    mPad = '';
    color = '';

    onDisplayDetails() {
        this.displayDetails = this.displayDetails === false ? true : false;
        this.buttonclickedCnt = this.buttonclickedCnt + 1;
        this.today = new Date();
        this.h = this.today.getHours();
        this.m = this.today.getMinutes();
        this.mPad = this.m < 10 ? '0' :  '';
        this.s = this.today.getSeconds();
        this.sPad = this.s < 10 ? '0' :  '';

        this.buttonLogMsg = 'The button was clicked at: ' + this.h + ':' + this.mPad + this.m + ':' + this.sPad + this.s;
        this.buttonLogMsgs.push(this.buttonLogMsg);
    }

    getBackgroundColor() {
        this.color = this.buttonclickedCnt < 5 ? '' : 'blue';
        this.overLimit = this.buttonclickedCnt < 5 ? true : false;
        return this.color;
    }


}

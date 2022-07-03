import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {

  config: MatSnackBarConfig;

  constructor(private _snackBar: MatSnackBar){
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ["snackbar-container"];
    this.config.verticalPosition = "top";
    this.config.horizontalPosition = "center";
    this.config.duration = 3000;//in ms
  }

  validate(evt: Event) {
    evt.preventDefault();
    var email: string = (<HTMLInputElement>document.getElementById('email')).value;
    var message: string = (<HTMLInputElement>document.getElementById('message')).value;
    const regx: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regx.test(email)) {
      this._snackBar.open("Invalid email adress", '', this.config);
      return;
    }
    if (message.length <= 10) {
      this._snackBar.open("Empty message or too short", '', this.config);
      return;
    }
    this._snackBar.open("Message sent, thank you :)", '', this.config);
  }

  onTest() {
    alert('hey')
  }

}

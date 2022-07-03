import { EmailSenderService } from './../../services/email-sender.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SenderEmailConfig } from 'src/app/models/email.modle';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {

  public config: MatSnackBarConfig;
  public senderConfig!: SenderEmailConfig;

  constructor(private _snackBar: MatSnackBar, private _emailSenderService: EmailSenderService) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ["snackbar-container"];
    this.config.verticalPosition = "bottom";
    this.config.horizontalPosition = "center";
    this.config.duration = 3000;//in ms
  }

  onClick(evt: Event) {
    this.validate(evt);
    this._emailSenderService.sendMail(this.senderConfig).subscribe((data) => console.log(data));
  }

  validate(evt: Event) {
    evt.preventDefault();
    var name: string = (<HTMLInputElement>document.getElementById('name')).value;
    var email: string = (<HTMLInputElement>document.getElementById('email')).value;
    var subject: string = (<HTMLInputElement>document.getElementById('subject')).value;
    var message: string = (<HTMLInputElement>document.getElementById('message')).value;
    const regx: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regx.test(email)) {
      this._snackBar.open("Invalid email adress", '', this.config);
      return;
    }
    if (message.length === 0) {
      this._snackBar.open("Empty message", '', this.config);
      return;
    }

    this.senderConfig = { senderName: name, senderEmail: email, subject: subject, message: message }

    this._snackBar.open("Message sent, thank you :)", '', this.config);
  }

  onTest() {
    alert('hey')
  }

}

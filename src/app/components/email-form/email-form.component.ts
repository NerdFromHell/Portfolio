import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {

  validate(evt: Event){
    evt.preventDefault();
    var email: string = (<HTMLInputElement>document.getElementById('email')).value;
    var message: string = (<HTMLInputElement>document.getElementById('message')).value;
    var regx:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!regx.test(email)){
      alert("invalid email adress");
      return;
    }
    if(message.length === 0){
      alert("empty message :<");
      return;
    }
    alert('nice')
  }

  onTest(){
    alert('hey')
  }

}

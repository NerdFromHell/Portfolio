import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {

  public buttonText = '';

	@Input()
	set text(name: string) {
		this.buttonText = name;
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() isDisabled = false; //not implemented css style for it - unecessary for now
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();

  onClick(evt: Event) {
		this.btnClick.emit(evt);
	}

}

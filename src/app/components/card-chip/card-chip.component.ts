import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chip',
  templateUrl: './card-chip.component.html',
  styleUrls: ['./card-chip.component.scss']
})
export class CardChipComponent implements OnInit {


  @Input() imageUrl: string = '';
  @Input() skillName: string = '';

  @Input()
  set image(url: string) {
		this.imageUrl = url;
	}
  @Input()
	set skill(name: string) {
		this.skillName = name;
	}

  constructor() { }

  ngOnInit(): void {
  }

}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import * as consts from '../../utils/consts';

@Component({
  selector: 'app-arrow-down',
  templateUrl: './arrow-down.component.html',
  styleUrls: ['./arrow-down.component.scss']
})
export class ArrowDownComponent {

  public url!: number;

  constructor(private router: Router, _pageServive: PageService) {
    _pageServive.testUrl.subscribe((pageId) => {
      this.url = pageId;
    })
  }

  goOnePageDown() {
    console.log(`I am trying.. current url is: ${this.url}`);
    this.router.navigate([`/${consts.Pages_Names[this.url + 1]}`]);

  }
}

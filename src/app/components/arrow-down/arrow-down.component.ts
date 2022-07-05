
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { PageService } from 'src/app/services/page.service';
import * as consts from '../../utils/consts';

@Component({
  selector: 'app-arrow-down',
  templateUrl: './arrow-down.component.html',
  styleUrls: ['./arrow-down.component.scss']
})
export class ArrowDownComponent {

  public url!: number;

  constructor(private router: Router, _pageServive: PageService, private _navigationService: NavigationService) {
    _pageServive.testUrl.subscribe((pageId) => {
      this.url = pageId;
    })
  }

  goOnePageDown(isOnSmallScreen: boolean) {
    console.log(`I am trying.. current url is: ${this.url}`);
    this.router.navigate([`/${consts.Pages_Names[this.url + 1]}`]);
    if(isOnSmallScreen === true){
      this._navigationService.toggleToolbarVisibility(false)
    }
    else {
      this._navigationService.toggleToolbarVisibility(true)
    }
  }
}

import { PageService } from './../../services/page.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as consts from '../../utils/consts';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-arrow-up',
  templateUrl: './arrow-up.component.html',
  styleUrls: ['./arrow-up.component.scss']
})
export class ArrowUpComponent {

  public url: number = 0;

  constructor(private router: Router, _pageServive: PageService, private _navigationService: NavigationService) {
    _pageServive.testUrl.subscribe((pageId) => {
      this.url = pageId;
    })
  }

  goOnePageUp(isOnSmallScreen: boolean) {
    window.scroll(0, 0);
    this.router.navigate([`/${consts.Pages_Names[this.url - 1]}`]);
    if (isOnSmallScreen === true) {
      this._navigationService.toggleToolbarVisibility(false)
    }
    else {
      this._navigationService.toggleToolbarVisibility(true)
    }
  }


}

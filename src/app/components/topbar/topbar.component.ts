import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  hideToolBar!: boolean;
  sidebarToggle: boolean = false;

  constructor(private _navigationService: NavigationService) {
    _navigationService.toolbarVisibilityChange.subscribe((value) => {
      this.hideToolBar = value;
      this.sidebarToggle = false;
    });
  }

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
    this._navigationService.toggleSidebarVisibility(this.sidebarToggle);
  }
}

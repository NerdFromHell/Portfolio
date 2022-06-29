import { NavigationService } from './../../services/navigation.service';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  status!: boolean;

  constructor(private _navigationService: NavigationService) {
    _navigationService.toolbarVisibilityChange.subscribe((value) => {
      if (!value) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.status = !value;
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.close();
        this.status = !value;
      }
    });
    _navigationService.sidebarVisibilityChange.subscribe((value) => {
      if (!value) {
        this.sidenav.close();
      } else {
        this.sidenav.open();
      }
    });
  }

  toggleSidebar(){
    this.sidenav.toggle();
  }
}

import { NavigationService } from './../../services/navigation.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatToolbar } from '@angular/material/toolbar';
import { interval } from 'rxjs';

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


}

import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import * as consts from '../../utils/consts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _pageService: PageService) {
  }

  ngOnInit() {
    this._pageService.setPageId(consts.Pages.Profile)
  }
}

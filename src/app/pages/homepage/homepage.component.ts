import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import * as consts from '../../utils/consts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private _pageService: PageService) {
  }

  ngOnInit() {
    this._pageService.setPageId(consts.Pages.Home)
  }


}

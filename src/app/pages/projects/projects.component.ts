import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import * as consts from '../../utils/consts';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private _pageService: PageService) {
  }

  ngOnInit() {
    this._pageService.setPageId(consts.Pages.Projects)
  }

}

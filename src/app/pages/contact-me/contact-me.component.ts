import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import * as consts from '../../utils/consts';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(private _pageService: PageService) {
  }

  ngOnInit() {
    this._pageService.setPageId(consts.Pages.ContactMe)
  }

}

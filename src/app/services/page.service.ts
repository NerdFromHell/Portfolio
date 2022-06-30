import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class PageService {

  testUrl: Subject<number> = new Subject<number>();



  constructor() {
  }

  setPageId(pageId: number) {
    this.testUrl.next(pageId);
  }
}

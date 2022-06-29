import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, Subject } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

@UntilDestroy()
@Injectable()
export class NavigationService {

    toolBarVisible!: boolean;

    toolbarVisibilityChange: Subject<boolean> = new Subject<boolean>();
    sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();


    constructor(private observer: BreakpointObserver) {
        this.getOpen();
    }

    getOpen() {
        this.observer
            .observe(['(max-aspect-ratio: 1/1)'])
            .pipe(delay(1), untilDestroyed(this))
            .subscribe((res) => {
                if (res.matches) {
                    this.toggleToolbarVisibility(false);
                } else {
                    this.toggleToolbarVisibility(true);
                }
            });
    }

    toggleToolbarVisibility(isTrue: boolean) {
        this.toolbarVisibilityChange.next(isTrue);
    }

    toggleSidebarVisibility(toggleSidebar: boolean) {
        this.sidebarVisibilityChange.next(toggleSidebar);
    }

}
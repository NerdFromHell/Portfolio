import { Component } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-arrow-down',
  templateUrl: './arrow-down.component.html',
  styleUrls: ['./arrow-down.component.scss']
})
export class ArrowDownComponent {

  public url: string = "";
  event$

  constructor(private router: Router) {
    this.event$ = this.router.events.subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          this.url = event.url;
        }
      }
    );
  }

  goOnePageDown() {
    console.log(`I am trying.. current url is: ${this.url}`)
    if(this.url === '/home')
      this.router.navigate(['/profile']);
    else if(this.url === '/profile')
      this.router.navigate(['/skills']);
    else if(this.url === '/skills')
      this.router.navigate(['/projects']);
    else if(this.url === '/projects')
      this.router.navigate(['/contact-me']);
    else
      console.log('failed')
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}

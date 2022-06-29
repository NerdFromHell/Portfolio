import { Component } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
@Component({
  selector: 'app-arrow-up',
  templateUrl: './arrow-up.component.html',
  styleUrls: ['./arrow-up.component.scss']
})
export class ArrowUpComponent {

  public url: string = "asdf";
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

  goOnePageUp() {
    console.log(`I am trying.. current url is: ${this.url}`)
    if(this.url === '/profile')
      this.router.navigate(['/home']);
    else if(this.url === '/skills')
      this.router.navigate(['/profile']);
    else if(this.url === '/projects')
      this.router.navigate(['/skills']);
    else if(this.url === '/contact-me')
      this.router.navigate(['/projects']);
    else
      console.log('failed')
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}

import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('home => profile, home => skills, home => projects, home => contactme, home => profile, profile => skills, profile => projects, profile => contactme, skills => projects, skills => contactme, projects => contactme',
      [
        query(':enter, :leave', [

          style({
            position: 'absolute',
            height: '100%',
            opacity: 1,
            transform: 'translate3d(0,100%,0)'
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'translate3d(0,0,0)' })),
        ])
      ]),

    transition('profile => home, skills => profile, skills => home, projects => skills, projects => profile, projects => home, contactme => home, contactme => projects, contactme => skills, contactme => profile, contactme => home',
      [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            height: '100%',
            opacity: 1,
            transform: 'translate3d(0,-100%,0)'
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'translate3d(0,0,0)' })),
        ])
      ]),
  ]);
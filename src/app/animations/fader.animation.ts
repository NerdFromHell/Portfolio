import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('home => profile, home => skills, home => projects, home => contactme, home => profile, profile => skills, profile => projects, profile => contactme, skills => projects, skills => contactme, projects => contactme',
      [
        query(':enter, :leave', [
          style({
            'z-index': '1',
            // flex: '0 0 100%',//added also in enter
            position: 'absolute',
            width: '100%',
            opacity: 0,
            transform: 'translate3d(0,100%,0)'
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('1000ms ease', style({ opacity: 1, transform: 'translate3d(0,0,0)' })),
        ])
      ]),

    transition('profile => home, skills => profile, skills => home, projects => skills, projects => profile, projects => home, contactme => home, contactme => projects, contactme => skills, contactme => profile, contactme => home',
      [
        query(':enter, :leave', [
          style({
            'z-index': '1',
            position: 'absolute',
            // flex: '0 0 100%',//added also in enter
            width: '100%',
            flex: '1',
            opacity: 0,
            transform: 'translate3d(0,-100%,0)'
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('900ms ease', style({ opacity: 1, transform: 'translate3d(0,0,0)' })),
        ])
      ]),
  ]);

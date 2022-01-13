import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesla-log',
  templateUrl: './tesla-log.component.html',
  styleUrls: ['./tesla-log.component.scss'],
  animations:[
    trigger('animateLogo', [
      transition(':enter', [
        query('path', [
          style({ opacity: 0}),
          stagger('-100ms', [
            animate('800ms 1000ms', style({opacity: 1}))
          ])
         ], {optional: true})
       ])
    ])
  ]
})
export class TeslaLogComponent {
  @HostBinding('@animateLogo')
  private runAnimation = true;
}

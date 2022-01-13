import { take } from 'rxjs/operators';
import { CarsService } from './cars.service';
import { trigger, transition, query, style, stagger, animate, animateChild, keyframes } from '@angular/animations';
import { BehaviorSubject, interval, timer } from 'rxjs';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateCars', [
      transition(':enter', [
        query(
          'app-car',
          [style({ opacity: 0, transform: 'translateY(50%)'})],
          { optional: true }
        ),
        query(
          'app-car', [
          stagger('150ms', [
              animate(
                '500ms ease-in-out',
                style({ opacity: 1, transform: 'translateY(0%)'})
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
      
    ]),

     trigger('animateGallery', [
       transition(':enter', [
         style({ transform: 'translateY(100%)', opacity: 0 }),
           animate('800ms ease-out', style({transform: 'translateY(0%)', opacity: 1}),),
          query('@dot', animateChild(), { optional: true }),
        ]),
     ]),
    
    trigger('animateButton', [
      transition(':enter', [
        style({ opacity: 0, top: '-100%' }),
        animate('500ms ease-in-out', style({opacity: 1, top: '*'}))
      ]),

      transition(':leave', [
        animate('200ms ease-in-out', style({opacity: 0, transform: 'scale(0)'}))
      ])
      
    ]),

    trigger('ghizlane', [
        transition(':enter', [
          query('p', [
            style({ opacity: 0, transform: 'scale(2)' }),
            stagger('200ms', [
              animate('1000ms 1000ms', style({opacity: 1, transform: 'scale(1)'}))
            ])
          ], {optional: true})
        ])
      ])
          
  ],
})
export class AppComponent {
  constructor(public carService: CarsService) {}
  public showColors = new BehaviorSubject(false);
  public showButton!: string;
  public currentColor!: string;
  public colors = ['BLACK', 'BLUE', 'GRAY', 'PINK', 'RED', 'YELLOW'];
  

  public showCarColors(): void {
    this.showColors.next(!this.showColors.value);
  }
    
  public showOrHideButton(color: string): void {
    this.showButton = color;
  }

  public highLight(color: string): void {
    this.currentColor = color;
  }
}

  
 
  


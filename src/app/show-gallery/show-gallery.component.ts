import { Observable, Subscription } from 'rxjs';
import { CarsService, State } from './../cars.service';
import { trigger, transition, animate, style, state, query, stagger } from '@angular/animations';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-show-gallery',
  templateUrl: './show-gallery.component.html',
  styleUrls: ['./show-gallery.component.scss'],
  animations: [
    trigger('animate', [
      state('true', style({ opacity: 1 }), { params: {} }),
      state('false', style({ opacity: 0 }), { params: {} }),

      transition('true => false', [
        style({ left: '*' }),
        animate('500ms', style({ left: '{{leave}}' }))],
        { params: { leave: '' } }
      ),

      transition(
        'false => true', [
         style({ left: '{{enter}}' }), animate('500ms')],
        { params: { enter: '' } }
      ),
    ]),

    trigger('onEnter', [
      transition(':enter', [
        style({ transform: 'scale(1.2)', opacity: 0 }),
        animate('400ms', style({transform: 'scale(1)', opacity: 1}))
        ])
    ]),

    trigger('dot', [
      transition(':enter', [
        query('div', [
          style({ opacity: 0, transform: 'scale(1.5)', background: 'white' }),
          stagger('60ms', [
            animate('500ms 100ms', style({opacity: 1, transform: 'scale(1)', background: '*'}))
          ])
        ], {optional: true})
      ])
    ])
  ],
})
export class ShowGalleryComponent implements OnInit, OnDestroy {
  constructor(public carService: CarsService) { }
  
  @Input() cars!: Array<State>;
  private sub!: Subscription;
  public index!: number;

  private leave(leave: string): void {
    this.current(false, leave);
  }
    

  private enter(enter: string): void {
    this.current(true, enter);
  }
   

  private current(flag: boolean, position: string): void {
    this.cars[this.index].show = flag;
    flag ?
      this.cars[this.index].enter = position :
      this.cars[this.index].leave = position
 }
      

    
  
  public left(enter: string, leave: string): void {
    this.leave(leave);
    if (!this.index) {
      this.index = this.cars.length;
    }
    this.index--;
    this.enter(enter);
  }

  public right(enter: string, leave: string): void {
    this.leave(leave);
    if (this.index === this.cars.length - 1) {
      this.index = -1;
    }
    this.index++;
    this.enter(enter);
  }

  ngOnInit(): void {
    this.sub = this.carService.index$
              .subscribe(index => this.index = index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

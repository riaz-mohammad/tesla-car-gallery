import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  animations: [
    trigger('animateBackground', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.6)'}),
        animate('1000ms', style({ opacity: 1, transform: 'scale(1)'})),
      ]),
    ]),
  ],
})
export class BackgroundComponent {
  @HostBinding('@animateBackground')
  runAnimation = true;
}



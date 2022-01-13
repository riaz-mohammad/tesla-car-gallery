import { trigger, transition, animate, style } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-cars-colors-button',
  template: ` <button><ng-content></ng-content></button> `,
  styleUrls: ['./show-cars-colors-button.component.scss'],
  animations: [
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(120%)' }),
        animate(
          '800ms 2000ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0%)' })
        ),
      ]),
    ]),
  ],
})
export class ShowCarsColorsButtonComponent {
  @HostBinding('@buttonAnimation')
  private runAnimation = true;
}

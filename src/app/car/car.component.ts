import { Component, Input, HostListener } from '@angular/core';
import { CarsService } from './../cars.service';

@Component({
  selector: 'app-car',
  template: `
    <ng-content></ng-content>
    <img [src]="'../../assets/' + path" alt="" />
  `,
  styleUrls: ['./car.component.scss'],

})
export class CarComponent {
  constructor(public carService: CarsService) {}
 
  @Input() color!: string;
  @Input() path!: string;

  @HostListener('click')
  onClick(): void {
    this.carService.images(this.color);
  }

}

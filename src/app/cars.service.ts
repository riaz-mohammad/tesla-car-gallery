import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface State {
  path: string;
  show: boolean;
  enter: string;
  leave: string;
}
  
export class State {
  constructor(public path: string,
              public show: boolean,
              public enter: string,
              public leave: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  public images$ = new BehaviorSubject<State[] | null>(null);
  public index$ = new BehaviorSubject<number>(0);

  

  public images(color: string): void {
    this.index$.next(0);
    this.images$.next([
      new State(`${color}/one.jpg`, true, '', ''),
      new State(`${color}/two.jpg`, false, '', ''),
      new State(`${color}/three.jpg`, false, '', ''),
      new State(`${color}/four.jpg`, false, '', ''),
      new State(`${color}/five.jpg`, false, '', ''),
      new State(`${color}/six.jpg`, false, '', ''),
      new State(`${color}/seven.jpg`, false, '', ''),
      new State(`${color}/eight.jpg`, false, '', ''),
    ]);

  }
}

  

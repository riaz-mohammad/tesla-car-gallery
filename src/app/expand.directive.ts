import { BehaviorSubject } from 'rxjs';
import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appExpand]'
})
export class ExpandDirective {
  @Output() showOrHide: EventEmitter<string> = new EventEmitter();
  @Input() appExpand!: string;
   
  @HostListener('mouseover')
  onEnter(): void {
    this.showOrHide.emit(this.appExpand);
   }

    
  @HostListener('mouseleave')
  onLeave(): void {
    this.showOrHide.emit('');
  }

    
}
  
  
  


import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeading]'
})
export class HeadingDirective {

  constructor(private ele: ElementRef) {
    (this.ele.nativeElement as HTMLElement).classList.add('p-3');
    (this.ele.nativeElement as HTMLElement).classList.add('bg-light');
    (this.ele.nativeElement as HTMLElement).classList.add('border');
    (this.ele.nativeElement as HTMLElement).classList.add('rounded');
  }

}

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFade]'
})
export class FadeDirective {

  @HostBinding('style.color') textColor: string;
  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.textColor = 'rgb(255,255,255)';
    this.backgroundColor = 'rgb(113,24,52)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor = 'rgb(52,58,64)';
    this.backgroundColor = 'rgb(255,255,255)';
  }

  constructor() { }
}

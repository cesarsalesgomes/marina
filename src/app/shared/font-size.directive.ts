import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  @Input() sizes: number[];

  @HostBinding('style.font-size') f: string;

  @HostListener('window:load') onLoad() {
    this.setFont(window.innerWidth);
  }

  @HostListener('window:resize') onResize() {
    this.setFont(window.innerWidth);
  }

  constructor() { }

  setFont(width: number) {
    if (width >= 1200) {
      this.f = (this.sizes[0] || 0) + 'px';
    } else if (width >= 992) {
      this.f = (this.sizes[1] || 0) + 'px';
    } else if (width >= 768) {
      this.f = (this.sizes[2] || 0) + 'px';
    } else if (width >= 576) {
      this.f = (this.sizes[3] || 0) + 'px';
    } else {
      this.f = (this.sizes[4] || 0) + 'px';
    }
  }

}

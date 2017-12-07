import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appResponsiveLogo]'
})
export class ResponsiveLogoDirective {

  @HostBinding('style.height') height;
  @HostBinding('style.width') width;

  @HostListener('window:load') onLoad() {
    this.setHeightAndWidth(window.innerWidth);
  }

  @HostListener('window:resize') onResize() {
    this.setHeightAndWidth(window.innerWidth);
  }

  constructor(
    private _elementRef: ElementRef,
  ) { }

  setHeightAndWidth(innerWidth: number) {
    let width: number;
    if (innerWidth >= 1200) {
      this.width = 286;
      width = 286;
    } else if (innerWidth >= 992) {
      this.width = 230;
      width = 230;
    } else if (innerWidth >= 768) {
      this.width = 180;
      width = 180;
    } else if (innerWidth >= 576) {
      this.width = 150;
      width = 150;
    } else {
      this.width = 120;
      width = 120;
    }

    this.height = this.fluidImage(
      width,
      this._elementRef.nativeElement.naturalWidth,
      this._elementRef.nativeElement.naturalHeight
    );
  }

  fluidImage(width: number, naturalWidth: number, naturalHeight: number) {
    return Math.round(width / (naturalWidth / naturalHeight)) + 'px';
  }
}

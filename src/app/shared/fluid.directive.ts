import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFluid]'
})
export class FluidDirective {

  @HostBinding('class.container') container;
  @HostBinding('class.container-fluid') containerFluid;

  @HostListener('window:load') onLoad() {
    this.fluid();
  }

  @HostListener('window:resize') onResize() {
    this.fluid();
  }

  fluid() {
    if (window.innerWidth >= 1200) {
      this.container = true;
      this.containerFluid = false;
    } else {
      this.container = false;
      this.containerFluid = true;
    }
  }

}

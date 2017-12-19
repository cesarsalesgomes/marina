import { Directive, HostBinding, HostListener } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appFluid]'
})
export class FluidDirective {

  @Input() width: number;
  @HostBinding('class.container') container;
  @HostBinding('class.container-fluid') containerFluid;

  @HostListener('window:load') onLoad() {
    this.fluid();
  }

  @HostListener('window:resize') onResize() {
    this.fluid();
  }

  fluid() {
    if (window.innerWidth >= this.width) {
      this.container = true;
      this.containerFluid = false;
    } else {
      this.container = false;
      this.containerFluid = true;
    }
  }

}

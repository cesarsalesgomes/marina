import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleLink]'
})
export class ToggleLinkDirective {

  @HostBinding('class.nav-link') c1 = true;
  @HostBinding('class.dark') c2 = true;
  @HostBinding('class.rad-5') c3 = true;
  @HostBinding('class.px-0') c4 = true;
  @HostBinding('class.p-md-2') c5 = true;
  @HostBinding('class.m-md-2') c6 = true;
  @HostBinding('class.text-center') c7 = true;

  constructor() { }
}

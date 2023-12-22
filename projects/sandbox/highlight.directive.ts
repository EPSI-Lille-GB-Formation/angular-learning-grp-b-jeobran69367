import { Directive, HostListener, ElementRef,HostBinding,Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')
  bgColor = 'transparent';
  
  @Input('bg-color')
  bgHighlightColor = 'yellow'

  @Input('deflault-color')
  bgHighlightDefaultColor = 'transparent'

 
  constructor() {}

  ngAfterViewInit() {
    this.bgColor =this.bgHighlightDefaultColor;
  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.bgColor = this.bgHighlightColor;
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.bgColor = this.bgHighlightDefaultColor;
  }
  
}

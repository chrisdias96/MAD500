import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextDecoration]'
})

export class TextDecorationDirective {
  constructor(private renderer: Renderer2, private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null);
  }

  private hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.renderer.setStyle(this.elm.nativeElement, 'text-decoration', 'underline');
      this.renderer.setStyle(this.elm.nativeElement, 'font-weight', 'bold');
    } else {
      this.renderer.setStyle(this.elm.nativeElement, 'text-decoration', 'none');
      this.renderer.setStyle(this.elm.nativeElement, 'font-weight', 'normal');
    }
  }

}

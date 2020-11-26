import { Directive, ElementRef, Renderer2 } from '@angular/core';

// This is an attibute directive
// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // dependency injection
    console.log(`Inside Constructor of ColorizerDirective`);
    console.log(this.elRef.nativeElement);

    // changing the bgColor, color using JS
    const el = this.elRef.nativeElement;
    // el.style.backgroundColor = 'yellow';
    // el.style.color = 'blue';

    this.renderer.setStyle(el, 'background-color', 'yellow');
    this.renderer.setStyle(el, 'color', 'blue');
  }

}

import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {

	// @Input('appHoverItem') bgColor: string;

	constructor(private element: ElementRef) {
		// this.element.nativeElement.style.backgroundColor = this.bgColor;
	 }
	
	

	@HostListener('mouseenter') onMouseEnter() {
		this.hover('280px', '380px', 5, '-15px', '-15px');
	}
	
	@HostListener('mouseleave') onMouseLeave() {
		this.hover(null, null, null, null, null);
	}

	private hover (width: string, height: string, zIndex: number, top:string, left: string) {
		this.element.nativeElement.style.width = width;
		this.element.nativeElement.style.height = height;
		this.element.nativeElement.style.zIndex = zIndex;
		this.element.nativeElement.style.top = top;
		this.element.nativeElement.style.left = left;
	}
	// private setBgColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
}

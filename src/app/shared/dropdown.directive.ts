import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        const target = event.target as HTMLElement;
        this.isOpen = this.elementRef.nativeElement.contains(target) ? !this.isOpen : false;
    }
}

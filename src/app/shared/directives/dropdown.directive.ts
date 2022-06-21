import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDiretive {
    @HostBinding('class.open') isOpen: boolean = false;
   
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    constructor(
        private elRef: ElementRef,
    ){

    }
}
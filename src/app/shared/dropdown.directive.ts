import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[appDropDown]'
})
export class DropDownDirective{
    @HostBinding('class.open') isOpen = true;
    @HostListener('click') clickEvent(event : Event){
        this.isOpen = !this.isOpen;
    }
}
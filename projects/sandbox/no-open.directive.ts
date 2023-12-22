import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoOpen]',
  standalone: true
})
export class NoOpenDirective {
  @HostListener('click', ['$event'])
  onClickLink(event: Event) {
    return false;
    console.log("Le lien choisir n'est pas autorisé !");
  }
}
 
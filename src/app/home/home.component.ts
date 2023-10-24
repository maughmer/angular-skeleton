import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  expand(accordion: HTMLDivElement) {
    accordion.classList.replace('hidden', 'visible');
  }

  toggle(accordion: HTMLDivElement) {
    const list = accordion.classList;
    if (list.contains('visible')) {
      list.replace('visible', 'hidden');
    } else {
      list.replace('hidden', 'visible');
    }
  }

}

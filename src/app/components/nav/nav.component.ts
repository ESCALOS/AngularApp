import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  active_menu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  };

  toggleMenu() {
    this.active_menu =!this.active_menu;
  }
}

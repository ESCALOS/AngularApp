import { Component } from '@angular/core';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  active_menu: boolean = false;
  counter = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products=>{
      this.counter = products.length;
    });
  };

  toggleMenu() {
    this.active_menu =!this.active_menu;
  }
}

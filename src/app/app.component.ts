import { Component } from '@angular/core';
import { Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent = "./assets/images/megumi.jpg";
  showImg = true;

  onLoaded(img: string) {
    console.log("loaded padre ",img)
  }
  toogleImg() {
    this.showImg = !this.showImg;
  }
}

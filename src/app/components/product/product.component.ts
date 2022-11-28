import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    name: '',
    price: 0,
    image: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddtoCart(): void {
    this.addedProduct.emit(this.product);
  }
}
import { Component } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'Rem & Ram',
      price: 150,
      image: './assets/images/rem_ram.jpg',
    },
    {
      id: '2',
      name: 'Megumi Katou',
      price: 150,
      image: './assets/images/megumi.jpg',
    },
    {
      id: '3',
      name: 'Yami',
      price: 150,
      image: './assets/images/yami.jpg',
    },
    {
      id: '1',
      name: 'Random',
      price: 150,
      image: './assets/images/imouto.jpg',
    },
    {
      id: '1',
      name: 'Rem & Ram',
      price: 150,
      image: './assets/images/rem_ram.jpg',
    },
    {
      id: '2',
      name: 'Megumi Katou',
      price: 150,
      image: './assets/images/megumi.jpg',
    },
    {
      id: '3',
      name: 'Yami',
      price: 150,
      image: './assets/images/yami.jpg',
    },
    {
      id: '1',
      name: 'Random',
      price: 150,
      image: './assets/images/imouto.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

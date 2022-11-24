import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "App";

  person = {
    name : 'Carlos',
    age : 50
  }

  names: string[] = ['Carlos','Rodrigo','Kiara','Rosario','Daniel'];

  newName: string = "";

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/tsukasa.jpg',
      category: 'all'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/imouto.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/rem_ram.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/Mirika.png'
    },
  ]

  incrementarEdad() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }

}

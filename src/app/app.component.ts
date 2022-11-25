import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "App";

  widthImg = 10;

  box = {
    width : 100,
    height: 100,
    background: 'red'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  person = {
    name : 'Carlos',
    age : 50
  }

  names: string[] = ['Carlos','Rodrigo','Kiara','Rosario','Daniel'];

  newName: string = "";

  products: Product[] = [
    {
      name: 'Tsukasa',
      price: 565,
      image: './assets/images/tsukasa.jpg',
      category: 'all'
    },
    {
      name: 'Imouto',
      price: 34,
      image: './assets/images/imouto.jpg',
    },
    {
      name: 'Rem && Ram',
      price: 23,
      image: './assets/images/rem_ram.jpg'
    },
    {
      name: 'Mirika',
      price: 34,
      image: './assets/images/Mirika.png'
    },
    {
      name: 'Megumi',
      price: 67,
      image: './assets/images/megumi.jpg'
    },
    {
      name: 'Yami-chan',
      price: 67,
      image: './assets/images/yami.jpg'
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

  onRegister(){
    console.log(this.register)
  }

}

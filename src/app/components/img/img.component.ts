import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {
  img: string = '';
  @Input('img')
    set changeImg(newImg: string){
      this.img = newImg;
      console.log('change just => ',this.img);
    }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = './assets/images/imouto.jpg';

  constructor() {
    console.log('constructor','imgValue =>',this.img);
  }

  ngOnInit(): void {
    console.log('onInit','imgValue =>',this.img);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges','imgValue =>',this.img);
    console.log(changes);
  }


  ngAfterViewInit(): void {
    console.log('afterView');
  }

  ngOnDestroy(): void {
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log('loaded');
    this.loaded.emit(this.img);
  }
}

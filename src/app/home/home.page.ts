import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fruits = ['apple', 'banana', 'cherry', 'dragon fruit', 'elderberry', 'fig', 'guava'];

  startMyEvent() {
    console.log('MY EVENT WORKS');
  }

  removeFruit(index) {
    this.fruits.splice(index, 1);
  }
}

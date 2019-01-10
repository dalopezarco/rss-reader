import { Component } from '@angular/core';

@Component({
  selector: 'a-new',
  templateUrl: 'a-new.html'
})
export class ANewComponent {

  text: string;

  constructor() {
    console.log('Hello ANewComponent Component');
    this.text = 'Hello World';
  }

}

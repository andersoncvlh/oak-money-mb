import { Component } from '@angular/core';

/**
 * Generated class for the PessoaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pessoa',
  templateUrl: 'pessoa.html'
})
export class PessoaComponent {

  text: string;

  constructor() {
    console.log('Hello PessoaComponent Component');
    this.text = 'Hello World';
  }

}

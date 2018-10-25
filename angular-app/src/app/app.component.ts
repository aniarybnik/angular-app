import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dodawanie linków';

  tytul: string;
  strona: string;
  listaTytul: Array<string> = [];
  listaLinkow: Array<string> = [];
  licznik: Array<number> = [];





   dodaj() {
     this.listaTytul.push(this.tytul);
     this.listaLinkow.push(this.strona);
     this.licznik.push(0);
     this.tytul = '';
     this.strona = '';
  }


  plus(i) {
    // this.licznik = this.licznik.values;
    this.licznik[i] = this.licznik[i] + 1;
  }

  minus(i) {
    this.licznik[i] = this.licznik[i] - 1;
  }
}

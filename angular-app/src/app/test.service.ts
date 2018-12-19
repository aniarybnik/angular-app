import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public sub = new Subject<any>();
  constructor() { }

  sendMessage() {
    console.debug('mesage')
    this.sub.next('hejka');
  }

  listen() {
    console.debug('listen')
    return this.sub;
  }
}

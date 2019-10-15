import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private _isLogged = false;

  constructor() { }

  isLogged() {
    return this._isLogged;
  }

  login(username: string, password: string) {
    this._isLogged = username === 'toto' && password === 'admin';
    return this._isLogged;
  }

}

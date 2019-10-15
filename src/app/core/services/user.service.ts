import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isLogged() {
    return false;
  }

  login(username: string, password: string) {
    return username === 'toto' && password === 'admin'
  }

}

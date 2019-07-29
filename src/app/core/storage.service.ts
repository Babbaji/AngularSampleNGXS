import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  user = 'user';
  constructor() { }

  setUser(user: any) {
    localStorage.setItem(this.user, JSON.stringify(user));
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem(this.user));
  }

  removeUser() {
    localStorage.removeItem(this.user);
  }
}

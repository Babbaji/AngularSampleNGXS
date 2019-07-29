import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../ngxs/user/user.state.model';


@Injectable()
export class UserService {
  private APIAUTHURL = 'http://localhost:8080/api/utente/';

  constructor(
    private http: HttpClient) {
  }

  login(username: string, password: string): User {
    if (password.length > 0) {
      return {username, password};
    } else {
      return null;
    }
  }

}

import {Action, State, StateContext} from '@ngxs/store';
import {User, UserStateModel} from './user.state.model';
import {UserService} from '../../http-services/user.service';
import {Login, Logout} from './user.action';
import {createEntityAdapter} from 'ngxs-entity';
import {StorageService} from '../../storage.service';

/* Gives snippets to quickly insert, update, delete entities from state */
export const userEntityAdapter = createEntityAdapter<User>({});

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: undefined,
  }
})

export class UserState {
  constructor(private userService: UserService,
              private storageService: StorageService) {
  }


  @Action(Login)
  login({patchState, getState, dispatch, setState}: StateContext<UserStateModel>, {username, password, rememberMe}: Login) {
    const user = this.userService.login(username, password);
    if (user !== null) {
      patchState({user});
    }
    if (rememberMe) {
      this.storageService.setUser(user);
    }
  }

  @Action(Logout)
  logout({patchState, getState, dispatch, setState}: StateContext<UserStateModel>) {
    patchState({user: undefined});
    this.storageService.removeUser();
  }

}


import {Selector} from '@ngxs/store';
import {userEntityAdapter, UserState} from './user.state';
import {UserStateModel} from './user.state.model';

export class UserSelector {

  @Selector([UserState])
  static isUserLoggedIn(state: UserStateModel) {
    return state.user !== undefined && state.user !== null;
  }

  @Selector([UserState])
  static getUser(state: UserStateModel) {
    return state.user;
  }

  /* Makes sense with Arrays */
  // @Selector([UserState])
  // static getAllUsers(state: UserStateModel) {
  //   return userEntityAdapter.getSelectors().selectAll(state);
  // }
}


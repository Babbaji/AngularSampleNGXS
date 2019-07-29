
export class Login {
  static readonly type = '[user] Login';
  constructor(public username: string, public password: string, public rememberMe: boolean) {}
}

export class Logout {
  static readonly type = '[user] Logout';
  constructor() {}
}

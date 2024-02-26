import { Injectable } from '@angular/core';
import { User } from '../../core/models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersStoreService {
  private readonly _users: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  readonly users$: Observable<User[]> = this._users.asObservable();

  get users(): User[] {
    return this._users.getValue();
  }

  set users(val: User[]) {
    this._users.next(val);
  }

  updateUser(updateUser: User) {
    const currentUsers = [...this.users];
    const index = currentUsers.findIndex(
      (message) => message.id === updateUser.id
    );
    currentUsers[index] = updateUser;
    this.users = currentUsers;
  }

  constructor() {}
}

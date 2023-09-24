import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "src/app/interfaces/user.interface";
import { UserService } from "src/app/services/user.service";

@Injectable({
  providedIn: "root"
})
export class UsersResolver implements Resolve<IUser[]> {
  constructor(private _usersSvc: UserService) {}

  resolve(): Observable<IUser[]> {
    return this._usersSvc.getUsers();
  }
}

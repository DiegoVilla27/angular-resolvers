import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "src/app/interfaces/user.interface";
import { UserService } from "src/app/services/user.service";

@Injectable({
  providedIn: "root"
})
export class UserResolver implements Resolve<IUser> {
  constructor(private _usersSvc: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    const userId = route.paramMap.get("id");
    return this._usersSvc.getUser(Number(userId));
  }
}

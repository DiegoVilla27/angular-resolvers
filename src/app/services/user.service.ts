import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pluck } from "rxjs";
import { environment } from "src/environments/environment.development";
import {
  IResultMultiple,
  IResultSingle,
  IUser
} from "../interfaces/user.interface";

@Injectable({
  providedIn: "root"
})
export class UserService {
  URL: string = environment.API_URL;

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this._http
      .get<IResultMultiple>(`${this.URL}/users?page=0`)
      .pipe(pluck("data"));
  }

  getUser(id: number): Observable<IUser> {
    return this._http
      .get<IResultSingle>(`${this.URL}/users/${id}`)
      .pipe(pluck("data"));
  }
}

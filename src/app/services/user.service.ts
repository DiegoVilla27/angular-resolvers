import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pluck } from "rxjs";
import { environment } from "src/environments/environment.development";
import { IResult, IUser } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root"
})
export class UserService {
  URL: string = environment.API_URL;

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this._http
      .get<IResult>(`${this.URL}/?results=10`)
      .pipe(pluck("results"));
  }
}

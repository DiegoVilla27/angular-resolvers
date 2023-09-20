import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { IUser } from "./interfaces/user.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  users: IUser[] = [];

  constructor(private _usersSvc: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._usersSvc
      .getUsers()
      .subscribe((users: IUser[]) => (this.users = users));
  }
}

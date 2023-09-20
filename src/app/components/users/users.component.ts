import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "src/app/interfaces/user.interface";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: []
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  constructor(
    private _routeAct: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.users = this._routeAct.snapshot.data["users"];
  }

  openUser(id: number): void {
    this._router.navigate([`/users/${id}`]);
  }
}

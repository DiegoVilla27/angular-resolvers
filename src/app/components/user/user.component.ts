import { Component } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { IUser } from "src/app/interfaces/user.interface";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: []
})
export class UserComponent {
  user!: IUser;

  constructor(private _routeAct: ActivatedRoute) {}

  ngOnInit(): void {
    this._routeAct.data.subscribe((data: Data) => (this.user = data["user"]));
  }
}

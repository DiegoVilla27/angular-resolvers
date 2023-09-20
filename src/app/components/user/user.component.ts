import { Component } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { IUser } from "src/app/interfaces/user.interface";

@Component({
  selector: "app-user",
  template: `
    <h1>USER: {{ user.id }}</h1>
    <pre>{{ user | json }}</pre>
  `
})
export class UserComponent {
  user!: IUser;

  constructor(private _routeAct: ActivatedRoute) {}

  ngOnInit(): void {
    this._routeAct.data.subscribe((data: Data) => (this.user = data["user"]));
  }
}

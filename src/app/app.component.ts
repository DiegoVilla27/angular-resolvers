import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ERoutes } from "./enums/routes.enums";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  constructor(private _router: Router) {}

  public goToUsers(): void {
    this._router.navigate([`/${ERoutes.users}`]);
  }
}

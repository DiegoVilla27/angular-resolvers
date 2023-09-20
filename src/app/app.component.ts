import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  constructor(private _router: Router) {}

  goToUsers(): void {
    this._router.navigate(["/users"]);
  }
}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./components/users/users.component";
import { UsersResolver } from "./resolvers/users/users.resolver";
import { UserComponent } from "./components/user/user.component";
import { UserResolver } from "./resolvers/user/user.resolver";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    resolve: {
      users: UsersResolver
    },
    children: [
      {
        path: ":id",
        component: UserComponent,
        resolve: {
          user: UserResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

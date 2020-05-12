import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FollewersComponent } from "./follewers/follewers.component";

const routes: Routes = [
  {
    path: "",
    component: FollewersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowersPageRoutingModule {}

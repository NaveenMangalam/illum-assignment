import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared/shared.module";
import { FollowersPageRoutingModule } from "./followers-page-routing.module";
import { FollewersComponent } from "./follewers/follewers.component";

@NgModule({
  declarations: [FollewersComponent],
  imports: [CommonModule, SharedModule, FollowersPageRoutingModule]
})
export class FollowersPageModule {}

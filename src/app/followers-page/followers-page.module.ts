import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersPageRoutingModule } from './followers-page-routing.module';
import { FollewersComponent } from './follewers/follewers.component';

@NgModule({
  declarations: [FollewersComponent],
  imports: [
    CommonModule,
    FollowersPageRoutingModule
  ]
})
export class FollowersPageModule { }

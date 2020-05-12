import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductListingRoutingModule } from "./product-listing-routing.module";
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { SharedModule } from "../shared/shared/shared.module";

@NgModule({
  declarations: [ProductListingComponent],
  imports: [CommonModule, SharedModule, ProductListingRoutingModule]
})
export class ProductListingModule {}

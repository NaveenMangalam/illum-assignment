import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListingComponent } from "./product-listing/product-listing.component";
const routes: Routes = [
  {
    path: "",
    component: ProductListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListingRoutingModule {}

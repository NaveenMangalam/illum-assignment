import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren:
      "./product-listing/product-listing.module#ProductListingModule"
  },
  {
    path: ":productSlug",
    loadChildren: "./product-detail/product-detail.module#ProductDetailModule"
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

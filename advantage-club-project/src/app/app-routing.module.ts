import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren:
      "./product-listing/product-listing.module#ProductListingModule"
  },
  {
    path: "",
    loadChildren: "./search/search.module#SearchModule"
  },
  {
    path: ":productSlug",
    loadChildren: "./product-detail/product-detail.module#ProductDetailModule"
  },
  {
    path: ":userSlug/followers",
    loadChildren: "./followers-page/followers-page.module#FollowersPageModule"
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

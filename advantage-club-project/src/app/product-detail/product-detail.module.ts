import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared/shared.module";
import { ProductDetailRoutingModule } from "./product-detail-routing.module";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, SharedModule, ProductDetailRoutingModule]
})
export class ProductDetailModule {}

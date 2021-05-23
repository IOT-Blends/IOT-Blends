import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductListComponent } from './add-product-list/add-product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsListComponent,
    AddProductListComponent,
  ],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';



const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "product-list", component: ProductListComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "update-product/:id", component: UpdateProductComponent},
  {path: "category-list", component:CategoryListComponent},
  {path: "add-category", component:AddCategoryComponent},
  {path: "update-category/:id", component:UpdateCategoryComponent},
  {path: "stock-list", component:StockListComponent},
  {path: "add-stock", component: AddStockComponent},
  {path: "update-stock/:id", component: UpdateStockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

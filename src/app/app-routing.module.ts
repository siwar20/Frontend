import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RayonListComponent } from './rayon-list/rayon-list.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardCustomerComponent } from './board-customer/board-customer.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProductfoodComponent } from './product/productfood/productfood.component';
import { ProductclothingComponent } from './product/productclothing/productclothing.component';
import { FoodComponent } from './categories/food/food.component';
import { ClothesComponent } from './categories/clothes/clothes.component';
import { ElectronicsComponent } from './categories/electronics/electronics.component';
import { FashionEtBeautyComponent } from './categories/fashion-et-beauty/fashion-et-beauty.component';
import { GestionProductComponent } from './gestion-product/gestion-product.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { CagnotteComponent } from './cagnotte/cagnotte.component';
import { AddCagnotteComponent } from './cagnotte/add-cagnotte/add-cagnotte.component';
import { UsersComponent } from './users/users.component';
import { TrailerComponent } from './event/trailer/trailer.component';



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
  {path: "update-stock/:id", component: UpdateStockComponent},
  {path: "rayon-list", component: RayonListComponent},
  {path: "add-rayon", component: AddRayonComponent},
  { path: "login", component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardCustomerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: "food/:id", component: FoodComponent },
  { path: "clothing/:id", component: ClothesComponent },
  { path: "electronics/:id", component: ElectronicsComponent },
  { path: "fashion-et-beauty/:id", component: FashionEtBeautyComponent },
  {path: "gestion-product", component: GestionProductComponent},
  { path: 'categories/food', component: FoodComponent },
  {path:"Events", component: EventComponent},
  {path:"Add-Event", component: AddEventComponent},
  {path:"Charts", component: CagnotteComponent},
  {path:"Add-Chart", component: AddCagnotteComponent},
  {path:"Users", component: UsersComponent},
  {path:"Event/:id", component: TrailerComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

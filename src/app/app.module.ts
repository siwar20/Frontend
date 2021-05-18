import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import {FormControl, FormsModule, NgForm} from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { GestionProductComponent } from './gestion-product/gestion-product.component';

import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { SearchfiltrePipe } from './searchfiltre.pipe';
import { MailingComponent } from './mailing/mailing.component';
import { RayonListComponent } from './rayon-list/rayon-list.component';
import { AddRayonComponent } from './add-rayon/add-rayon.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardCustomerComponent } from './board-customer/board-customer.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProductfoodComponent } from './product/productfood/productfood.component';
import { ProductclothingComponent } from './product/productclothing/productclothing.component';
import { ProductresultComponent } from './shared/productresult/productresult.component';
import { FashionEtBeautyComponent } from './categories/fashion-et-beauty/fashion-et-beauty.component';
import { ClothesComponent } from './categories/clothes/clothes.component';
import { FoodComponent } from './categories/food/food.component';
import { ElectronicsComponent } from './categories/electronics/electronics.component' ;
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { CagnotteComponent } from './cagnotte/cagnotte.component';
import { AddCagnotteComponent } from './cagnotte/add-cagnotte/add-cagnotte.component';
import { TrailerComponent } from './event/trailer/trailer.component';
import { UsersComponent } from './users/users.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {path: 'product-list', component: ProductListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidbarComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent,
    GestionProductComponent,
  
    CategoryListComponent,
  
    AddCategoryComponent,
  
    UpdateCategoryComponent,
  
    StockListComponent,
  
    AddStockComponent,
  
    UpdateStockComponent,
  
    SearchfiltrePipe,
  
    MailingComponent,
  
    RayonListComponent,
  
    AddRayonComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardCustomerComponent,
    ProductfoodComponent,
    ProductclothingComponent,
    ProductresultComponent,
    FashionEtBeautyComponent,
    ClothesComponent,
    FoodComponent,
    ElectronicsComponent,
    EventComponent,
    AddEventComponent,
    CagnotteComponent,
    AddCagnotteComponent,
    TrailerComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxYoutubePlayerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

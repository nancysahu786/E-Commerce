import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerProductListComponent } from './sellerList/seller-product-list/seller-product-list.component';
import { SellerAddProductComponent } from './sellerAddProduct/seller-add-product/seller-add-product.component';


const routes: Routes = [
  // Your route configurations here
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'seller-auth',
    component: SellerAuthComponent
  },
  {
    path:'seller-home',
    component: SellerHomeComponent,
    canActivate:[AuthGuard]  // here we are using authguard to allow the user only to access this page after login 
  },
  {
    path:'seller-product-list',
    component: SellerProductListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'seller-add-product',
    component: SellerAddProductComponent,
    canActivate:[AuthGuard]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

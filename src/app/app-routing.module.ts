import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsFormComponent } from './admin/products-form/products-form.component';
import { UpdatePageComponent } from './admin/update-page/update-page.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [

  {path:'',component:ProductsComponent},
  {path:'products',component:ProductsComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},

  {path:'login',component:LoginComponent},


  {path:'admin/products/new',component:ProductsFormComponent ,canActivate:[AuthGuardService]},
  {path:'admin/products/:id',component:UpdatePageComponent},
  {path:'admin-products',component:AdminProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

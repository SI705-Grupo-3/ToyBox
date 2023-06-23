import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeBuyerComponent } from './component/homes/home-buyer/home-buyer.component';
import { HomeSellerComponent } from './component/home-seller/home-seller.component';
import { BuyerCatalogComponent } from './component/catalog/buyer-catalog/buyer-catalog.component';
import { BuyerProfileComponent } from './component/profile/buyer-profile/buyer-profile.component';
import { FaqComponent } from './component/faq/faq.component';
import { MyPurchasesComponent } from './component/my-purchases/my-purchases.component';
import { MySalesComponent } from './component/my-sales/my-sales.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { SellerCatalogComponent } from './component/catalog/seller-catalog/seller-catalog.component';
import { SellerProfileComponent } from './component/profile/seller-profile/seller-profile.component';
import { ShopingCartComponent } from './component/pays/shoping-cart/shoping-cart.component';
import { FooterComponent } from './component/footer/footer.component';
import { UserListarComponent } from './component/user/user-listar/user-listar.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { PayComponent } from './component/pays/pay/pay.component';
import { PaymentMethodComponent } from './component/pays/pay/payment-method/payment-method.component';

const routes: Routes = [
  {
    path: 'buyer-catalog', component: BuyerCatalogComponent
  },
  {
    path: 'buyer-profile', component: BuyerProfileComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home-buyer', component: HomeBuyerComponent
  },
  {
    path: 'home-seller', component: HomeSellerComponent
  },
  {
    path: 'my-purchases', component: MyPurchasesComponent
  },
  {
    path: 'my-sales', component: MySalesComponent
  },
  {
    path: 'register-product', component: RegisterProductComponent, children: [
      { path: 'edit/:id', component: RegisterProductComponent}
    ]
  },
  {
    path: 'seller-catalog', component: SellerCatalogComponent
  },
  {
    path: 'seller-profile', component: SellerProfileComponent
  },
  {
    path: 'shoping-cart', component: ShopingCartComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'listar-usuario', component: UserListarComponent
  },
  {
    path: 'edit-product', component: EditProductComponent,
  },
  {
    path: 'pay', component: PayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

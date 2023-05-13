import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './component/category/category.component';
import { CategoryListarComponent } from './component/category/category-listar/category-listar.component';
import { UserComponent } from './component/user/user.component';
import { UserListarComponent } from './component/user/user-listar/user-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './component/home/home.component';
import { HomeBuyerComponent } from './component/home-buyer/home-buyer.component';
import { HomeSellerComponent } from './component/home-seller/home-seller.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BuyerCatalogComponent } from './component/buyer-catalog/buyer-catalog.component';
import { BuyerProfileComponent } from './component/buyer-profile/buyer-profile.component';
import { FaqComponent } from './component/faq/faq.component';
import { FooterComponent } from './component/footer/footer.component';
import { MyPurchasesComponent } from './component/my-purchases/my-purchases.component';
import { MySalesComponent } from './component/my-sales/my-sales.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { SellerCatalogComponent } from './component/seller-catalog/seller-catalog.component';
import { SellerProfileComponent } from './component/seller-profile/seller-profile.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { DialogComponent } from './component/home-seller/dialog/dialog.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListarComponent,
    UserComponent,
    UserListarComponent,
    HomeComponent,
    HomeBuyerComponent,
    HomeSellerComponent,
    LoginComponent,
    RegisterComponent,
    BuyerCatalogComponent,
    BuyerProfileComponent,
    FaqComponent,
    FooterComponent,
    MyPurchasesComponent,
    MySalesComponent,
    NavbarComponent,
    RegisterProductComponent,
    SellerCatalogComponent,
    SellerProfileComponent,
    ShopingCartComponent,
    DialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,//add mano
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonToggleModule,
    MatExpansionModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

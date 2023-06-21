import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { ProductRegisterService } from 'src/app/service/product-register.service';
import { Product_register } from 'src/app/model/product_register';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css'],
})
export class HomeSellerComponent implements OnInit {
  lista: Product[] = [];
  lista2: Product_register[] = [];
  productselected: Product;
  errorMessage: string;
  constructor(
    private productService: ProductService,
    private productRegisterService: ProductRegisterService,
    private router: Router,
    public route: ActivatedRoute,
    private dialog: MatDialog,
    private userService:UserService,

  ) {}
  ngOnInit(): void {
    this.errorMessage="";
    this.productRegisterService.list().subscribe((data) => {
    this.lista2 = data;

    const productIds = this.lista2.map((item) => item.id_product);
    const observables = productIds.map((productId) => this.productService.listId(productId));
      forkJoin(observables).subscribe((products: Product[]) => {
        this.lista = products.filter((product) => !!product);
      });
    }); 

  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete(id);
      } else {
      }
    });
  }
  delete(id: number) {
    this.productService.delete(id).subscribe(() =>
      this.router.navigate(['products']).finally(() => {
        window.location.reload();
      }),
    );
  }
  editar(id: number) {
    this.productService.listId(id).subscribe((user1) =>localStorage.setItem("editproductid",JSON.stringify(user1)));
    this.router.navigate(['/edit-product']).finally(()=>window.location.reload());

  }
}

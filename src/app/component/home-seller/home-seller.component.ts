import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css'],
})
export class HomeSellerComponent implements OnInit {
  lista: Product[] = [];
  productselected: Product;
  errorMessage: string;
  constructor(
    private productService: ProductService,
    private router: Router,
    public route: ActivatedRoute,
    private dialog: MatDialog,
    private userService:UserService,

  ) {}
  ngOnInit(): void {
    this.errorMessage="";
    this.productService.list().subscribe((data) => (this.lista = data));

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

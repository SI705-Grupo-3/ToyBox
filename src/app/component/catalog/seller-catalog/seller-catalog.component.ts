import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-seller-catalog',
  templateUrl: './seller-catalog.component.html',
  styleUrls: ['./seller-catalog.component.css']
})
export class SellerCatalogComponent implements OnInit{
  lista: Product[] = [];
  lista2: Product[] = [];
  errorMessage: string;
  categoryselect: number;
  preciomax: number;
  preciomin: number;


  dataSource= new MatTableDataSource<Category>();
  constructor(
    private productService: ProductService,
    private router: Router,
    public route: ActivatedRoute,
    private dialog: MatDialog,
    private userService:UserService,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.errorMessage="";
    this.productService.list().subscribe((data) => (this.lista = data, this.lista2=data));
    this.categoryService.list().subscribe(data=>this.dataSource.data=data);
  }
  delete(id: number) {
    this.productService.delete(id).subscribe(() =>
      this.router.navigate(['products']).then(() => {
        window.location.reload();
      }),
    );
  }


  applyFilters(){
    this.lista=this.lista2;
    console.log(this.preciomax);
    console.log(this.preciomin);
    //precios
    if (this.preciomin || this.preciomax) {
          this.lista=this.lista.filter(product => {
           return product.price >= this.preciomin && product.price <= this.preciomax;
          });
    }
    //categorias
    if (this.categoryselect) {
          this.lista=this.lista.filter(product => {
           return product.category.id === this.categoryselect;
          });
    }
  }
  borrarfilters(){
    this.lista=this.lista2;
    this.preciomax=0;
    this.preciomin=0;
    window.location.reload();
  }

  onCategorySelection(event: MatSelectChange) {
    this.categoryselect = event.value;
  }
}

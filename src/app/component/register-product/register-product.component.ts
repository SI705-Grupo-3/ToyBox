import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  form: FormGroup = new FormGroup({});
  product: Product = new Product();
  dataSource= new MatTableDataSource<Category>();
  categorias:Category[];
  errorMessage: string;
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
    });
    this.categoryService.list().subscribe(data=>this.dataSource.data=data);
    console.log(this.dataSource.data);  
  }
  register(): void {

    this.product.category_id = this.form.value['category_id'];
    this.product.name = this.form.value['name'];
    this.product.description = this.form.value['description'];
    this.product.price = this.form.value['price'];
    this.product.stock = this.form.value['stock'];
    if (this.form.valid) {
      this.productService
        .insert(this.product)
        .subscribe((data) => this.router.navigate(['product']));
      this.router.navigate(['/home-seller']); //inicio comprador o vendedor
    } else {
      this.errorMessage = 'Complete correctamente los campos.';
    }
  }
}

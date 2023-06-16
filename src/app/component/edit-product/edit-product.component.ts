import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productedit:Product = new Product();
  product:Product=new Product();
  form: FormGroup = new FormGroup({});
  dataSource= new MatTableDataSource<Category>();
  errorMessage: string;

  id: number = 0;
  edicion: boolean = true; 

  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const storedProduct = localStorage.getItem('editproductid');
    if (storedProduct) {
      this.productedit = JSON.parse(storedProduct);
    } 
    this.categoryService.list().subscribe(data=>this.dataSource.data=data);
    this.form = new FormGroup({
      name: new FormControl(this.productedit.name, [Validators.required]),
      description: new FormControl(this.productedit.description, [Validators.required]),
      price: new FormControl(this.productedit.price, [Validators.required]),
      stock: new FormControl(this.productedit.stock, [Validators.required]),      
    });
   
  }


  editar() {
    this.product.id =this.productedit.id;
    this.product.category_id = this.productedit.category_id;
    this.product.name = this.form.value['name'];
    this.product.description = this.form.value['description'];
    this.product.price = this.form.value['price'];
    this.product.stock = this.form.value['stock'];
    console.log(this.product.name, this.product.description, this.product);
    if (this.form.valid) {
        this.productService.update(this.product).subscribe((data) =>
          this.router.navigate(['products']).finally(()=>{
            localStorage.removeItem('editproductid'); 
            this.router.navigate(['/home-seller']);
          })
        );
    } else {
      this.errorMessage = 'Complete correctamente los campos.';
    }
  }

  volver() {
    localStorage.removeItem('editproductid'); 
    this.router.navigate(['/home-seller']).finally(()=>window.location.reload());
  }
}
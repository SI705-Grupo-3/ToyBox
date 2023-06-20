import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  productedit:Product = new Product();
  form: FormGroup = new FormGroup({});
  product: Product = new Product();
  dataSource= new MatTableDataSource<Category>();
  //categorias:Category[];
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
    this.categoryService.list().subscribe(data=>this.dataSource.data=data);
    this.route.params.subscribe((datas: Params) => {
      console.log(datas);
      this.id = datas['id']; //capturando el id del listado
      console.log(this.id);

      this.edicion = datas['id'] != null; 
      console.log(this.edicion);

      this.init();
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
    });
    
  }

  init() {
    if (this.edicion) {
      console.log('editproduct');
      const storedProduct = localStorage.getItem('editproductid');
      if (storedProduct) {
        this.productedit = JSON.parse(storedProduct);
      }
        this.form = new FormGroup({
          name: new FormControl(this.productedit.name),
          description: new FormControl(this.productedit.description),
          price: new FormControl(this.productedit.price),
          stock: new FormControl(this.productedit.stock),
          //category_id: new FormControl(data.category_id)
        });
      };
    }
  

  register(): void {
    
    this.product.category_id = this.form.value['category_id'];
    this.product.name = this.form.value['name'];
    this.product.description = this.form.value['description'];
    this.product.price = this.form.value['price'];
    this.product.stock = this.form.value['stock'];
    this.product.quantity = 1;
    if (this.form.valid) {
      if(this.edicion){
        this.productService.update(this.product).subscribe((data) =>
          this.router.navigate(['products']).finally(()=>{
            this.router.navigate(['/home-seller']);
          })
        );
      }else{
        this.productService.insert(this.product).subscribe((data) =>
          this.router.navigate(['products']).finally(()=>{
            this.router.navigate(['/home-seller']);
          })
        );
      }
    } else {
      this.errorMessage = 'Complete correctamente los campos.';
    }
  }
}


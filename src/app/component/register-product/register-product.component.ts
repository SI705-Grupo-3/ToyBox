import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Product_register } from 'src/app/model/product_register';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductRegisterService } from 'src/app/service/product-register.service';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  productedit:Product = new Product();
  productreg:Product=new Product();
  form: FormGroup = new FormGroup({});
  product: Product = new Product();
  user: User = new User();
  productregister: Product_register = new Product_register();
  dataSource= new MatTableDataSource<Category>();
  //categorias:Category[];
  errorMessage: string;
  selectedFile:any

  id: number = 0;
  edicion: boolean = true; 

  constructor(
    private productService: ProductService,
    private productRegisterService: ProductRegisterService,
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private http:HttpClient
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
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    this.productregister.id_user =this.user.id;

    
    this.product.category_id = this.form.value['category_id'];
    this.product.name = this.form.value['name'];
    this.product.description = this.form.value['description'];
    this.product.price = this.form.value['price'];
    this.product.stock = this.form.value['stock'];
    this.product.quantity = 1;
    console.log(this.product.category_id);
    if (this.form.valid) {
        this.productService.insert(this.product).subscribe((data) =>
        this.router.navigate(['products']).finally(()=>{
        localStorage.setItem('product_id', JSON.stringify(data));
        this.detalleRegistro(event);
      })
      );

    } else {
      this.errorMessage = 'Complete correctamente los campos.';
    }
  }
  detalleRegistro(event: any) {
    const storedproduct = localStorage.getItem('product_id');
    if (storedproduct) {
      this.productreg = JSON.parse(storedproduct);
    }
    this.uploadFile(event);
    
    this.productregister.id_user= this.user.id;
    this.productregister.id_product= this.productreg.id;
    localStorage.removeItem('product_id');
    this.productRegisterService.insert(this.productregister).subscribe((data) =>
          this.router.navigate(['product_registrations']).finally(()=>{
            this.router.navigate(['/home-seller']);
          })
        );
  }

  onFileSelected(event: any) {
    const file: File | null = event.target?.files?.[0] || null;
    this.selectedFile = file;

  }

   uploadFile(event: any) {
    const file: File = this.selectedFile;
    if (file) {
    const productId = this.productreg.id; // Reemplaza esto con el identificador real del producto
    const fileName = `producto(${productId})`; // Generar el nombre del archivo
  
    const formData = new FormData();
    formData.append('image', this.selectedFile);
  
    this.http.post('http://localhost:4200/assets/img', formData).subscribe(
      (response) => {
        // Procesar la respuesta del servidor si es necesario
        console.log('Archivo subido exitosamente');
      },
      (error) => {
        // Manejar el error en caso de que ocurra
        console.error('Error al subir el archivo', error);
      }
    );
    }
    else {
      console.error('No se seleccionó ningún archivo');
    
    }
  } 

  
  
}

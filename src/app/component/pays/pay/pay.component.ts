import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { User } from 'src/app/model/user';
import { OrderService } from 'src/app/service/order.service';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { Product } from 'src/app/model/product';
import { Order_Detail } from 'src/app/model/order_detail';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  order:Order= new Order();
  order_detail:Order_Detail= new Order_Detail();
  id_order:number;
  lista:Product[] = [];
  user:User = new User();
  form: FormGroup = new FormGroup({});
  errorMessage: string;
  fechastring:string;

   constructor(
    private orderService: OrderService,
    private order_detailService: OrderDetailService,
    private router: Router,
    private productService: ProductService,
    private dialog: MatDialog
   ) {
    const storedProducts = localStorage.getItem('productocarrito2');
    if (storedProducts) {
      this.lista = JSON.parse(storedProducts);
    }
   }
   ngOnInit() {
    //traer usuario
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    //traer monto
    const storedMonto = localStorage.getItem('montofinal');
    if (storedMonto) {
      this.order.total_amount = JSON.parse(storedMonto);
    }
    //fecha
    this.order.date = new Date();
    this.form = new FormGroup({
      usuario: new FormControl({value:this.user.name+" "+this.user.last_name,disabled:true}),
      date: new FormControl({value:this.order.date,disabled:true},[Validators.required]),
      shipping_address: new FormControl('', [Validators.required]),
      total_amount: new FormControl({value:this.order.total_amount,disabled:true}, [Validators.required]),
    }
    );
   }
   getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }
  pagar(): void {
    this.order.shipping_address=this.form.value['shipping_address'];
    this.order.state = "ENTREGADO";
    this.order.user.id= this.user.id;
    const dialogRef = this.dialog.open(PaymentMethodComponent);

    if (this.form.valid) {
      this.orderService.insert(this.order).subscribe((data) =>
        this.router.navigate(['orders']).finally(()=>{
          localStorage.setItem('order_id', JSON.stringify(data.id));
          localStorage.removeItem('montofinal');
          localStorage.removeItem('productocarrito');
          localStorage.removeItem('productocarrito2');
          this.agregarorden_detail();
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {

            } else {

            }
          });
          this.router.navigate(['/home-buyer']);
        })
      );
  } else {
    this.errorMessage = 'Complete correctamente los campos.';
  }
  }
   volver() {
    localStorage.removeItem('montofinal');
    this.router.navigate(['/shoping-cart']).finally(()=>window.location.reload());
  }
  agregarorden_detail() {
    // Jalar id order
    const storedId = localStorage.getItem('order_id');
    if (storedId) {
      this.id_order = JSON.parse(storedId)
    }
    localStorage.removeItem('order_id');

    // Arreglo de productos repetidos
    const insertedProducts: number[] = [];
    console.log(this.lista);

    for (const producto of this.lista) {

      let isProductRegistered = false;
      for (const insertedProduct of insertedProducts) {
       if (insertedProduct === producto.id) {
          isProductRegistered = true;
          break;
        }
      }
       if (isProductRegistered) {
         console.log(`El producto ${producto.id} ya ha sido registrado.`);
          continue; // Saltar a la siguiente iteración del bucle
        }
      const order_detail = {
        id: 0,
        id_order: this.id_order,
        id_product: producto.id,
        quantity: this.calculateTotalQuantity(producto.id),
        amount: producto.price
      };
      this.order_detailService.insert(order_detail).subscribe(
        (data) => {
          // El producto se ha registrado correctamente
          console.log(`Producto registrado: ${producto.id}`);

        },
        (error) => {
          console.error(`Error al registrar el producto ${producto.id}:`, error);
        }
      );
      insertedProducts.push(producto.id);
    }

    console.log(insertedProducts);
  }
  calculateTotalQuantity(productId: number): number {
    let totalQuantity = 0;

    for (const product of this.lista) {
      if (product.id === productId) {
        totalQuantity += product.quantity;

      }
    }

    return totalQuantity;
  }

}


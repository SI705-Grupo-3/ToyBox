import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Order } from 'src/app/model/order';
import { User } from 'src/app/model/user';
import { OrderService } from 'src/app/service/order.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  order:Order= new Order();
  user:User = new User();
  form: FormGroup = new FormGroup({});
  errorMessage: string;
  fechastring:string;

   constructor(
    private orderService: OrderService,
    private router: Router,
   ) {}
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


  ///fecha 
    this.order.date = new Date();
    this.form = new FormGroup({
      usuario: new FormControl({value:this.user.name+" "+this.user.last_name,disabled:true}),
      date: new FormControl({value:this.order.date,disabled:true},[Validators.required]),
      shipping_address: new FormControl('', [Validators.required]),
      total_amount: new FormControl({value:this.order.total_amount,disabled:true}, [Validators.required]),    
    }
    );
    console.log(this.order);
    
   }
   getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  pagar(): void {
    this.order.shipping_address=this.form.value['shipping_address'];
    this.order.state = "ENTREGADO";
    this.order.User_id= this.user.id;
    console.log(this.order);
    if (this.form.valid) {
      this.orderService.insert(this.order).subscribe((data) =>
        this.router.navigate(['orders']).finally(()=>{
          localStorage.removeItem('montofinal'); 
          localStorage.removeItem('productocarrito');
          localStorage.removeItem('productocarrito2');
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
}

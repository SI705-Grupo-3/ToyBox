import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { Order_Detail } from 'src/app/model/order_detail';
import { Product } from 'src/app/model/product';
import { Ventas } from 'src/app/model/ventas';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductRegisterService } from 'src/app/service/product-register.service';
import { ProductService } from 'src/app/service/product.service';
import {Product_register} from 'src/app/model/product_register';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.css']
})
export class MySalesComponent {
  dataSource = new MatTableDataSource<Ventas>();
  ventas:Ventas[]=[];
  Producto: Product[] = [];
  order:Order[] = [];
  order_details:Order_Detail[] = [];
  user:User = new User();
  displayedColumns = ['id_order', 'name_product', 'quantity', 'total_amount', 'date', 'state'];
  constructor(
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService,
    private orderDetailService: OrderDetailService,
    private productRegisterService: ProductRegisterService){
  }
  ngOnInit(): void {
    //trae el usuario
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    console.log(this.user);
    // Llamar a los servicios correspondientes para obtener los datos necesarios
    this.orderDetailService.list().subscribe((orderDetails: Order_Detail[]) => {
      orderDetails.forEach(orderDetail => {
        this.orderService.listId(orderDetail.order.id).subscribe((order: Order) => {
          this.productRegisterService.list().subscribe((productRegisters: Product_register[]) => {
            const filteredProducts = productRegisters.filter(register => register.user.id === this.user.id && register.product.id === orderDetail.product.id);
            if (filteredProducts.length > 0) {
              const productRegister = filteredProducts[0];
              this.productService.listId(productRegister.product.id).subscribe((product1: Product) => {// obtener producto
              const venta: Ventas = {
                id_order: order.id,
                name_product: product1.name,
                quantity: orderDetail.quantity,
                total_amount: product1.price*orderDetail.quantity,
                date: order.date,
                state: order.state,
              };
              this.ventas.push(venta);
              this.dataSource.data = this.ventas;
             });
            }
          });
        });
      });
    });
  };



}



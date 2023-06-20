import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.css']
})
export class MyPurchasesComponent {

  Producto: Product[] = [];
  displayedColumns = ['id', 'date', 'shipping_address', 'state', 'total_amount', 'User_id'];
  dataSource = new MatTableDataSource<Order>();
  constructor(private orderService: OrderService, private router: Router){
  }
  ngOnInit(): void {
    this.orderService.list().subscribe(data =>
      this.dataSource.data=data);
  }
}

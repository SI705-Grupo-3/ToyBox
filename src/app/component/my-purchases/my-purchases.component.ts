import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.css']
})
export class MyPurchasesComponent {
  dataSource = new MatTableDataSource<Product>();
  Producto: Product[] = [];
  displayedColumns = ['id', 'name', 'description', 'price', 'stock', 'category_id'];
}

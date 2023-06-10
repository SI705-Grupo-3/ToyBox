import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.css']
})
export class MySalesComponent {
  dataSource = new MatTableDataSource<Product>();
  Producto: Product[] = [];
  displayedColumns = ['id', 'name', 'description', 'price', 'stock', 'category_id'];
}

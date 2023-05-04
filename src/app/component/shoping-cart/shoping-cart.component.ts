import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent {
  lista: Product[] = [];
  displayedColumns=['name','price'];
  dataSource= new MatTableDataSource<Product>();
  constructor(private productService: ProductService, private router: Router){
  }
  ngOnInit(): void {
    this.productService.list().subscribe(data =>
      this.dataSource.data=data);
      console.log(this.dataSource);  
  }
  getTotalCost() {
    return this.dataSource.data.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

}

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
      const productocarrito = localStorage.getItem('productocarrito');
      if (productocarrito) {
        this.lista = JSON.parse(productocarrito);
      }
      this.dataSource.data = this.lista;
      
      localStorage.setItem('productocarrito2', JSON.stringify(this.lista));



  }
  getTotalCost() {
    return this.dataSource.data.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }





}
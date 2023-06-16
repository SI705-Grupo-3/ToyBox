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
  monto: number=0;
  lista: Product[] = [];
  displayedColumns=['name','price','quitar'];
  dataSource= new MatTableDataSource<Product>();
  constructor(private productService: ProductService, private router: Router){
  }
  ngOnInit(): void {
    
      const productocarrito = localStorage.getItem('productocarrito');
      if (productocarrito) {
        this.lista = JSON.parse(productocarrito).map((product:Product) => {
          product.price = parseFloat(product.price.toString());
          return product;
        });
      }
      this.dataSource.data = this.lista;  
      localStorage.setItem('productocarrito2', JSON.stringify(this.lista));
  }
  getTotalCost() {
    var a:number=0;
    a = this.dataSource.data.reduce((total,product)=>total+product.price,0);
    return a    
  }
  pagar(): void {    
    this.monto=this.getTotalCost();
    localStorage.setItem('montofinal',JSON.stringify(this.monto));
  }
  eliminar(product:Product) {
    const index = this.lista.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.lista.splice(index, 1);
      this.dataSource.data = this.lista;
    localStorage.setItem('productocarrito', JSON.stringify(this.lista));
  }
  }





}


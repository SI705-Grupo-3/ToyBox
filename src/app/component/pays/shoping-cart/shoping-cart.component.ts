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
  displayedColumns=['name','price','amount','quitar'];
  dataSource= new MatTableDataSource<Product>();
  constructor(private productService: ProductService, private router: Router){
  }
  ngOnInit(): void {
    
      const productocarrito = localStorage.getItem('productocarrito');
      if (productocarrito) {
        const listatemporal: Product[] = JSON.parse(productocarrito).map((product:Product) => {
          product.price = parseFloat(product.price.toString());
          return product;
        });
        this.lista = listatemporal;
      }
      
      this.dataSource.data = this.getProductsfilterRepeat();  
      localStorage.setItem('productocarrito2', JSON.stringify(this.lista));
  }
  getProductsfilterRepeat(): Product[] {
    const uniqueProducts: Product[] = [];
  const addedProductIds: number[] = [];

  for (const product of this.lista) {
    if (!addedProductIds.includes(product.id)) {
      const totalQuantity = this.calculateTotalQuantity(product.id);
      const uniqueProduct = { ...product, quantity: totalQuantity };
      uniqueProducts.push(uniqueProduct);
      addedProductIds.push(product.id);
    }
  }
  return uniqueProducts;
  }
  getTotalCost() {
    var a:number=0;
    a = this.lista.reduce((total,product)=>total+product.price,0);
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
    localStorage.setItem('productocarrito2', JSON.stringify(this.lista));
  }
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


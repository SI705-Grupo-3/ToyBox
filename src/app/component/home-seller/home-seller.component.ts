import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css']
})
export class HomeSellerComponent implements OnInit{
  lista: Product[] = [];
  constructor(
    private productService: ProductService,
    private router: Router,
    public route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.productService.list().subscribe(data =>
      this.lista = data);
  }
}

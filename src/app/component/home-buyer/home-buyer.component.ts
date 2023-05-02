import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css']
})
export class HomeBuyerComponent implements OnInit{

  lista: Category[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.categoryService.list().subscribe(data =>
      this.lista = data);
  }
}

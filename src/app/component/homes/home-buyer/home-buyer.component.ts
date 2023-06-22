import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css']
})
export class HomeBuyerComponent implements OnInit{

  public data:User;
  lista: Category[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public route:ActivatedRoute,
    private userService: UserService
  ){}
  ngOnInit(): void {
    this.categoryService.list().subscribe(data =>
      this.lista = data);   
}
}

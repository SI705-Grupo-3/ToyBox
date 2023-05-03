import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-listar',
  templateUrl: './category-listar.component.html',
  styleUrls: ['./category-listar.component.css']
})
export class CategoryListarComponent implements OnInit{
  lista: Category[] = [];
  displayedColumns = ['id','name'];
  dataSource = new MatTableDataSource<Category>();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  constructor(private categoryService: CategoryService, private router: Router){
  }
  ngOnInit(): void {
    this.categoryService.list().subscribe(data =>
      this.dataSource.data=data);
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  delete(id: string){
    this.categoryService.delete(id).subscribe(()=>this.router.navigate(['categories']).then(()=>{
        window.location.reload();
      }));
  }
}

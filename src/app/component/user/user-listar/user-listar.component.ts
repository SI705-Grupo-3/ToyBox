import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-listar',
  templateUrl: './user-listar.component.html',
  styleUrls: ['./user-listar.component.css']
})
export class UserListarComponent {
  lista: User[] = [];
  displayedColumns = ['id', 'type', 'name', 'last_name', 'email', 'phone', 'username', 'password'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  constructor(private userService: UserService, private router: Router){
  }
  ngOnInit(): void {
    this.userService.list().subscribe(data =>
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
    this.userService.delete(id).subscribe(()=>this.router.navigate(['users']).then(()=>{
        window.location.reload();
    }));
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = `${baseUrl}/category`;//alt+96
  token:string;

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<Category[]>(this.url+"/list",{headers}); //http://localhost:5000/categories
  }

  insert(category : Category){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
     return this.http.post(this.url+"/register", category,{headers});
  }
  listId(id:number){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<Category>(this.url+"/list/"+id,{headers});
  }
  update(cat: Category){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.put(this.url+"/update"+ cat.id, cat,{headers});
  }
  delete(id: string) {
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.delete(this.url+"/delete/"+id,{headers});
  }
}

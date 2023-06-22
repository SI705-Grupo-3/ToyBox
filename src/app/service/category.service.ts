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

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<Category[]>(this.url+"/list"); //http://localhost:5000/categories
  }

  insert(category : Category){
     return this.http.post(this.url+"/register", category);
  }
  listId(id:number){
    return this.http.get<Category>(`${this.url}/${id}`);
  }
  update(cat: Category){
    return this.http.put(this.url+"/update"+ cat.id, cat);
  }
  delete(id: string) {
    return this.http.delete(this.url+"/delete/"+id);
  }
}

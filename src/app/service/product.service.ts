import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${baseUrl}/product`;//alt+96
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
    return this.http.get<Product[]>(this.url+"/list",{headers}); //http://localhost:5000/products
  }

  insert(product : Product){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
     return this.http.post<Product>(this.url+"/register",product,{headers}); 
  }
  listId(id:number){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<Product>(this.url+"/list/"+id,{headers});
  }
  update(prod: Product){
    return this.http.put(this.url+"/"+ prod.id, prod);
  }
  delete(id: number) {
    return this.http.delete(this.url+"/"+id);
 }
}

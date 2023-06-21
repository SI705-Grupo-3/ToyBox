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
  private url = `${baseUrl}/products`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<Product[]>(this.url); //http://localhost:5000/products
  }

  insert(product : Product){
     return this.http.post<Product>(this.url, product);
  }
  listId(id:number){
    return this.http.get<Product>(`${this.url}/${id}`);
  }
  update(prod: Product){
    return this.http.put(this.url+"/"+ prod.id, prod);
  }
  delete(id: number) {
    return this.http.delete(this.url+"/"+id);
 }
}

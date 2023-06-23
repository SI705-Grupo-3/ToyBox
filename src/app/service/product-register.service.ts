import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product_register } from '../model/product_register';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService {
  private url = `${baseUrl}/product-registration`;//alt+96
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
    return this.http.get<Product_register[]>(this.url+"/list",{headers});
  }
  insert(product_register : Product_register){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
     return this.http.post(this.url+"/register", product_register,{headers});
  }
  listId(id_user: number, id_product: number){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<Product_register>(`${this.url}?user_id=${id_user}&product_id=${id_product}`,{headers});
  }
  update(product_register: Product_register){
    return this.http.put<Product_register>(this.url+"/update", product_register);
  }
  delete(id: number) {
    return this.http.delete<Product_register>(this.url+"/delete"+id);
  }
}

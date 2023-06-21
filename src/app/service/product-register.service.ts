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
  private url = `${baseUrl}/product_registrations`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<Product_register[]>(this.url); //http://localhost:5000/product_registers
  }
  insert(product_register : Product_register){
     return this.http.post(this.url, product_register);
  }
  listId(id_user: number, id_product: number){
    return this.http.get<Product_register>(`${this.url}?user_id=${id_user}&product_id=${id_product}`); 
  }
  update(product_register: Product_register){
    return this.http.put<Product_register>(this.url+"/"+ product_register.id_user+"/"+ product_register.id_product, product_register);
  }
  delete(id_user: number, id_product: number) {
    return this.http.delete<Product_register>(this.url+"/"+id_user+"/"+id_product); 
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order_Detail } from '../model/order_detail';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private url = `${baseUrl}/order-detail`;//alt+96
  token:string ;

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<Order_Detail[]>(this.url+"/list",{headers}); 
  }
  insert(order_detail : Order_Detail){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
     return this.http.post(this.url+"/register", order_detail,{headers}); 
  }
  listId(id_order: number){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<Order_Detail>(this.url+"/list/"+id_order,{headers}); 
  }
  update(order_detail: Order_Detail){
    return this.http.put<Order_Detail>(this.url+"/"+ order_detail.id_order+"/"+ order_detail.id_product, order_detail);
  }

}

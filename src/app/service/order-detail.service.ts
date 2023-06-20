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
  private url = `${baseUrl}/order_details`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<Order_Detail[]>(this.url); //http://localhost:5000/order_details
  }
  insert(order_detail : Order_Detail){
     return this.http.post(this.url, order_detail);
  }
  listId(id_order: number, id_product: number){
    return this.http.get<Order_Detail>(`${this.url}/${id_order}/${id_product}`); 
  }
  update(order_detail: Order_Detail){
    return this.http.put<Order_Detail>(this.url+"/"+ order_detail.id_order+"/"+ order_detail.id_product, order_detail);
  }
  delete(id_order: number, id_product: number) {
    return this.http.delete<Order_Detail>(this.url+"/"+id_order+"/"+id_product); 
  }
}

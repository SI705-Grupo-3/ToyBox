import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = `${baseUrl}/orders`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<Order[]>(this.url); //http://localhost:5000/orders
  }

  insert(order : Order){
     return this.http.post(this.url, order);
  }
  listId(id:number){
    return this.http.get<Order>(`${this.url}/${id}`);
  }
  update(ord: Order){
    return this.http.put(this.url+"/"+ ord.id, ord);
  }
  delete(id: string) {
    return this.http.delete(this.url+"/"+id);
 
  }
}

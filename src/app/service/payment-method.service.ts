import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentMethod } from '../model/payment_method';

const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private url = `${baseUrl}/payment-method`;//alt+96
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
    return this.http.get<PaymentMethod[]>(this.url+"/list",{headers});
  }
  insert(payment_method : PaymentMethod){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
     return this.http.post(this.url+"/register", payment_method,{headers});
  }
  listId(id: number){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<PaymentMethod>(this.url+"/list/"+id,{headers});
  }
  update(payment_method: PaymentMethod){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.put<PaymentMethod>(this.url+"/update", payment_method, {headers});
  }
  delete(id: number) {
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.delete<PaymentMethod>(this.url+"/delete/"+id, {headers});
  }
}

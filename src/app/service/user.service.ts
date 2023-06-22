import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Subject } from 'rxjs';
import { Token } from '@angular/compiler';
import { hashSync } from 'bcryptjs';



const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${baseUrl}/user`;//alt+96
  private authenticate=`${baseUrl}/authenticate`;
  //-------------------------

  //----------------------------
  currentUser: any;//variable para almacenar usuario 
  idfalso:number;//
  userChanged: Subject<any> = new Subject<any>();
  token:string;

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<User[]>(this.url+"/list");
    this.currentUser //http://localhost:5000/api/users
  }
  register(user : User){
     return this.http.post(this.url+"/register", user);
  }
  listId(id:number){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<User>(this.url+"/list/"+id, {headers});
  }
  update(user: User){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.put(this.url+"/update", user,{headers});
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
  login(username: string, password: string){
    return this.http.post<Token>(this.authenticate,{username,password});
  }
  getUser(username: string){
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      this.token = JSON.parse(storedUser);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<User>(this.url+"/get?username="+username,{ headers });
  }


 
}

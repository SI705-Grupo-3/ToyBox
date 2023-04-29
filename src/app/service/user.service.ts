import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${baseUrl}/users`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<User[]>(this.url); //http://localhost:5000/users
  }

  insert(user : User){
     return this.http.post(this.url, user);
  }
  listId(id:number){
    return this.http.get<User>(`${this.url}/${id}`);
  }
  update(user: User){
    return this.http.put(this.url+"/"+ user.id, user);
  }
  delete(id: string) {
    return this.http.delete(this.url+"/"+id);
 }
}

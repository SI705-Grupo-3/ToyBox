import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Subject } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${baseUrl}/users`;//alt+96

  currentUser: any;//variable para almacenar usuario 
  userChanged: Subject<any> = new Subject<any>();
  setCurrentUser(user: any) {
    this.currentUser = user;
    this.userChanged.next(user);
    console.log(this.currentUser);
  }//metodo obtener usuario

  constructor(private http:HttpClient) { } //inyectar httpClient
  list():Observable<any>{
    return this.http.get<User[]>(this.url); //http://localhost:5000/users
  }

  register(user : User){
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
  login(username: string, password: string): Observable<boolean>{
    return this.http.get<User[]>(this.url).pipe(
      map(users => users.find(user => user.username === username && user.password === password) != null)
    );
  }
  getType(username: string, password: string): Observable<string> {
    return this.http.get<User[]>(this.url).pipe(
      map(users => {
        const user = users.find(user => user.username === username && user.password === password);
        return user ? user.type : '';
      })
    );
  }

  
  getUserByUsernameAndRegister(username: string, register: string): Observable<User> {
    const params = new HttpParams().set('username', username).set('register', register);
    return this.http.get<User>(`${this.url}/users`, { params });
  }
  

  
}

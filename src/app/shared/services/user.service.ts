import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/Token';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http : HttpClient) { }

  register (username : string, password : string, email : string, name : string, address : string,
            phone : string) : Observable<Token> {
    return this.http.post<Token>(`register`, {
      username,
      password,
      email,
      name,
      address,
      phone
    })
  }

  login (username : string, password : string) : Observable<Token> {
    return this.http.post<Token>(`login`, {
      username,
      password,
    })
  }

  createToken (username : string) : Observable<Token> {
    return this.http.post<Token>(`api/create-token`, {
      username
    });
  }

  getUsers () : Observable<User[]> {
    return this.http.get<User[]>(`api/users`);
  }

  getUser (id : string) : Observable<User> {
    return this.http.get<User>(`api/users/${id}`);
  }

  getUserByToken () : Observable<User> {
    return this.http.get<User>(`user`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    });
  }

  updateUser (id : string, username : string, password : string, email : string, name : string, address : string, phone : string) : Observable<User> {
    return this.http.put<User>(`api/users/${id}`, {
      username,
      password,
      email,
      name,
      address,
      phone
    })
  }

  deleteUser (id : string) : Observable<any> {
    return this.http.delete(`api/users/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:8080/';
  constructor(private http: Http) { }

  get(url: string, page: number = 1) {
    let headers = new Headers();
    headers.append('Authorization', this.getToken());
    headers.append('Content-type', 'application/json');
    
    let params = { page : page};
    let options = { headers: headers, params: params };
      
      return this.http.get(this.baseUrl + url, options).map((res) => res.json());
    
  }

  post(url: string, data) {
    let headers = new Headers();
    headers.append('Authorization', this.getToken());
    headers.append('Content-type', 'application/json');
    return this.http.post(this.baseUrl + url, data, { headers: headers }).map((res) => res.json());
  }

  registerUser(user) {
    return this.post('users/register', user);
  }

  authenticateUser(credentials) {
    return this.post('users/authenticate', credentials);
  }

  getUsername(){
    return localStorage.getItem('username');
  }
 
  setUsername(username){
    localStorage.setItem('username', username);
  }

  getId(){
    return localStorage.getItem('user_id');
  }

  setId(id){
    localStorage.setItem('user_id', id);
  }

  getToken(){
    return localStorage.getItem('authToken');
  }

  setToken(token) {
    localStorage.setItem('authToken', token);
  }

  storeUserData(token, credentials) {
    this.setToken(token);
    this.setId(credentials._id);
    this.setUsername(credentials.username);
  }

  loggedIn() {
    return tokenNotExpired('authToken');
  }

  logout() {
    localStorage.clear();
  }
}
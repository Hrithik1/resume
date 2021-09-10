import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  uri = 'http://127.0.0.1:8000';
  // resumeData : any;
  constructor(private http: HttpClient) {}

  login(body: any) {
    return this.http.post(`${this.uri}/users/login`, body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  register(body: any) {
    return this.http.post(`${this.uri}/users/register`, body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  submitResume(body: any) {
    return this.http.post(`${this.uri}/post/submit`, body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  getProfile() {
    return this.http.get<any>(`${this.uri}/users/profile`);
  }

  getResume(username: any) {
    return this.http.get(`${this.uri}/post/resume/${username}`);
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
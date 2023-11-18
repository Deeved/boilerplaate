import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import moment from 'moment';
import { tap } from 'rxjs';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://api.realworld.io/api'
  private http = inject(HttpClient);
  
  login(user: User) {
    return this.http.post<{user: User}>(`${this.baseUrl}/users/login`, {user: user}).pipe(tap(this.setSession));
  }

  registerUser(user: User ) {
    return this.http.post<User>(`${this.baseUrl}/users`, {user})
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  private setSession(resp: {user: User}) {
    console.log('setSession', resp);

    if(!resp.user.token) {
      throw new Error('erro ao obter token!')
    } 
    localStorage.setItem('id_token', resp.user.token);
  }
}

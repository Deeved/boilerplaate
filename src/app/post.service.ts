import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  constructor() {}

  list() {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
}

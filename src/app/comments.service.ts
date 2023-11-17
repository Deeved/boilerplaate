import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Comment {
  id: number;
  body: string;
  postId: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/';

  constructor() {}

  list() {
    return this.http.get<Comment[]>(`${this.baseUrl}/comment`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/pages/blog/blog.component';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'assets/posts/posts.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Post } from "../interface/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "http://localhost:8000/posts";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPostById(id: string): Observable<Post | undefined> {
    return this.http.get<Post[]>(this.url).pipe(
      map(posts => posts.find(post => post.id === id))
    );
  }
}

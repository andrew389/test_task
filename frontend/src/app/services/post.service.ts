import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from "../interface/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
     {
       id: '1',
       title: 'title1',
       summary: 'summary1',
       tags: ['tag1', 'tag2'],
       content: 'content',
     },
     {
       id: '2',
       title: 'title2',
       summary: 'summary2',
       tags: ['tag1', 'tag2'],
       content: 'content',
     },
     {
       id: '3',
       title: 'title3',
       summary: 'summary3',
       tags: ['tag1', 'tag2'],
       content: 'content',
     },
     {
       id: '4',
       title: 'title4',
       summary: 'summary4',
       tags: ['tag1', 'tag2'],
       content: 'content',
     },
     {
       id: '5',
       title: 'title5',
       summary: 'summary5',
       tags: ['tag1', 'tag3'],
       content: 'content',
     },
  ];
  getAllPosts(): Post[]{
    return this.posts;
  }

  getPostById(id: string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}

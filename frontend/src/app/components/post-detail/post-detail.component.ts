import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgForOf, NgIf } from "@angular/common";
import { switchMap } from 'rxjs/operators';
import {HttpClientModule} from "@angular/common/http";
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatGridListModule,
    RouterLink,
    NgIf,
    NgForOf,
    MarkdownModule
  ],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  post: Post | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        const postId = params['id'];
        return this.postService.getPostById(postId);
      })
    ).subscribe(post => {
      this.post = post;
    });
  }
}

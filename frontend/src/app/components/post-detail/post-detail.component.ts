import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import { PostService } from '../../services/post.service';
import { Post } from '../../interface/post';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {NgForOf, NgIf} from "@angular/common";
@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatGridListModule,
    RouterLink,
    NgIf,
    NgForOf

  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})

export class PostDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);
  posts: Post | undefined;

  constructor() {
    const postId = String(this.route.snapshot.params['id']);
    this.posts = this.postService.getPostById(postId);
  }
}

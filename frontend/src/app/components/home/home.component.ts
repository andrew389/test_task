import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PostListComponent } from "../post-list/post-list.component";
import { PostService } from "../../services/post.service";
import { Post } from "../../interface/post";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PostListComponent,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: Post[] = [];
  postService: PostService = inject(PostService);
  filteredPosts: Post[] = [];
  selectedTags: string[] = [];
  selectedDropdownTag: string = '';

  constructor() {
    this.posts = this.postService.getAllPosts();
    this.filteredPosts = this.posts;
  }

  get allTags(): string[] {
    return Array.from(new Set(this.posts.flatMap(post => post.tags)));
  }

  applyFilters() {
    if (this.selectedTags.length === 0 && !this.selectedDropdownTag) {
      this.filteredPosts = this.posts;
    } else {
      const selectedDropdownTag = this.selectedDropdownTag ? [this.selectedDropdownTag] : [];
      const allSelectedTags = [...selectedDropdownTag, ...this.selectedTags];
      this.filteredPosts = this.posts.filter(post =>
        allSelectedTags.every(tag => post.tags.includes(tag))
      );
    }
  }

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(selectedTag => selectedTag !== tag);
    } else {
      this.selectedTags.push(tag);
    }
    this.applyFilters();
  }

  filterResults(tag: string) {
    this.selectedDropdownTag = tag;
    this.applyFilters();
  }
}

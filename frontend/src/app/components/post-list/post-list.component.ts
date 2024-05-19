import {Component, Input} from '@angular/core';
import {Post} from "../../interface/post";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    CommonModule,
    NgForOf,
    NgIf,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatGridListModule
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() post!: Post;
}

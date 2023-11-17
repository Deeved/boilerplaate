import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostService } from '../../post.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {}

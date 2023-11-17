import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostService } from '../../post.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClientModule, PostService],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  private postService = inject(PostService);

  posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.list().subscribe((data) => {
      console.log(data);

      this.posts = data;
    });
  }
}

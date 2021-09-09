import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  active: boolean = false;
  postId: string = '';
  posts: Post[] = [];
  constructor(public ps: PostsService) {}

  ngOnInit(): void {
    this.ps.getPosts();
    this.ps.getUpdatedPosts().subscribe((results) => {
      this.posts = results;
    });
  }

  toggleContent(postId: string) {
    if (this.postId == postId) {
      this.active = false;
      this.postId = '';
    } else {
      this.postId = postId;
      this.active = true;
    }
  }

  onDelete(e: MouseEvent, postId: string) {
    e.stopPropagation();
    this.ps.deletePost(postId);
  }
}

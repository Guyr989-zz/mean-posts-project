import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './components/posts/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];
  updatedPosts = new Subject<Post[]>();
  constructor(private http: HttpClient) {}

  getPosts() {
    return [...this.posts];
  }

  addPost(post: Post) {
    console.log(post);
  }

  deletePost(postId: string) {
    console.log(postId + ' deleted');
  }
}

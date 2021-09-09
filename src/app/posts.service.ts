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
    this.http
      .get<{ message: string; posts: Post[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe((postsFetched) => {
        this.posts = postsFetched.posts;
        console.log(postsFetched);
        this.updatedPosts.next([...this.posts]);
      });
  }

  getUpdatedPosts() {
    return this.updatedPosts.asObservable();
  }

  addPost(post: Post) {
    this.http
      .post<{ message: string; post: Post }>(
        'http://localhost:3000/api/posts',
        post
      )
      .subscribe((results) => {
        console.log(results);
        post.id = results.post.id;
        this.posts.push(post);
        this.updatedPosts.next([...this.posts]);
      });
  }

  updatePost(post: Post) {
    this.http
      .put<{ message: string }>(
        'http://localhost:3000/api/posts/' + post.id,
        post
      )
      .subscribe((response) => {
        console.log(response.message);
      });
  }

  getPost(postId: string) {
    return { ...this.posts.find((post) => post.id === postId) };
  }

  deletePost(postId: string) {
    this.http
      .delete<{ message: string }>('http://localhost:3000/api/posts/' + postId)
      .subscribe((results) => {
        this.posts = this.posts.filter((post) => {
          return post.id !== postId;
        });
        console.log(results.message);

        this.updatedPosts.next([...this.posts]);
      });
  }
}

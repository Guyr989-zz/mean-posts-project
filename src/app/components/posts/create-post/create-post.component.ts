import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  post: Post;
  mode = 'create';

  postId: string;
  constructor(public ps: PostsService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.ps.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onPostSave(form: NgForm) {
    const post = {
      id: this.postId,
      title: form.value.title,
      content: form.value.content,
    };

    if (!form.valid) {
      return;
    }
    if (this.mode == 'create') {
      this.ps.addPost(post);
    } else {
      this.ps.updatePost(post);
      console.log(post);
    }
    form.reset();
  }
}

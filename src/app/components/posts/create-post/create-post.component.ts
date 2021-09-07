import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  constructor(public ps: PostsService) {}

  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    if (form.valid) {
      const post = {
        id: '',
        title: form.value.title,
        content: form.value.content,
      };
      this.ps.addPost(post);
    }
  }
}

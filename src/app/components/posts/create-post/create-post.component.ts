import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    const post = {
      id: '',
      title: form.value.title,
      content: form.value.content,
    };
    console.log(post);
  }
}

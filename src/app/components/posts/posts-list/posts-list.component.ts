import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  active: boolean = false;
  postId: string = '';
  posts: Post[] = [
    {
      id: '1',
      title: 'hello',
      content:
        'hello content hello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello content',
    },
    {
      id: '2',
      title: 'hello2',
      content:
        'hello content hello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello content',
    },
    {
      id: '3',
      title: 'hello3',
      content:
        'hello content hello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello contenthello content',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleContent(postId: string) {
    if (this.postId == postId) {
      this.active = false;
      this.postId = '';
    } else {
      this.postId = postId;
      this.active = true;
    }
  }
  onEdit(e: MouseEvent, postId: string) {
    e.stopPropagation();
    console.log(postId);
  }
  onDelete(e: MouseEvent, postId: string) {
    e.stopPropagation();
    console.log(postId);
  }
}

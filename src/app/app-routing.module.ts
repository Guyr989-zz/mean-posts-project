import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { CreatePostComponent } from './components/posts/create-post/create-post.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'create', component: CreatePostComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

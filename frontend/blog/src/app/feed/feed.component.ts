import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost!: Observable<Post[]>;
  post!:Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(){
    this.listPost = this.postService.getPosts();
  }

  cadastrarMensagem(){
    this.postService.postMensagem(this.post).subscribe()
    this.post = new Post();
    this.findPosts();
  }
}

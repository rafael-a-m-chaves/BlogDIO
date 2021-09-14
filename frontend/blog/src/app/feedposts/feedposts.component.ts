import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feedposts',
  templateUrl: './feedposts.component.html',
  styleUrls: ['./feedposts.component.css']
})
export class FeedpostsComponent implements OnInit {

  listPost!: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(){
    this.listPost = this.postService.getPosts();
  }
}

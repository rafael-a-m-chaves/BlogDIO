import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post = new Post();
  submitted = false;


  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  
  newPost():void{
    this.submitted = false;
    this.post = new Post();
  }


  cadastrarMensagem(){
    this.postService.postMensagem(this.post).subscribe(data => console.log(data), error => console.log(error));
    this.post = new Post();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.cadastrarMensagem();
  }

  gotoList(){
    location.assign('/feed')
  }
}

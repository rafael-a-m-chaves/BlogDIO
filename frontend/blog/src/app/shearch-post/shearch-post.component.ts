import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-shearch-post',
  templateUrl: './shearch-post.component.html',
  styleUrls: ['./shearch-post.component.css']
})
export class ShearchPostComponent implements OnInit {

  mensagem!:any;
  listPost!: Observable<Post[]>;

  constructor(private route: ActivatedRoute,private router: Router, private postService: PostService) { }

  ngOnInit(): void {
  
    this.mensagem = this.route.snapshot.params['mensagem']

    this.postService.postMensagem(this.mensagem).subscribe(data => {
        console.log(data)
        this.listPost ? data: {};
      }, error => console.log(error))
  }

  list(){
    this.router.navigate(['/feed'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/Post';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  submitted = false;
  texto:Post = new Post();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newPesquisa():void{
    this.router.navigate(['/shearch',this.texto])
  }

  pesquisar(){
    this.router.navigate(['/shearch',this.texto])
  }
}

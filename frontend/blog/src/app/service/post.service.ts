import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { 

  }

  getPosts():Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }

  postMensagem(post: Post): Observable<object>{
    return this.http.post(`${this.baseUrl}`, post) 
  }

  pesquisarPost(mensagem: any): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${mensagem}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})




export class TodoService {

  private url: string;
  private username: string;
  constructor(private http: HttpClient)
  {
    this.url = 'http://localhost:8080/services/todo';
    this.username = 'TEST USER';
  }



  public findAll() : Observable<Todo[]>
  {
    return this.http.get<Todo[]>(this.url);
  }

  public getTodo(id: number)
  {
    const custurl = `${this.url}/${id}`;
    return this.http.get<Todo>(custurl);
  }

  public addTodo(t: Todo) {

    t.id = -1;
    t.user = this.username;
    return this.http.post<Todo>(this.url, t);
  }

  public updateTodo(t: Todo)
  {
    const custurl = `${this.url}/${t.id}`;
    return this.http.put<Todo>(custurl, t);
  }


  public deleteTodo(id): Observable<any>
  {
    const custurl = `${this.url}/${id}`;

    return this.http.delete(custurl);


  }
}

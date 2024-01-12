import { Injectable } from '@angular/core';
import { Todo } from '../app/todo';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string = 'api/todos'

  constructor(
    private http: HttpClient
  ) {}

  getTodoList() {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap(todoList => console.log(todoList)), // Juste pour débug
      catchError(error => {
        console.log(error);
        return of([]);
      })
    )
  }

  getTodoById(todoId: number) {
    return this.http.get<Todo[]>(this.todosUrl+ "/" + todoId).pipe(
      tap(todoList => console.log(todoList)),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    )
  }

}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TODOS } from '../todolist/src/app/mock-todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const todos = TODOS
    return {todos}
    // Requête url : api/todos
  }
}

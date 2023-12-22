import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  
  styles: [],
})
export class AppComponent {
  todoList = TODOS;

  constructor() {
    console.table(this.todoList);
  }
  selectTodo(id: number) {
    return this.todoList[id];
  }
}
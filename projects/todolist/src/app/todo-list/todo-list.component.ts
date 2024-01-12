import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  template: `
    <h1>Liste des choses à faire :</h1>

    <a
      href="#"
      role="button"
      [class.secondary]="!completedFilter && !completedAll"
      (click)="onClickTodo()"
      >A faire</a
    >
    <a
      href="#"
      role="button"
      [class.secondary]="completedFilter && !completedAll"
      (click)="onClickTodoCompleted()"
      >Terminée</a
    >

    <a
      href="#"
      role="button"
      [class.secondary]="completedAll"
      (click)="onClickAll()"
      >Afficher tout</a
    >

    <ng-container *ngFor="let todo of todoList">
      <todo
        *ngIf="todo.isCompleted === completedFilter || completedAll"
        [value]="todo"
      />
    </ng-container>
  `,
  styles: [],
})
export class TodoListComponent {
  todoList: Todo[] = [];

  completedFilter: boolean = false;
  completedAll: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getTodoList()
      .subscribe((todos) => (this.todoList = todos));
    this.todoService.getTodoById(5).subscribe((todo) => console.log(todo));
  }

  onClickTodo(): void {
    this.completedAll = false;
    this.completedFilter = false;
  }

  onClickTodoCompleted(): void {
    this.completedAll = false;
    this.completedFilter = true;
  }

  onClickAll(): void {
    this.completedAll = true;
  }
}

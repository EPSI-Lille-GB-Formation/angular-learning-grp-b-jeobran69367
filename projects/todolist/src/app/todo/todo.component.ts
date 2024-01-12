import { Todo } from '../todo';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderHighlightDirective } from '../directives/border-highlight.directive';
import { TODOS } from '../mock-todo';  // Assurez-vous d'avoir le fichier mock-todo.ts

@Component({
  selector: 'todo',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective],
  template: `
    <article *ngIf="todo" border-highlight>
      <div class="grid">
        <label for="todo-{{ todo.id }}">
          <input
            type="checkbox"
            id="todo-{{ todo.id }}"
            name="todo-{{ todo.id }}"
            [checked]="todo.isCompleted"
            (click)="onCheck()"
          />
          {{ todo.title }}
        </label>
        <div class="action">
          <a href="#">Edit</a>
          <a href="#" (click)="onTodoDelete()">Delete</a>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .action {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    `,
  ],
})

export class TodoComponent {
  @Input('value')
  todo: Todo | undefined;

  onCheck() {
    if (this.todo) {
      this.todo.isCompleted = !this.todo?.isCompleted;
      console.table(this.todo);
    }
  }

  onTodoDelete() {
    if (this.todo) {
      TODOS.splice(TODOS.indexOf(this.todo), 1);
    }
  }
}

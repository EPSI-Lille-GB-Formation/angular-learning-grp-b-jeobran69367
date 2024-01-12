import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TODOS } from '../mock-todo';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `

  

    <h1> Liste des choses à faire :</h1>

    <ul>
      <ng-container *ngFor="Let todo of todoList">
        <li *ngIf="!todo.isCompleted">{{ todo.title}}</li>
      </ng-container>
    </ul>


  `,
  styleUrls: ['./todo-list.component.css'] // Correction de la propriété 'styleUrl' à 'styleUrls'
})

export class TodoListComponent {
  todoList = TODOS
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';  // Correction de l'import pour RouterOutlet
import { TODOS } from './mock-todo';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoListComponent],  // Correction de l'import pour RouterOutlet
  template: `
    <div>  
      <router-outlet></router-outlet>
    </div>
  `,
    styles: [],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

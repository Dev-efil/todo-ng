import { Component } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;
  
  // To save the list
  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert("Please Enter To-Do!")
    }
  }

  // Toggle function to mark completed list
  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  // Remove the list
  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}

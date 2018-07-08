import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = '';
  name = 'Josue';
  todos = [];

  createTodo() {
    // Pushes Text I Wrote Into the Todo Array
    this.todos.push(this.todoInput);
    // Clear out input field after its added to array
    this.todoInput = "";
  }

  editTodo(chore) {
    console.log('CHORE THAT WAS CLICKED: ' + chore);
    let index = this.todos.indexOf(chore);
    console.log('INDEX OF THAT CHORE: ' + index);

    this.todos[index] = prompt('please write new todo');
  }
  

}

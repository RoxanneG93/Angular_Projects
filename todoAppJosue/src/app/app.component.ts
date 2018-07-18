import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string;
  todos = [];

  createTodo(){
    let trimmedInput = this.todoInput.trim();
    if(trimmedInput !== ""){
      this.todos.push({
        isChecked: false,
        name: this.todoInput
      });
    } 
    // this.todos.push(this.todoInput);
    // console.log(this.todoInput);
    // console.log(this.todoInput);
    this.todoInput = "";
    // console.log(this.todos);
  }

  // deleteTodo(todo){
  //   console.log(todo);
  //   for(var i = 0; i < this.todos.length; i++){
  //     if(this.todos[i] == todo){
  //       this.todos.splice( i, 1);
  //     }
  //   }
  // }
  deleteTodo(todo){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  editTodo(todo){
    let index = this.todos.indexOf(todo);
    console.log(index);

    this.todos[index] = prompt("please edit your todo", this.todos[index]);
  }

  checkOffTodo(todo){
    // todo.isChecked =(todo.isChecked) ? false : true;
    todo.isChecked = !todo.isChecked;
    console.log('hello');
  }
  // editTodo(todo){
  //   this.appState = 'edit';
  //   this.oldText = todo.text;
  //   this.text = todo.text;
  // }
  // updateTodo(){
  //   for(var i = 0; i < this.todos.length; i++){
  //     if(this.todos[i].text == this.oldText){
  //       this.todos[i].text = this.text;
  //     }
  //   }
  //   this._todoService.updateTodo(this.oldText, this.text);
  // }
}

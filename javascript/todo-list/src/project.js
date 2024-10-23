import { Todo } from "./todo";

export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.htmlName = name.replaceAll(" ", "-").toLowerCase();
    this.showTodos = true;
  }

  addTodo(todo) {
    this.todos.push(todo);
    todo.addToProject(this.htmlName);
  }

  delTodo(todo) {
    this.todos = this.todos.filter((el) => el !== todo);
  }

  toggleShow() {
    this.showTodos = !this.showTodos;
  }
}

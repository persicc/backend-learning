import { Todo } from "../models/TodoModel";

export class TodoService {
  todos: Array<Todo> = [];

  async getAll(): Promise<any> {
    return this.todos;
  }

  async getById(id: string): Promise<any> {
    const todo = this.todos.find((todo: any) => todo.id == id);
  }

  async create(todo: Todo): Promise<any> {
    this.todos.push(todo);
    return todo;
  }

  async delete(id: string): Promise<any> {
    const filteredTodos = this.todos.filter((todos) => todos.id != id);
    return filteredTodos;
  }
}

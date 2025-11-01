export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: Date;
};

export class Todo {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: Date;

  constructor(id: string, title: string, isDone: boolean, createdAt: Date) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
    this.createdAt = createdAt;
  }
}

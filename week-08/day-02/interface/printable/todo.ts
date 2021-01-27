// Create a new class called Todo that has three fields representing the task as a string,
//  the priority as string and whether it is done or not as a boolean
// The todo should have the following string representation:
// Task: Buy milk | Priority: high | Done: true

import { Printable } from './printable';

export class Todo implements Printable {
  task: string;
  priority: string;
  isItDone: boolean;

  constructor(task: string, priority: string) {
    this.task = task;
    this.priority = priority;
    this.isDone();
  }

  isDone(): void {
    this.isItDone = true;
  }

  printAllFields(): void {
    console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.isItDone} `);
  }
}

const todos: Todo[] = [];
todos.push(new Todo('Buy milk', 'high'));
todos.push(new Todo('Make dinner', 'high'));

for (let todo of todos) {
  todo.printAllFields();
}

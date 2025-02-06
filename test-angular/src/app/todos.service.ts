import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from './model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // todoItem: Array<Todo> = [
  //   {
  //     userId: 1,
  //     id: 0,
  //     title: 'test',
  //     completed: false
  //   },
  //   {
  //     userId: 2,
  //     id: 1,
  //     title: 'test2',
  //     completed: true
  //   },
  //   {
  //     userId: 3,
  //     id: 2,
  //     title: 'test3',
  //     completed: false
  //   }
  // ];

  http = inject(HttpClient);

  getTodos() {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos');
  }

  constructor() {

   }
}

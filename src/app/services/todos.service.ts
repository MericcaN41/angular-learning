import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)

  getTodos = () => {
    return this.http.get<{
      todos: Todo[]
    }>('https://dummyjson.com/todos?limit=10')
  }
}

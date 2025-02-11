import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todos = signal<Todo[]>([])
  todoService = inject(TodosService)
  todoInput = signal('')

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe(response => {
        this.todos.set(response.todos)
      })
  }

  completeTodo = (id: number) => {
    this.todos.update(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  addTodo = () => {
    this.todos.update(todos => {
      return [
        ...todos,
        {
          id: todos.length + 1,
          completed: false,
          todo: this.todoInput(),
          userid: 1
        }
      ]
    })
  }
}

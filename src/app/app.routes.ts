import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { InputComponent } from './pages/input/input.component';
import { TodosComponent } from './pages/todos/todos.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }, 
    {
        path: "counter", component: CounterComponent
    },
    {
        path: "input", component: InputComponent
    },
    {
        path: "todos", component: TodosComponent
    }
];


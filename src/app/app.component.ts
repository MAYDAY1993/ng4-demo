import { Component } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TodoService],
})

export class AppComponent {
    title = 'todolist';
    initTodo: Todo = new Todo();


    constructor(
        private todoService: TodoService,
    ) {}

    addItem() {
        this.todoService.addItem(this.initTodo);
        this.initTodo = new Todo();
    }

    deleteItem(todo) {
        this.todoService.deleteItem(todo.id);
    }

    toggleItemState(todo) {
        this.todoService.toggleItemState(todo);
    }

    getTodos() {
        return this.todoService.getTodos();
    }
}
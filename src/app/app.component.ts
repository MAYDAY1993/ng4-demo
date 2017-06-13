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
        console.log(this.initTodo);
        this.todoService.addItem(this.initTodo);
        this.initTodo = new Todo();
    }

    deleteItem(todo) {
        this.todoService.deleteItem(todo.id);
    }

    toggleItemState(todo) {
        this.todoService.toggleItemState(todo);
    }

    get todos() {
        return this.todoService.getTodos();
    }

    editItem(todo) {
        if (todo.checked) {
            return;
        }
        this.todoService.editItem(todo);
    }

    commitItem(todo) {
        console.log(todo.title);
        this.todoService.commitItem(todo);
    }

    cancelItem(todo) {
        this.todoService.cancelItem(todo);
    }
}
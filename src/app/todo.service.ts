import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    // init data
    currentId: number = 0;
    todos: Todo[] = [];

    constructor(
        private http: Http,
    ) {}

    getTodos(): Todo[] {
        return this.todos;
    }

    getItemById(id: number): Todo {
        return this.todos.filter(todo => todo.id === id).pop();
    }

    addItem(todo: Todo) {
        if (!todo.id) {
            todo.id = ++this.currentId;
        }
        this.todos.push(todo);
        return this;
    }

    deleteItem(id: number) {
        let currentItem = this.getItemById(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this;
    }

    editItem(id: number, values: Object = {}): Todo {
        let todo = this.getItemById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }

    toggleItemState(todo: Todo) {
        let afterChangeTodo = this.editItem(todo.id, {
            checked: !todo.checked
        });
        return afterChangeTodo;
    }

}
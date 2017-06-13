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

    addItem(todo: Todo): TodoService {
        console.log(todo.title);
        if (!todo.title) {
            return;
        }
        if (!todo.id) {
            todo.id = ++this.currentId;
        }
        this.todos.push(todo);
        console.log(this.todos.length);
        return this;
    }

    deleteItem(id: number): TodoService {
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this;
    }

    editItem(todo): Todo {
        todo.preTitle = todo.title;

        console.log(todo);
        if (!todo) {
            return null;
        }
        todo.editing = true;
        return todo;
    }

    commitItem(todo, value: Object = {}): Todo {
        todo.editing = false;
        Object.assign(todo, value);
        console.log(todo);
        return todo;
    }

    cancelItem(todo): Todo {
        todo.editing = false;
        todo.title = todo.preTitle;
        console.log(todo);
        return todo;
    }

    toggleItemState(todo: Todo) {
        let afterChangeTodo = Object.assign(todo, {
            checked: !todo.checked
        });
        return afterChangeTodo;
    }

}
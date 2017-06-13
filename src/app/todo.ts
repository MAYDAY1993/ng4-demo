export class Todo {
    id: number;
    title: string;
    preTitle: string;
    checked: boolean = false;
    editing: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
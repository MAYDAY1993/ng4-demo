export class Todo {
    id: number;
    title: string;
    checked: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
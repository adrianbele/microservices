import {$http} from "services/http";

// TODO make a singleton
// TODO use http object
export class TaskService {
    tasks: Array<string> = ['Dishes', 'Groceries', 'Laundry', 'Train'];

    constructor() {
        console.log("TaskService.ts constructor");
    }
    get() {
        return this.tasks;
    }
    add(value) {
        this.tasks.push(value);
    }
}

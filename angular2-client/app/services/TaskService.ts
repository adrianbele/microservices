import {$http} from "services/http";

// TODO make a singleton
// TODO use http object
export class TaskService {
    tasks: Array<string>;// = ['Dishes', 'Groceries', 'Laundry', 'Train'];

    constructor() {
        console.log("TaskService.ts constructor");

        let token = localStorage.getItem("jwt");

        this.getTasks(token).then((obj) =>{
            console.log("SERVER: " + obj);
            this.tasks = obj;
        });
    }

    get() {
        return this.tasks;
    }
    add(value) {
        this.tasks.push(value);
    }

    private getTasks(token: String): Promise<any> {
        return $http.get("http://localhost:8080/api/tasks/tim", token);
    }
}

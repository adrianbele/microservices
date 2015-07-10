import {Component, View, NgFor} from 'angular2/angular2';

import {AuthenticationService} from '../../services/AuthenticationService';
import {Task} from 'components/tasks/task';
import {TaskService} from '../../services/TaskService';

@Component({
    selector: 'component-2',
    viewInjector: [AuthenticationService, TaskService]
})
@View({
    templateUrl: './components/tasks/tasks.html?v=<%= VERSION %>',
    directives: [NgFor]
})
export class Tasks {
    authenticationService: AuthenticationService;
    taskService: TaskService;
    tasks: Array<Task>;
    nrOfTasks: number;
    message: string;

    constructor(authenticationService: AuthenticationService, taskService: TaskService) {
        console.log("tasks.ts constructor");
        this.authenticationService = authenticationService
        this.taskService = taskService;
        this.message = null;

        if (this.authenticationService.isLoggedIn()) {
            this.taskService.getTasks().then((obj) => {
                this.tasks = obj.actionResult;
                this.nrOfTasks = this.tasks.length;
                console.log("finished getting tasks: " + this.tasks.length);
            }).catch((error) => {
                this.message = error.message;
            });
        } else {
            this.message = "You are not authenticated, please log in.";
        }
    }

    addTask(event, newname) {
        event.preventDefault(); // prevent native page refresh
        let newTask = new Task(newname.value);
        this.taskService.addTask(newTask).then((obj) => {
            newTask.setId(obj.actionResult._id);
            this.tasks.push(newTask);
            newname.value = "";
        });
        // TODO catch error
    }
}

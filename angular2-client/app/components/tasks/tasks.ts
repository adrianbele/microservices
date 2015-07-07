import {Component, View, NgFor} from 'angular2/angular2';

import {AuthenticationService} from '../../services/AuthenticationService';
import {Task} from 'components/tasks/task';
import {TaskService} from '../../services/TaskService';

@Component({
    selector: 'component-2',
    appInjector: [AuthenticationService, TaskService]
})
@View({
    templateUrl: './components/tasks/tasks.html?v=<%= VERSION %>',
    directives: [NgFor]
})
// TODO create a 'ProtectedComponent' superclass which will check session
export class Tasks {
    taskService: TaskService;
    tasks: Array<any>;
    nrOfTasks: number;

    constructor(authenticationService: AuthenticationService, taskService: TaskService) {
        console.log("tasks.ts constructor");
        this.taskService = taskService;

        if (authenticationService.isLoggedIn()) {
            this.taskService.getTasks().then((obj) => {
                this.tasks = obj.actionResult;
                this.nrOfTasks = this.tasks.length;
                console.log("finished getting tasks: " + this.tasks.length);
            });
            // TODO catch error
        } else {
            // TODO handle no token situation
            console.log("user not authenticated");
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

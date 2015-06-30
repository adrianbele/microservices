import {Component, View, NgFor} from 'angular2/angular2';

import {Task} from 'components/tasks/task';
import {TaskService} from '../../services/TaskService';

@Component({
    selector: 'component-2',
    appInjector: [TaskService]
})
@View({
    templateUrl: './components/tasks/tasks.html?v=<%= VERSION %>',
    directives: [NgFor]
})
export class Tasks {
    taskService: TaskService;
    tasks: Array<any>;
    nrOfTasks: number;

    constructor(taskService: TaskService) {
        console.log("tasks.ts constructor");
        this.taskService = taskService;
        let token = localStorage.getItem("jwt");

        this.taskService.getTasks(token).then((obj) => {
            this.tasks = obj.actionResult;
            this.nrOfTasks = this.tasks.length;
            console.log("finished getting tasks: " + this.tasks.length);
        });
        // TODO catch error
    }

    addTask(event, newname) {
        event.preventDefault(); // prevent native page refresh
        let token = localStorage.getItem("jwt");
        let newTask = new Task(newname.value);

        this.taskService.addTask(newTask, token).then((obj) => {
            newTask.setId(obj.actionResult._id);
            this.tasks.push(newTask);
            newname.value = "";
        });
        // TODO catch error
    }
}

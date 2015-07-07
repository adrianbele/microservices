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

        this.taskService.getTasks().then((obj) => {
            this.tasks = obj.actionResult;
            this.nrOfTasks = this.tasks.length;
            console.log("finished getting tasks: " + this.tasks.length);
        });
        // TODO catch error
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

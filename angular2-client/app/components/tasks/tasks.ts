import {Component, View, NgFor} from 'angular2/angular2';

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
    tasks: Array<string>;

    constructor(taskService: TaskService) {
        console.log("tasks.ts constructor");
        this.taskService = taskService;
        this.tasks = taskService.get();
    }
    addTask(event, newname) {
        event.preventDefault(); // prevent native page refresh
        this.taskService.add(newname.value);
        newname.value = "";
    }
}

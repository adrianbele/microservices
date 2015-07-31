import {Component, View, NgFor, NgIf} from 'angular2/angular2';

import {AuthenticationService} from '../../services/AuthenticationService';
import {Task} from 'components/tasks/task';
import {TaskServiceImpl} from '../../services/TaskService';
import {EventManager} from "utils/eventbus/EventManager";

import {formDirectives} from 'angular2/forms';

@Component({
    selector: 'component-2',
    viewInjector: [AuthenticationService, TaskServiceImpl]
})
@View({
    templateUrl: './components/tasks/tasks.html?v=<%= VERSION %>',
    directives: [NgFor, NgIf, formDirectives]
})
export class Tasks {
    tasks: Array<Task>;
	task: Task = new Task();
	nrOfTasks: number;
    private eventManager: EventManager = EventManager.getInstance();

    constructor(public authenticationService: AuthenticationService, public taskService: TaskServiceImpl) {
        console.log("tasks.ts constructor");

        if (this.authenticationService.isLoggedIn()) {
            this.taskService.getTasks().then((obj) => {
                this.tasks = obj.actionResult;
                console.log("finished getting tasks: " + this.tasks.length);
	            this.nrOfTasks = this.tasks.length;
            }).catch((error) => {
	            this.eventManager.publish("tasksResult", [false, error.message]);
            });
        } else {
	        this.eventManager.publish("authenticationStateChange", [false, "You are not authenticated, please log in."]);
        }
    }

    saveTask(event: any): void {
        event.preventDefault(); // prevent native page refresh
        if (this.task && (this.task._id == null || this.task._id == undefined)) {
	        let newTask = this.task;
	        this.taskService.addTask(newTask).then((obj) => {
		        console.dir(obj);
		        newTask.setId(obj.actionResult._id);
		        console.log("before push: " + this.tasks.length);
		        this.nrOfTasks = this.tasks.push(newTask);
		        this.eventManager.publish("tasksResult", [true, "Added task '" + newTask.getId() + "'"]);
		        this.task = new Task();
	        }).catch((error) => {
		        this.eventManager.publish("tasksResult", [false, error.message]);
	        });
        } else {
	        this.taskService.updateTask(this.task).then((obj) => {
		        this.eventManager.publish("tasksResult", [true, "Updated task '" + this.task._id + "'"]);
		        this.task = new Task();
	        }).catch((error) => {
		        this.eventManager.publish("tasksResult", [false, error.message]);
	        });
        }
    }

	loadTask(event: any, task: Task): void {
		event.preventDefault(); // prevent native page refresh
		console.log("load task " + task._id);
		this.task = task;
	}
}

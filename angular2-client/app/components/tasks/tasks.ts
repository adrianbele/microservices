import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {formDirectives} from 'angular2/forms';

import {AuthenticationService} from '../../services/AuthenticationService';
import {Task} from 'components/tasks/task';
import {TaskServiceImpl} from '../../services/TaskService';
import {EventManager} from "utils/eventbus/EventManager";

@Component({
    selector: 'component-2',
    viewInjector: [AuthenticationService, TaskServiceImpl, formDirectives]
})
@View({
    templateUrl: './components/tasks/tasks.html?v=<%= VERSION %>',
    directives: [NgFor, NgIf]
})
export class Tasks {
    tasks: Array<Task>;
	taskTitle: string;
	taskId: number;
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

    saveTask(event, taskTitle: string, taskId: number) {
        event.preventDefault(); // prevent native page refresh
        if (taskId == null) {
	        let newTask = new Task(taskTitle);
	        this.taskService.addTask(newTask).then((obj) => {
		        console.dir(obj);
		        newTask.setId(obj.actionResult._id);
		        console.log("before push: " + this.tasks.length);
		        this.nrOfTasks = this.tasks.push(newTask);
		        this.eventManager.publish("tasksResult", [true, "Added task '" + newTask.getId() + "'"]);
		        this.taskTitle = null;
		        this.taskId = null;
	        }).catch((error) => {
		        this.eventManager.publish("tasksResult", [false, error.message]);
	        });
        } else {
	        let updatedTask = new Task(taskTitle);
	        this.taskService.updateTask(updatedTask).then((obj) => {
		        this.eventManager.publish("tasksResult", [true, "Updated task '" + updatedTask.getId() + "'"]);
		        this.taskTitle = null;
		        this.taskId = null;
	        }).catch((error) => {
		        this.eventManager.publish("tasksResult", [false, error.message]);
	        });
        }
    }

	// TODO use a modelobject in the form to also load _id
    showTask(event, taskTitle: string, taskId: number) {
        event.preventDefault(); // prevent native page refresh
	    console.log("showTask with id: " + taskId);
	    this.taskTitle = taskTitle;
	    this.taskId = taskId;
    }
}

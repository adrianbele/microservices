import {Component, View, NgFor} from 'angular2/angular2';
import {EventManager} from "utils/eventbus/EventManager";
//import {AuthenticationService} from '../../services/AuthenticationService';

@Component({
	selector: 'app-notifications'
	//,viewInjector: [AuthenticationService, TaskService]
})
@View({
	templateUrl: './components/notifications/notifications.html?v=<%= VERSION %>',
	directives: [NgFor]
})
export class Notifications {
	message: string;

	constructor() {
		let eventManager = EventManager.getInstance();

		eventManager.subscribe("authenticationStateChange", (event: Array<any>) => {
			this.message = event[1];
		});

		eventManager.subscribe("tasksResult", (event: Array<any>) => {
			this.message = event[1];
		});
	}

	close() {
		this.message = null;
	}
}
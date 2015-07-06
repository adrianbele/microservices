import {Component, View} from 'angular2/angular2';
import {AuthenticationService} from '../../services/AuthenticationService';
import {EventManager} from "utils/eventbus/EventManager";

@Component({
    selector: 'component-3',
    appInjector: [AuthenticationService]
})

@View({
  templateUrl: './components/login/login.html?v=<%= VERSION %>',
})

export class Login {
    message: string;
    authenticationService: AuthenticationService;
    eventManager: EventManager;

    constructor(authenticationService: AuthenticationService) {
        if (!this.authenticationService) this.authenticationService = authenticationService;
        this.eventManager = EventManager.getInstance(); // singleton, do not use DI
        this.message = null;
    }

    login(event, username: String, password: String) {
        event.preventDefault(); // prevent native page refresh
        console.log("user attempts to log in as " + username + " with " + password);
        this.authenticationService.getNewToken(username, password).then((data) => {
            if (data != null && data.split(".").length === 3) {
                this.authenticationService.logIn(data);
                let expires = this.authenticationService.getExpireTimestamp(data);
                this.message = "Logged in to the system until " + new Date(expires);
                this.eventManager.publish("authenticationStateChange", true);
            } else {
                this.message = "server did not send correct token.";
                this.authenticationService.logOut();
                this.eventManager.publish("authenticationStateChange", false);
            }
        })
        .catch((error) => {
            this.message = error.message;
            console.log(error.message);
            this.eventManager.publish("authenticationStateChange", false);
        });
    }
}

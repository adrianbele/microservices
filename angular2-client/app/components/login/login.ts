import {Component, View} from 'angular2/angular2';
import {AuthenticationService} from '../../services/AuthenticationService';
import {EventManager} from "utils/eventbus/EventManager";

@Component({
    selector: 'component-3',
    viewInjector: [AuthenticationService]
})

@View({
  templateUrl: './components/login/login.html?v=<%= VERSION %>',
})

export class Login {
    eventManager: EventManager;

    constructor(public authenticationService: AuthenticationService) {
        this.eventManager = EventManager.getInstance(); // singleton, do not use DI
    }

    login(event, username: String, password: String) {
        event.preventDefault(); // prevent native page refresh
        console.log("user attempts to log in as " + username + " with " + password);
        this.authenticationService.getNewToken(username, password).then((data) => {
            if (data != null && data.split(".").length === 3) {
                this.authenticationService.logIn(data);
                let expires = this.authenticationService.getExpireTimestamp(data);
                this.eventManager.publish("authenticationStateChange", [true, "Logged in to the system until " + new Date(expires)]);
                setInterval(
                    (_) => this.checkLoggedInStatus(),
                    1000 * 60 * 5
                );
            } else {
                this.authenticationService.logOut();
                this.eventManager.publish("authenticationStateChange", [false, "server did not send correct token"]);
            }
        })
        .catch((error) => {
            console.log(error.message);
            this.eventManager.publish("authenticationStateChange", [false, error.message]);
        });
    }

    private checkLoggedInStatus() {
        if (!this.authenticationService.isLoggedIn()) {
            this.authenticationService.logOut();
            this.eventManager.publish("authenticationStateChange", [false, "Your session expired. Please log in"]);
        }
    }
}

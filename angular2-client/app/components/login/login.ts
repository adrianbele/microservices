import {Component, View} from 'angular2/angular2';
import {AuthenticationService} from '../../services/AuthenticationService';

@Component({
    selector: 'component-3',
    appInjector: [AuthenticationService]
})

@View({
  templateUrl: './components/login/login.html?v=<%= VERSION %>',
})

export class Login {
    message: String;
    authenticationService: AuthenticationService;

    constructor(authenticationService: AuthenticationService) {
        console.log("login.ts constructor");
        this.authenticationService = authenticationService;
        this.message = null;
    }

    login(event, username: String, password: String) {
        event.preventDefault(); // prevent native page refresh
        console.log("user attempts to log in as " + username + " with " + password);
        this.authenticationService.getNewToken(username, password).then((data) =>{
            if (data != null && data.split(".").length === 3) {
                this.message = "You are logged in to the system";
                localStorage.setItem("jwt", data);
            } else {
                this.message = "server did not send correct token";
                localStorage.removeItem("jwt");
            }
        })
        .catch((error) => {
            this.message = error.message;
            console.log(error.message);
        });
    }
}

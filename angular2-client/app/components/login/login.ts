import {Component, View} from 'angular2/angular2';

import {AuthenticationService} from '../../services/AuthenticationService';

@Component({
    selector: 'component-3'
    // , appInjector: [AuthenticationService]
})

@View({
  templateUrl: './components/login/login.html?v=<%= VERSION %>',
})

export class Login {
    token: String;

    constructor() {
        console.log("login.ts constructor");
        this.token = null;
    }

    login(event, username: String, password: String) {
        event.preventDefault(); // prevent native page refresh
        console.log("user attempts to log in as " + username + " with " + password);
        AuthenticationService.getNewToken(username, password).then((data) =>{
            if (data != null && data.split(".").length === 3) {
                this.token = data;
                localStorage.setItem("jwt", data);
            } else {
                this.token = "not a valid token";
                localStorage.removeItem("jwt");
            }
        })
        .catch((error) => {
            this.token = error.message;
            console.log(error.message);
        });
    }
}

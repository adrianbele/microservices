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
        this.token = null;
    }

    login(event, username: String, password: String) {
        event.preventDefault(); // prevent native page refresh
        console.log("user attempts to log in as " + username + " with " + password);
        AuthenticationService.getNewToken(username, password).then((data) =>{
            this.token = data;
        });
    }
}

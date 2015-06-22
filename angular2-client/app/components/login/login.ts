import {Component, View} from 'angular2/angular2';

@Component({selector: 'component-3'})

@View({
  templateUrl: './components/login/login.html?v=<%= VERSION %>',
})

export class Login {
    username: String;
    password: String;

    constructor() {
        this.username = "";
        this.password = "";
    }

    login(event, username: String, password: String) {
        event.preventDefault(); // prevent native page refresh
        this.username = username;
        this.password = password;
        console.log("user was logged in as " + username + " with " + password);

        // TODO use service that will ask user to logon
    }
}

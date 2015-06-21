
import {Component, View, bootstrap} from 'angular2/angular2';

// TODO get router working
//import { RouterOutlet, RouterLink } from 'angular2/router';
//import {routerInjectables} from 'angular2/router';

@Component({selector: 'app'})

@View({
    // directives: [RouterOutlet, RouterLink],
    templateUrl: "login.html"
})

export class LoginForm {
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
        if (username === "Tjerk") {

        }
    }
}

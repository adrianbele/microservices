/// <reference path="typings/angular2/angular2.d.ts" />

// TypeScript
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({selector: 'microservices-login-form'})

@View({templateUrl: "login.html"})

class LoginForm {
    username: String;
    password: String;

    constructor() {
        this.username = "";
        this.password = "";
    }

    login(username: String, password: String) {
        this.username = username;
        this.password = password;
        console.log("user was logged in as " + username + " with " + password);

        // TODO use service that will ask user to logon
        if (username === "Tjerk") {

        }
    }
}

bootstrap(LoginForm);

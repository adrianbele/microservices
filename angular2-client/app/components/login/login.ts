import {Component, View} from 'angular2/angular2';

//import {Http, httpInjectables} from 'angular2/http';

@Component({
    selector: 'component-3'
    //,appInjector: [httpInjectables]
})

@View({
  templateUrl: './components/login/login.html?v=<%= VERSION %>',
})

export class Login {
    //http: Http;
    token: String;

    constructor() { // http: Http
        this.token = null;
        //this.http = http;
    }

    login(event, username: String, password: String) {
        event.preventDefault(); // prevent native page refresh        
        console.log("user attempts to log in as " + username + " with " + password);
        // request a new JWT token from server
        /*
        http.post("/api/newToken", {"username": username, "password": password})
            .map(res => res.text())
            .subscribe(token => this.token = token);
        */
    }
}

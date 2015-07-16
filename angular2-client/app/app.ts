/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {Tasks} from './components/tasks/tasks';
import {Login} from './components/login/login';
import {Settings} from './components/settings/settings';

import {Notifications} from './components/notifications/notifications';

import {AuthenticationService} from 'services/AuthenticationService';
import {EventManager} from "utils/eventbus/EventManager";

@Component({
    selector: 'app',
    viewInjector: [AuthenticationService]
})
@RouteConfig([
    { path: '/', component: Home, as: 'home' },
    { path: '/home', component: Home, as: 'home' },
    { path: '/tasks', component: Tasks, as: 'tasks' },
    { path: '/login', component: Login, as: 'login' },
    { path: '/settings', component: Settings, as: 'settings' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink, Notifications]
})
class App {
    public loggedIn: boolean;
	private eventManager: EventManager = EventManager.getInstance();

    constructor(public authenticationService: AuthenticationService, public router: Router) {
        this.loggedIn = authenticationService.isLoggedIn();
        this.eventManager.subscribe("authenticationStateChange", (event: Array<any>) => {
            this.loggedIn = event[0];
            console.log("App caught event, loggedIn: " + event[0]);
        });
        console.log("app.ts finished constructor");
    }

    logout(event) {
        event.preventDefault();
        this.authenticationService.logOut();
        this.loggedIn = false;
        this.eventManager.publish("authenticationStateChange", [false, "You logged out"]);
        this.router.navigate("/home");
    }
}

bootstrap(App,[routerInjectables, AuthenticationService]);

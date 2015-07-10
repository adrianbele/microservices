/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {Tasks} from './components/tasks/tasks';
import {Login} from './components/login/login';
import {Settings} from './components/settings/settings';

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
  directives: [RouterOutlet, RouterLink]
})
class App {
    public loggedIn: boolean;

    constructor(public authenticationService: AuthenticationService) {
        let eventManager = EventManager.getInstance();

        this.loggedIn = authenticationService.isLoggedIn();
        eventManager.subscribe("authenticationStateChange", (msg: boolean) => {
            this.loggedIn = msg;
            console.log("App caught event, loggedIn: " + msg);
        });
        console.log("app.ts finished constructor");
    }

    logout(event) {
        event.preventDefault();
        // TODO perhaps throw event so the service does not need to be called
        this.authenticationService.logOut();
        this.loggedIn = false;
        // TODO use angular2 routing when it works, for now do a crude full page reload
        window.location.assign("/");
    }
}

bootstrap(App, [routerInjectables, AuthenticationService]);
